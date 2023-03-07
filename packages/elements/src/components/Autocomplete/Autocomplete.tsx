import { useDebounceCallback } from '@react-hook/debounce';
import { Icon, IconType } from '@seed-ui/icons';
import {
  ChangeEvent,
  ComponentType,
  FocusEvent,
  FocusEventHandler,
  forwardRef,
  KeyboardEvent,
  MouseEvent,
  ReactElement,
  Ref,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { slug } from '../../utils/slug';
import { IconButton } from '../IconButton';
import {
  InputAction,
  InputBox,
  InputTag,
  InputTags,
  TextBox,
} from '../InputGroup';
import { Option, OptionProps } from '../Option';
import { Popover } from '../Popover';
import { Tag } from '../Tag';

export type AutocompleteSize = 'sm' | 'md' | 'lg';

export interface OptionComponentProps<Option> extends OptionProps {
  option: Option;
}

export interface AutocompleteProps<Option = unknown, Value = Option> {
  /**
   * Triggers `onSearch` when input is empty if true. Ignores empty
   * queries otherwise.
   */
  allowEmptyQuery?: boolean;

  /**
   * If `true`, allows using input value as primary value and fires `onChange`
   * callback with this value, when it changes. Implements
   * Editable Combobox With List Autocomplete pattern.
   */
  allowInputValue?: boolean;

  /**
   * If `true`, the input element will be focused when the component is mounted.
   */
  autoFocus?: boolean;

  /**
   * Aria label for clear button.
   */
  clearLabel?: string;

  /**
   * Default value of the input element.
   */
  defaultValue?: Value;

  /**
   * If `true`, the input element is disabled and can't be interacted with.
   */
  disabled?: boolean;

  /**
   * A function that takes an `Option` and returns a string to use as the label
   * for that option.
   */
  getLabel?: (option: Option) => string;

  /**
   * Icon to display in the input element.
   */
  icon?: string;

  /**
   * Type of the icon to display in the input element.
   */
  iconType?: IconType;

  /**
   * ID attribute for the input element.
   */
  id?: string;

  /**
   * If `true`, the input element will have a validation error style.
   */
  invalid?: boolean;

  /**
   * If `true`, a loading label will be displayed inside the dropdown list.
   */
  loading?: boolean;

  /**
   * Error message to display when loading has failed.
   */
  loadingError?: string;

  /**
   * Label to display when data is being loaded.
   */
  loadingLabel?: string;

  /**
   * If `true`, the component allows multiple values to be selected.
   */
  multiple?: boolean;

  /**
   * Name attribute for input element.
   */
  name?: string;

  /**
   * Feedback text shown when no options were provided.
   */
  noResultLabel?: string;

  /**
   * A component to render each option in the dropdown list.
   */
  OptionComponent?: ComponentType<OptionComponentProps<Option>>;

  /**
   * Array of options to display in the dropdown list.
   */
  options?: Option[];

  /**
   * Placeholder text to display in the input element when it has no value.
   */
  placeholder?: string;

  /**
   * If `true`, the input element is read-only and can't be interacted with.
   */
  readOnly?: boolean;

  /**
   * Ref passed to the input element.
   */
  ref?: Ref<HTMLInputElement>;

  /**
   * If `true`, input box has rounded corners.
   */
  rounded?: boolean;

  /**
   * The amount of time to wait after the user stops typing before triggering a search.
   */
  searchTimeout?: number;

  /**
   * The size of the Autocomplete component.
   */
  size?: AutocompleteSize;

  /**
   * The current value of Autocomplete component.
   */
  value?: Value;

  /**
   * Callback function fired when the input element loses focus.
   */
  onBlur?: FocusEventHandler<HTMLInputElement>;

  /**
   * Callback function fired when the value of Autocomplete component changes.
   */
  onChange?: (value: Value) => void;

  /**
   * Callback function fired when the input element receives focus.
   */
  onFocus?: FocusEventHandler<HTMLInputElement>;

  /**
   * Callback function fired when the search query changes.
   */
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
  <Option = unknown, Value = Option>(
    props: AutocompleteProps<Option, Value>,
  ): ReactElement;
  displayName: 'Autocomplete';
}

const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      allowEmptyQuery = false,
      allowInputValue = false,
      clearLabel = 'Clear',
      defaultValue,
      searchTimeout = 500,
      disabled = false,
      getLabel = defaultGetLabel,
      icon,
      iconType,
      id,
      invalid = false,
      loading = false,
      loadingError,
      loadingLabel = 'Searching...',
      multiple = false,
      noResultLabel = 'No result',
      OptionComponent,
      options,
      readOnly = false,
      rounded = false,
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

    const popoverStyle = useMemo(
      () => ({
        width: anchorEl ? `${anchorEl.offsetWidth}px` : undefined,
        maxWidth: '100%',
        margin: 0,
      }),
      [anchorEl],
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
          const nextValue = multiple
            ? toggleOption(option, valuesList)
            : option;
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

    const debouncedSearch = useDebounceCallback(
      invokeSearch,
      searchTimeout,
      false,
    );

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
    }, [disabled, hasDisplayText, readOnly]);

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

    const handleOptionMouseEnter = useCallback(
      (e: MouseEvent<HTMLLIElement>) => {
        const idx = Number(e.currentTarget.dataset.index);

        if (Number.isNaN(idx)) {
          return;
        }

        setActiveOption(idx);
      },
      [],
    );

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
        <InputBox
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
                    role="button"
                    tabIndex={-1}
                    variant="outline-tertiary"
                    onMouseDown={handleRemove}
                  >
                    {getLabel(item as never)}
                  </Tag>
                </InputTag>
              ))}

            <TextBox
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
              readOnly={readOnly}
              ref={ref}
              role="combobox"
              type="text"
              value={displayText}
              onBlur={handleBlur}
              onChange={handleChange}
              onClick={handleClick}
              onFocus={handleFocus}
              onKeyDown={handleKeyDown}
              {...inputProps}
            />
          </InputTags>

          {!readOnly &&
            !disabled &&
            (displayText.length > 0 || valuesList.length > 0) && (
              <InputAction>
                <IconButton
                  aria-label={clearLabel}
                  icon="x"
                  rounded
                  size="xs"
                  tabIndex={-1}
                  variant="tertiary"
                  onMouseDown={handleClear}
                />
              </InputAction>
            )}
        </InputBox>

        <Popover
          anchorElement={anchorEl}
          open={openListbox}
          placement="bottom-start"
          role="presentation"
          strategy="absolute"
          style={popoverStyle}
          trigger="manual"
          onOpenChange={handleChangeOpenListbox}
        >
          <ul id={slug(id, LISTBOX_ID)} ref={listboxRef} role="listbox">
            {optList.map((item, idx) =>
              OptionComponent ? (
                <OptionComponent
                  active={idx === activeIndex}
                  data-index={idx}
                  id={slug(id, OPTION_ID, idx)}
                  key={idx}
                  option={item as never}
                  selected={valuesList.includes(item)}
                  onMouseDown={handleOptionMouseDown}
                  onMouseEnter={handleOptionMouseEnter}
                  onMouseLeave={handleOptionMouseLeave}
                />
              ) : (
                <Option
                  active={idx === activeIndex}
                  data-index={idx}
                  id={slug(id, OPTION_ID, idx)}
                  key={idx}
                  selected={valuesList.includes(item)}
                  onMouseDown={handleOptionMouseDown}
                  onMouseEnter={handleOptionMouseEnter}
                  onMouseLeave={handleOptionMouseLeave}
                >
                  {getLabel(item as never)}
                </Option>
              ),
            )}

            {loading && (
              <Option disabled role="presentation">
                {loadingLabel}
              </Option>
            )}

            {!loading && loadingError && (
              <Option disabled invalid role="alert">
                {loadingError}
              </Option>
            )}

            {!loading && !loadingError && optList.length === 0 && (
              <Option disabled role="presentation">
                {noResultLabel}
              </Option>
            )}
          </ul>
        </Popover>
      </>
    );
  },
);

Autocomplete.displayName = 'Autocomplete';

export default Autocomplete as AutocompleteFn;
