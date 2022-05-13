import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
import Popover from '../Popover';
import MenuList from '../MenuList';
import MenuItem from '../MenuItem';

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

const defaultGetLabel = (option: unknown): string => String(option);

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
  const [openListbox, setShowDropdown] = useState(false);
  const [focused, setFocused] = useState(false);
  const [activeOption, setActiveOption] = useState<number>(-1);
  const [displayText, setDisplayText] = useState('');
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

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
    [onChange],
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
    setShowDropdown(visible);
  }, []);

  useEffect(() => {
    if (openListbox) {
      setActiveOption(allowInputValue ? -1 : 0);
    }

    if (!openListbox && displayText) {
      selectOption(activeOption);
      setActiveOption(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openListbox]);

  useEffect(() => {
    if (typeof value !== 'undefined') {
      setValueState(value);
    }
  }, [value]);

  useEffect(() => {
    const text =
      multiple || !valueState || Array.isArray(valueState)
        ? ''
        : getLabel(valueState as TOption);

    setDisplayText(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueState]);

  useEffect(() => {
    if (
      displayText &&
      (multiple ||
        !valueState ||
        displayText !== getLabel(valueState as TOption))
    ) {
      setShowDropdown(true);
    }

    if ((displayText || allowEmptyQuery) && onSearch) {
      debounce(() => onSearch(displayText), delay);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText]);

  function handleBlur(e: React.FocusEvent<HTMLInputElement>): void {
    setFocused(false);

    if (onBlur) {
      e.persist();
      onBlur(e);
    }
  }

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>): void {
    setShowDropdown(true);

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

  function handleKeyDownInput(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (
      ((e.key === 'Tab' && !e.shiftKey) || e.key === 'ArrowDown') &&
      openListbox
    ) {
      e.preventDefault();
      setActiveOption((prevState: number) =>
        prevState >= optList.length - 1 ? 0 : prevState + 1,
      );
    }

    if (
      ((e.key === 'Tab' && e.shiftKey) || e.key === 'ArrowUp') &&
      openListbox
    ) {
      e.preventDefault();
      setActiveOption((prevState: number) =>
        prevState <= 0 ? optList.length - 1 : prevState - 1,
      );
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      selectOption(activeOption);
      setActiveOption(-1);
      setShowDropdown(false);
    }

    if (e.key === 'Escape') {
      setActiveOption(-1);
      setShowDropdown(false);
    }
  }

  function handleMouseDownClear(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    e.stopPropagation();
    changeValue(undefined);
    setDisplayText('');
    setActiveOption(-1);
    setShowDropdown(false);
  }

  function handleMouseEnterOption(e: React.MouseEvent<HTMLLIElement>): void {
    const index = Number(e.currentTarget.dataset.index);

    if (!Number.isNaN(index)) {
      setActiveOption(index);
    }
  }

  function handleMouseDownOption(e: React.MouseEvent<HTMLLIElement>): void {
    e.preventDefault();
    selectOption(Number(e.currentTarget.dataset.index));
    setShowDropdown(false);
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
        aria-expanded={openListbox}
        aria-haspopup="listbox"
        aria-owns={openListbox ? slug(id, LISTBOX_ID) : ''}
        disabled={disabled}
        focused={focused}
        invalid={invalid || Boolean(error)}
        readOnly={readOnly}
        ref={setAnchorEl}
        role="combobox"
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
              activeOption !== -1 ? slug(id, OPTION_ID, activeOption) : ''
            }
            aria-autocomplete="list"
            aria-controls={openListbox ? slug(id, LISTBOX_ID) : ''}
            autoComplete="off"
            disabled={disabled}
            id={id}
            onBlur={handleBlur}
            onChange={handleChangeInput}
            onFocus={handleFocus}
            onKeyDown={handleKeyDownInput}
            readOnly={readOnly}
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

      <Popover
        anchorElement={anchorEl ?? undefined}
        onChangeOpen={handleChangeOpenListbox}
        open={openListbox}
        position="bottom"
        trigger="click"
      >
        {({ childRect }) => (
          <MenuList
            id={slug(id, LISTBOX_ID)}
            role="listbox"
            style={{ width: childRect.width }}
          >
            {optList.map((item, idx) => (
              <MenuItem
                active={idx === activeOption}
                data-index={idx}
                id={slug(id, OPTION_ID, idx)}
                key={idx}
                onMouseDown={handleMouseDownOption}
                onMouseEnter={handleMouseEnterOption}
                selected={valuesList.includes(item)}
              >
                {getLabel(item)}
              </MenuItem>
            ))}

            {loading && loadingText && (
              <MenuItem disabled>{loadingText}</MenuItem>
            )}

            {!loading &&
              loadingError &&
              (typeof loadingError === 'string' || loadingText) && (
                <MenuItem disabled invalid>
                  {typeof loadingError === 'string' ? loadingError : errorText}
                </MenuItem>
              )}
          </MenuList>
        )}
      </Popover>
    </InputGroup>
  );
}

export default Autocomplete;
