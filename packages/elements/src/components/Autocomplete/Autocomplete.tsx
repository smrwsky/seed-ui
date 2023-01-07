import React, {
  memo,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  ComponentType,
  ChangeEvent,
  FocusEvent,
  FocusEventHandler,
  MouseEvent,
  KeyboardEvent,
} from 'react';
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
  OptionComponent?: ComponentType<OptionComponentProps<TOption>>;
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
  rounded?: boolean;
  size?: AutocompleteSize;
  value?: TValue;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: (value: TValue) => void;
  onFocus?: FocusEventHandler<HTMLInputElement>;
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
  ): ReactElement;
  displayName: 'Autocomplete';
}

const Autocomplete: AutocompleteFn = ({
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
}) => {
  const [valueState, setValueState] = useState(defaultValue);
  const [openListbox, setOpenListbox] = useState(false);
  const [focused, setFocused] = useState(false);
  const [activeIndex, setActiveOption] = useState<number>(-1);
  const [displayText, setDisplayText] = useState('');
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const listboxRef = useRef<HTMLUListElement>(null);
  const hasDisplayText = Boolean(displayText);

  const optList = useMemo(
    (): unknown[] => (Array.isArray(options) ? options : []),
    [options],
  );

  const valuesList = useMemo(
    (): unknown[] =>
      ((Array.isArray(valueState) && valueState) ||
        (valueState && [valueState]) ||
        []) as unknown[],
    [valueState],
  );

  const changeValue = useCallback(
    (nextValue: unknown): void => {
      if (typeof value === 'undefined' && !onChange) {
        setValueState(nextValue as never);
      } else {
        onChange?.(nextValue as never);
      }
    },
    [onChange, value],
  );

  const selectOption = useCallback(
    (index: number): void => {
      const option = optList[index];

      if (typeof option !== 'undefined') {
        const nextValue = multiple ? toggleOption(option, valuesList) : option;
        changeValue(nextValue);
      }
    },
    [changeValue, multiple, optList, valuesList],
  );

  const handleChangeOpenListbox = useCallback((visible: boolean) => {
    setOpenListbox(visible);
  }, []);

  const invokeSearch = useCallback(
    (val: string) => onSearch?.(val),
    [onSearch],
  );

  const debouncedSearch = useDebounceCallback(invokeSearch, delay, false);

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      e.persist();
      setFocused(false);
      setOpenListbox(false);
      onBlur?.(e);
    },
    [onBlur],
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setOpenListbox(true);

      if (allowInputValue) {
        changeValue(e.target.value);
      } else {
        setDisplayText(e.target.value);
      }
    },
    [allowInputValue, changeValue],
  );

  const handleFocus = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      setFocused(true);

      if (onFocus) {
        e.persist();
        onFocus(e);
      }
    },
    [onFocus],
  );

  const handleClick = useCallback(() => {
    if (!disabled && !readOnly) {
      setOpenListbox((prevState) => hasDisplayText || !prevState);
    }
  }, [hasDisplayText]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
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

  const handleClear = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      changeValue(null);
      setDisplayText('');
      setActiveOption(-1);
      setOpenListbox(false);
    },
    [changeValue],
  );

  const handleOptionMouseDown = useCallback(
    (e: MouseEvent<HTMLLIElement>) => {
      e.preventDefault();
      selectOption(Number(e.currentTarget.dataset.index));
      setOpenListbox(false);
      setActiveOption(-1);
    },
    [selectOption],
  );

  const handleOptionMouseEnter = useCallback((e: MouseEvent<HTMLLIElement>) => {
    const idx = Number(e.currentTarget.dataset.index);

    if (Number.isNaN(idx)) {
      return;
    }

    setActiveOption(idx);
  }, []);

  const handleOptionMouseLeave = useCallback(() => {
    setActiveOption(-1);
  }, []);

  const handleRemove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
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
          : getLabel(valueState as never);

      setDisplayText(text);
      setActiveOption(-1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openListbox, valueState]);

  useEffect(() => {
    if (
      displayText &&
      (multiple || !valueState || displayText !== getLabel(valueState as never))
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
                size="sm"
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
                <Option.Label>{getLabel(item as never)}</Option.Label>

                {valuesList.includes(item) && (
                  <Option.Action>
                    <Icon name="check" size="sm" variant="secondary" />
                  </Option.Action>
                )}
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
};

Autocomplete.displayName = 'Autocomplete';

export default memo(Autocomplete) as AutocompleteFn;
