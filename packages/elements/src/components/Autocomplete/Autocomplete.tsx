/* eslint-disable jsx-a11y/no-autofocus */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Icon } from '@seed-ui/icons';

import Tag from '../Tag';
import InputTags from '../InputTags';
import Textbox from '../Textbox';
import InputGroup from '../InputGroup';
import Label from '../Label';
import slug from '../../utils/slug';
import InputContainer from '../InputContainer';
import InputAction from '../InputAction';
import IconButton from '../IconButton';
import useDebounce from '../../utils/use-debounce';
import { MenuAction, MenuItem, MenuLabel, PopupMenu } from '../Menu';

export type AutocompleteShape = 'rectangle' | 'stadium';

export type AutocompleteSize = 'sm' | 'md' | 'lg';

export type AutocompleteDirection = 'row' | 'column';

export interface AutocompleteProps<TOption = unknown> {
  action?: React.ReactNode;
  allowEmptyQuery?: boolean;
  allowInputValue?: boolean;
  autoFocus?: boolean;
  clearText?: string;
  defaultValue?: unknown;
  delay?: number;
  direction?: AutocompleteDirection;
  disabled?: boolean;
  error?: string;
  errorText?: string;
  getLabel?: (option: TOption) => string;
  id?: string;
  invalid?: boolean;
  label?: React.ReactNode;
  loading?: boolean;
  loadingError?: boolean | string;
  loadingText?: string;
  message?: string;
  multiple?: boolean;
  name?: string;
  noResultText?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: (value: unknown) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onSearch?: (query: string) => void | Promise<void>;
  onSelect?: (option: TOption) => void;
  options?: TOption[];
  placeholder?: string;
  readOnly?: boolean;
  renderOption?: (option: TOption) => JSX.Element;
  shape?: AutocompleteShape;
  size?: AutocompleteSize;
  value?: unknown;
}

export const AUTOCOMPLETE_DEFAULT_DELAY = 500;

export const LISTBOX_ID = 'listbox';

export const OPTION_ID = 'option';

const toggleOption = (value: unknown, items: unknown[]): unknown[] =>
  items.includes(value)
    ? items.filter((item) => item !== value)
    : [...items, value];

const defaultGetLabel = (option: unknown): string => option as string;

function Autocomplete<TOption = unknown>({
  direction = 'column',
  options,
  shape = 'rectangle',
  value,
  getLabel = defaultGetLabel,
  multiple = false,
  allowInputValue = false,
  allowEmptyQuery = false,
  defaultValue,
  delay = AUTOCOMPLETE_DEFAULT_DELAY,
  loading = false,
  loadingError,
  clearText = 'Clear',
  loadingText = 'Searching...',
  errorText = 'Search failed',
  size = 'md',
  label,
  action,
  invalid,
  error,
  message,
  disabled = false,
  id = '',
  readOnly = false,
  renderOption,
  onSearch,
  onSelect,
  onChange,
  onFocus,
  onBlur,
  ...inputProps
}: AutocompleteProps<TOption>): JSX.Element {
  const debounce = useDebounce();
  const [valueState, setValueState] = useState(defaultValue);
  const [openListbox, setOpenListbox] = useState(false);
  const [focused, setFocused] = useState(false);
  const [activeIndex, setActiveOption] = useState<number>(-1);
  const [displayText, setDisplayText] = useState('');
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const listboxRef = useRef<HTMLUListElement>(null);

  const optList = useMemo(
    (): TOption[] => (Array.isArray(options) ? options : []),
    [options],
  );

  const valuesList = useMemo(
    (): TOption[] =>
      ((Array.isArray(valueState) && valueState) ||
        (valueState && [valueState]) ||
        []) as TOption[],
    [valueState],
  );

  const changeValue = useCallback(
    (v: unknown): void => {
      if (typeof value === 'undefined' && !onChange) {
        setValueState(v);
      } else {
        onChange?.(v);
      }
    },
    [onChange, value],
  );

  const selectOption = useCallback(
    (index: number): void => {
      const option = optList[index];

      if (typeof option !== 'undefined') {
        const v = multiple ? toggleOption(option, valuesList) : option;
        changeValue(v);
      }
    },
    [changeValue, multiple, optList, valuesList],
  );

  const handleChangeOpenListbox = useCallback((visible: boolean) => {
    setOpenListbox(visible);
  }, []);

  const handleActiveIndexChange = useCallback((index) => {
    setActiveOption(index);
  }, []);

  useEffect(() => {
    if (typeof value !== 'undefined') {
      setValueState(value);
    }
  }, [value]);

  useEffect(() => {
    if (!openListbox) {
      const text =
        !valueState || Array.isArray(valueState)
          ? ''
          : getLabel(valueState as TOption);

      setDisplayText(text);
      setActiveOption(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openListbox, valueState]);

  useEffect(() => {
    if (
      displayText &&
      (multiple ||
        !valueState ||
        displayText !== getLabel(valueState as TOption))
    ) {
      setOpenListbox(true);
    }

    if ((displayText || allowEmptyQuery) && onSearch) {
      debounce(() => onSearch(displayText), delay);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText]);

  function handleBlur(e: React.FocusEvent<HTMLInputElement>): void {
    setFocused(false);
    setOpenListbox(false);

    if (onBlur) {
      e.persist();
      onBlur(e);
    }
  }

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>): void {
    setOpenListbox(true);

    if (allowInputValue) {
      changeValue(e.target.value);
    } else {
      setDisplayText(e.target.value);
    }
  }

  function handleFocus(e: React.FocusEvent<HTMLInputElement>): void {
    setFocused(true);

    if (onFocus) {
      e.persist();
      onFocus(e);
    }
  }

  function handleClick(): void {
    setOpenListbox((prevState) => !prevState);
  }

  function handleKeyDownInput(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === 'ArrowDown' && openListbox) {
      e.preventDefault();

      const nextOption =
        activeIndex >= optList.length - 1 ? 0 : activeIndex + 1;

      listboxRef.current
        ?.querySelector(`[data-index="${nextOption}"]`)
        ?.scrollIntoView({ block: 'nearest' });

      setActiveOption(nextOption);
    }

    if (e.key === 'ArrowUp' && openListbox) {
      e.preventDefault();

      const nextOption =
        activeIndex <= 0 ? optList.length - 1 : activeIndex - 1;

      listboxRef.current
        ?.querySelector(`[data-index="${nextOption}"]`)
        ?.scrollIntoView({ block: 'nearest' });

      setActiveOption(nextOption);
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      selectOption(activeIndex);
      setActiveOption(-1);
      setOpenListbox((prevState) => !prevState);
    }

    if (e.key === 'Escape') {
      setActiveOption(-1);
      setOpenListbox(false);
    }
  }

  function handleMouseDownClear(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    e.stopPropagation();
    changeValue(undefined);
    setDisplayText('');
    setActiveOption(-1);
    setOpenListbox(false);
  }

  function handleMouseDownOption(e: React.MouseEvent<HTMLAnchorElement>): void {
    e.preventDefault();
    selectOption(Number(e.currentTarget.dataset.index));
    setOpenListbox(false);
    setActiveOption(-1);
  }

  function removeOption(option: TOption, list: TOption[]): void {
    const newVal = list.filter((item) => getLabel(item) !== getLabel(option));
    changeValue(newVal);
  }

  return (
    <InputGroup
      direction={direction}
      error={error}
      htmlFor={id}
      label={
        typeof label === 'string' ? (
          <Label size={size === 'sm' ? 'sm' : 'md'}>{label}</Label>
        ) : (
          label
        )
      }
      message={message}
    >
      <InputContainer
        disabled={disabled}
        focused={focused}
        invalid={invalid || Boolean(error)}
        readOnly={readOnly}
        ref={setAnchorEl}
        shape={shape}
        size={size}
      >
        <InputTags>
          {multiple &&
            valuesList.map((item, idx) => (
              <Tag
                key={idx}
                onDelete={(): void => {
                  removeOption(item, valuesList);
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                tabIndex={-1}
                variant="secondary-outline"
              >
                {getLabel(item)}
              </Tag>
            ))}

          <Textbox
            aria-activedescendant={
              activeIndex !== -1 ? slug(id, OPTION_ID, activeIndex) : ''
            }
            aria-autocomplete="list"
            aria-controls={openListbox ? slug(id, LISTBOX_ID) : ''}
            aria-expanded={openListbox}
            aria-haspopup="listbox"
            aria-invalid={invalid || Boolean(error)}
            aria-owns={openListbox ? slug(id, LISTBOX_ID) : ''}
            autoComplete="off"
            disabled={disabled}
            id={id}
            onBlur={handleBlur}
            onChange={handleChangeInput}
            onClick={handleClick}
            onFocus={handleFocus}
            onKeyDown={handleKeyDownInput}
            readOnly={readOnly}
            role="combobox"
            type="text"
            value={displayText}
            {...inputProps}
          />
        </InputTags>

        {!readOnly &&
          !disabled &&
          (displayText.length > 0 || valuesList.length > 0) && (
            <InputAction>
              <IconButton
                aria-label={clearText}
                onMouseDown={handleMouseDownClear}
                size="sm"
                tabIndex={-1}
                variant="secondary"
              >
                <Icon name="x" />
              </IconButton>
            </InputAction>
          )}

        {action && <InputAction>{action}</InputAction>}
      </InputContainer>

      <PopupMenu
        activeIndex={activeIndex}
        anchorElement={anchorEl}
        autoFocus="off"
        id={slug(id, LISTBOX_ID)}
        onActiveIndexChange={handleActiveIndexChange}
        onOpenChange={handleChangeOpenListbox}
        open={openListbox}
        placement="bottom-start"
        ref={listboxRef}
        role="listbox"
        style={{
          width: anchorEl ? `${anchorEl.offsetWidth}px` : undefined,
        }}
        trigger="manual"
      >
        {optList.map((item, idx) => (
          <MenuItem
            id={slug(id, OPTION_ID, idx)}
            key={idx}
            onMouseDown={handleMouseDownOption}
            role="option"
            selected={valuesList.includes(item)}
          >
            <MenuLabel>{getLabel(item)}</MenuLabel>
            {valuesList.includes(item) && (
              <MenuAction>
                <Icon name="check" size="sm" variant="primary" />
              </MenuAction>
            )}
          </MenuItem>
        ))}

        {loading && loadingText && <MenuItem disabled>{loadingText}</MenuItem>}

        {!loading &&
          loadingError &&
          (typeof loadingError === 'string' || loadingText) && (
            <MenuItem disabled invalid>
              {typeof loadingError === 'string' ? loadingError : errorText}
            </MenuItem>
          )}
      </PopupMenu>
    </InputGroup>
  );
}

export default Autocomplete;
