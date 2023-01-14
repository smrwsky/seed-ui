import React from 'react';
import { Icon, IconType } from '@seed-ui/icons';
import { useDebounceCallback } from '@react-hook/debounce';

import Tag from '../Tag';
import {
  InputAction,
  InputContainer,
  InputTag,
  InputTags,
  Textbox,
} from '../InputGroup';
import slug from '../../utils/slug';
import IconButton from '../IconButton';
import Popover from '../Popover';
import Option, { OptionProps } from '../Option';

export type AutocompleteSize = 'sm' | 'md' | 'lg';

export interface OptionComponentProps<TOption> extends OptionProps {
  option: TOption;
}

export interface AutocompleteProps<TOption = unknown, TValue = TOption> {
  OptionComponent?: React.ComponentType<OptionComponentProps<TOption>>;
  allowEmptyQuery?: boolean;
  allowInputValue?: boolean;
  autoFocus?: boolean;
  clearText?: string;
  defaultValue?: TValue;
  delay?: number;
  disabled?: boolean;
  getLabel?: (option: TOption) => string;
  icon?: string;
  iconType?: IconType;
  id?: string;
  invalid?: boolean;
  loading?: boolean;
  loadingText?: string;
  multiple?: boolean;
  name?: string;
  noResultText?: string;
  options?: TOption[];
  placeholder?: string;
  readOnly?: boolean;
  ref?: React.Ref<HTMLInputElement>;
  rounded?: boolean;
  size?: AutocompleteSize;
  value?: TValue;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: (value: TValue) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onSearch?: (query: string) => void | Promise<void>;
}

export const LISTBOX_ID = 'listbox';

export const OPTION_ID = 'option';

const toggleOption = (value: unknown, items: unknown[]): unknown[] =>
  items.includes(value)
    ? items.filter((item) => item !== value)
    : [...items, value];

const defaultGetLabel = (option: unknown): string => option as string;

export interface AutocompleteFn {
  <TOption = unknown, TValue = TOption>(
    props: AutocompleteProps<TOption, TValue>,
  ): React.ReactElement;
  displayName: 'Autocomplete';
}

const Autocomplete: React.FC<AutocompleteProps> = React.forwardRef(
  (
    {
      OptionComponent,
      allowEmptyQuery,
      allowInputValue,
      clearText = 'Clear',
      defaultValue,
      delay = 500,
      disabled,
      getLabel = defaultGetLabel,
      icon,
      iconType,
      id = '',
      invalid,
      loading,
      loadingText = 'Searching...',
      multiple,
      noResultText = 'No result',
      options,
      readOnly,
      rounded,
      size = 'md',
      value,
      onBlur,
      onChange,
      onFocus,
      onSearch,
      ...inputProps
    },
    ref,
  ) => {
    const [valueState, setValueState] = React.useState(defaultValue);
    const [openListbox, setOpenListbox] = React.useState(false);
    const [focused, setFocused] = React.useState(false);
    const [activeIndex, setActiveOption] = React.useState<number>(-1);
    const [displayText, setDisplayText] = React.useState('');
    const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
    const listboxRef = React.useRef<HTMLUListElement>(null);
    const hasDisplayText = Boolean(displayText);

    const optList = React.useMemo(
      (): unknown[] => (Array.isArray(options) ? options : []),
      [options],
    );

    const valuesList = React.useMemo(
      (): unknown[] =>
        ((Array.isArray(valueState) && valueState) ||
          (valueState && [valueState]) ||
          []) as unknown[],
      [valueState],
    );

    const changeValue = React.useCallback(
      (nextValue: unknown): void => {
        if (typeof value === 'undefined' && !onChange) {
          setValueState(nextValue as never);
        } else {
          onChange?.(nextValue as never);
        }
      },
      [onChange, value],
    );

    const selectOption = React.useCallback(
      (index: number): void => {
        const option = optList[index];

        if (typeof option !== 'undefined') {
          const nextValue = multiple
            ? toggleOption(option, valuesList)
            : option;
          changeValue(nextValue);
        }
      },
      [changeValue, multiple, optList, valuesList],
    );

    const handleChangeOpenListbox = React.useCallback((visible: boolean) => {
      setOpenListbox(visible);
    }, []);

    const invokeSearch = React.useCallback(
      (val: string) => onSearch?.(val),
      [onSearch],
    );

    const debouncedSearch = useDebounceCallback(invokeSearch, delay, false);

    const handleBlur = React.useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        e.persist();
        setFocused(false);
        setOpenListbox(false);
        onBlur?.(e);
      },
      [onBlur],
    );

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setOpenListbox(true);

        if (allowInputValue) {
          changeValue(e.target.value);
        } else {
          setDisplayText(e.target.value);
        }
      },
      [allowInputValue, changeValue],
    );

    const handleFocus = React.useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true);

        if (onFocus) {
          e.persist();
          onFocus(e);
        }
      },
      [onFocus],
    );

    const handleClick = React.useCallback(() => {
      if (!disabled && !readOnly) {
        setOpenListbox((prevState) => hasDisplayText || !prevState);
      }
    }, [disabled, hasDisplayText, readOnly]);

    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
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
      },
      [activeIndex, openListbox, optList.length, selectOption],
    );

    const handleClear = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        changeValue(null);
        setDisplayText('');
        setActiveOption(-1);
        setOpenListbox(false);
      },
      [changeValue],
    );

    const handleOptionMouseDown = React.useCallback(
      (e: React.MouseEvent<HTMLLIElement>) => {
        e.preventDefault();
        selectOption(Number(e.currentTarget.dataset.index));
        setOpenListbox(false);
        setActiveOption(-1);
      },
      [selectOption],
    );

    const handleOptionMouseEnter = React.useCallback(
      (e: React.MouseEvent<HTMLLIElement>) => {
        const idx = Number(e.currentTarget.dataset.index);

        if (Number.isNaN(idx)) {
          return;
        }

        setActiveOption(idx);
      },
      [],
    );

    const handleOptionMouseLeave = React.useCallback(() => {
      setActiveOption(-1);
    }, []);

    const handleRemove = React.useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const index = Number(e.currentTarget.dataset.index);

        if (!Number.isNaN(index)) {
          const nextVal = [...valuesList];
          nextVal.splice(index, 1);
          changeValue(nextVal);
        }
      },
      [changeValue, valuesList],
    );

    React.useEffect(() => {
      if (typeof value !== 'undefined') {
        setValueState(value);
      }
    }, [value]);

    React.useEffect(() => {
      if (!openListbox) {
        const text =
          !valueState || Array.isArray(valueState)
            ? ''
            : getLabel(valueState as never);

        setDisplayText(text);
        setActiveOption(-1);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [openListbox, valueState]);

    React.useEffect(() => {
      if (
        displayText &&
        (multiple ||
          !valueState ||
          displayText !== getLabel(valueState as never))
      ) {
        setOpenListbox(true);
      }

      if (displayText || allowEmptyQuery) {
        debouncedSearch(displayText);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [displayText]);

    return (
      <>
        <InputContainer
          disabled={disabled}
          focused={focused}
          invalid={invalid}
          readOnly={readOnly}
          ref={setAnchorEl}
          rounded={rounded}
          size={size}
        >
          {icon && (
            <InputAction>
              <Icon name={icon} size="sm" type={iconType} variant="secondary" />
            </InputAction>
          )}

          <InputTags>
            {multiple &&
              valuesList.map((item, idx) => (
                <InputTag key={idx}>
                  <Tag
                    data-index={idx}
                    deletable
                    onMouseDown={handleRemove}
                    role="button"
                    tabIndex={-1}
                    variant="outline-tertiary"
                  >
                    {getLabel(item as never)}
                  </Tag>
                </InputTag>
              ))}

            <Textbox
              aria-activedescendant={
                activeIndex !== -1 ? slug(id, OPTION_ID, activeIndex) : ''
              }
              aria-autocomplete="list"
              aria-controls={openListbox ? slug(id, LISTBOX_ID) : ''}
              aria-expanded={openListbox}
              aria-haspopup="listbox"
              aria-invalid={invalid}
              aria-owns={openListbox ? slug(id, LISTBOX_ID) : ''}
              autoComplete="off"
              disabled={disabled}
              id={id}
              onBlur={handleBlur}
              onChange={handleChange}
              onClick={handleClick}
              onFocus={handleFocus}
              onKeyDown={handleKeyDown}
              readOnly={readOnly}
              ref={ref}
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
                  icon="x"
                  onMouseDown={handleClear}
                  rounded
                  size="xs"
                  tabIndex={-1}
                  variant="tertiary"
                />
              </InputAction>
            )}
        </InputContainer>

        <Popover
          anchorElement={anchorEl}
          onOpenChange={handleChangeOpenListbox}
          open={openListbox}
          placement="bottom-start"
          role="presentation"
          strategy="absolute"
          style={{
            width: anchorEl ? `${anchorEl.offsetWidth}px` : undefined,
            maxWidth: '100%',
            margin: 0,
          }}
          trigger="manual"
        >
          <ul id={slug(id, LISTBOX_ID)} ref={listboxRef} role="listbox">
            {optList.map((item, idx) =>
              OptionComponent ? (
                <OptionComponent
                  active={idx === activeIndex}
                  data-index={idx}
                  id={slug(id, OPTION_ID, idx)}
                  key={idx}
                  onMouseDown={handleOptionMouseDown}
                  onMouseEnter={handleOptionMouseEnter}
                  onMouseLeave={handleOptionMouseLeave}
                  option={item as never}
                  selected={valuesList.includes(item)}
                />
              ) : (
                <Option
                  active={idx === activeIndex}
                  data-index={idx}
                  id={slug(id, OPTION_ID, idx)}
                  key={idx}
                  onMouseDown={handleOptionMouseDown}
                  onMouseEnter={handleOptionMouseEnter}
                  onMouseLeave={handleOptionMouseLeave}
                  selected={valuesList.includes(item)}
                >
                  {getLabel(item as never)}
                </Option>
              ),
            )}

            {loading && (
              <Option disabled role="presentation">
                {loadingText}
              </Option>
            )}

            {!loading && optList.length === 0 && (
              <Option disabled role="presentation">
                {noResultText}
              </Option>
            )}
          </ul>
        </Popover>
      </>
    );
  },
);

Autocomplete.displayName = 'Autocomplete';

export default React.memo(Autocomplete) as AutocompleteFn;
