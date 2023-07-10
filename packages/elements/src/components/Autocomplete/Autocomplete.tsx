import { useDebounceCallback } from '@react-hook/debounce';
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
  RefAttributes,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { mergeRefs } from '../../utils/merge-refs';
import { slug } from '../../utils/slug';
import { Icon, IconType } from '../Icon';
import { IconButton } from '../IconButton';
import {
  InputAction,
  InputBox,
  InputBoxSize,
  InputTag,
  InputTags,
  TextBox,
} from '../InputGroup';
import { Popover } from '../Popover';
import { Tag } from '../Tag';

import { Option, OptionProps } from './Option';

export type AutocompleteSize = InputBoxSize;

export interface OptionComponentProps<Option> extends OptionProps {
  option: Option;
}

export interface AutocompleteProps<Option = unknown, Value = Option> {
  /**
   * If `true`, allows using input value as primary value and fires `onChange`
   * callback with this value, when it changes. Implements
   * Editable Combobox With List Autocomplete pattern.
   */
  allowInputValue?: boolean;

  /**
   * If `true`, automatically highlights the first option in the dropdown list.
   */
  autoHighlight?: boolean;

  /**
   * If `true`, the input element will be isFocused when the component is mounted.
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
   * If `true`, search functionality is disabled.
   */
  disableSearch?: boolean;

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
   * If `true`, enables inline auto-complete behavior in the input element.
   */
  inlineAutoComplete?: boolean;

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
   * The amount of time to wait after the user stops typing before triggering
   * a search.
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

export interface AutocompleteFn {
  <Option = unknown, Value = Option>(
    props: AutocompleteProps<Option, Value> & RefAttributes<HTMLInputElement>,
  ): ReactElement;
  displayName: 'Autocomplete';
}

export const LISTBOX_ID = 'listbox';

export const OPTION_ID = 'option';

function getInitialInputValue(
  defaultValue: unknown,
  getLabel: (value: unknown) => string,
) {
  return !defaultValue || Array.isArray(defaultValue)
    ? ''
    : getLabel(defaultValue);
}

function mapToSelectedOptions(value: unknown, isMultiple: boolean) {
  return ((isMultiple && Array.isArray(value) && value) ||
    (value && [value]) ||
    []) as unknown[];
}

function mapToValue(options: unknown[], isMultiple: boolean) {
  return isMultiple ? options : options[0] ?? null;
}

function toggleOption(value: unknown, items: unknown[]): unknown[] {
  return items.includes(value)
    ? items.filter((item) => item !== value)
    : [...items, value];
}

const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      autoHighlight = false,
      allowInputValue = false,
      clearLabel = 'Clear',
      defaultValue,
      searchTimeout = 500,
      disabled = false,
      getLabel = String,
      icon,
      iconType,
      id,
      inlineAutoComplete = false,
      invalid = false,
      loading = false,
      loadingError,
      loadingLabel = 'Searching...',
      multiple = false,
      noResultLabel = 'No result',
      OptionComponent = Option,
      options,
      readOnly = false,
      rounded = false,
      disableSearch = false,
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
    const [anchorElement, setAnchorElement] = useState<HTMLDivElement | null>(
      null,
    );

    const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
    const [isBackspacePressed, setIsBackspacePressed] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const [inputValue, setInputValue] = useState(() =>
      getInitialInputValue(defaultValue, getLabel),
    );

    const [optionsState, setOptionsState] = useState<unknown[]>(
      () => options ?? [],
    );

    const [selectedOptions, setSelectedOptions] = useState(
      mapToSelectedOptions(value ?? defaultValue, multiple),
    );

    const [searchQuery, setSearchQuery] = useState(() =>
      getInitialInputValue(defaultValue, getLabel),
    );

    const inputRef = useRef<HTMLInputElement>(null);
    const listboxRef = useRef<HTMLUListElement>(null);
    const mergedRefs = mergeRefs(inputRef, ref);

    const isUncontrolled = typeof value === 'undefined';

    const popoverStyle = useMemo(
      () => ({
        width: anchorElement ? `${anchorElement.offsetWidth}px` : undefined,
        maxWidth: '100%',
        margin: 0,
      }),
      [anchorElement],
    );

    const changeValue = useCallback(
      (options: unknown[]): void => {
        if (!isUncontrolled && onChange) {
          const nextOptions = mapToValue(options, multiple);
          onChange(nextOptions);
        } else {
          setSelectedOptions(options);
        }
      },
      [isUncontrolled, multiple, onChange],
    );

    const resetInputValue = useCallback(() => {
      if (allowInputValue) return;

      const nextValue =
        !multiple && selectedOptions[0] ? getLabel(selectedOptions[0]) : '';

      setInputValue(nextValue);
      setSearchQuery(nextValue);
    }, [allowInputValue, getLabel, multiple, selectedOptions]);

    const selectOption = useCallback(
      (index: number): void => {
        const option = optionsState[index];

        if (!option) return;

        const nextOptions = multiple
          ? toggleOption(option, selectedOptions)
          : [option];

        changeValue(nextOptions);
        setIsMenuOpened(false);
        setIsBackspacePressed(false);
      },
      [changeValue, multiple, optionsState, selectedOptions],
    );

    const filterOptions = useCallback(
      (query: string) => {
        if (!options) return;

        const filtered = query
          ? options.filter((item) =>
              getLabel(item).toLowerCase().includes(query.toLowerCase()),
            )
          : options;

        setOptionsState(filtered);
      },
      [getLabel, options],
    );

    const updateOptions = useDebounceCallback((query: string) => {
      if (disableSearch) return;
      if (onSearch) return onSearch(query);
      filterOptions(query);
    }, searchTimeout);

    const handleInputFocus = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        onFocus?.(e);
      },
      [onFocus],
    );

    const handleInputClick = useCallback(
      (e: MouseEvent<HTMLInputElement>) => {
        e.currentTarget.select();

        if (disabled || readOnly) return;

        if (isMenuOpened && !inputValue) {
          setIsMenuOpened(false);
          setIsBackspacePressed(false);
        }

        if (!isMenuOpened) {
          setIsMenuOpened(true);
        }
      },
      [disabled, inputValue, isMenuOpened, readOnly],
    );

    const handleInputChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const nextValue = e.target.value;
        setInputValue(nextValue);
        setSearchQuery(nextValue);
        setIsMenuOpened(true);

        if (!allowInputValue && !multiple && !nextValue) {
          changeValue([]);
        }
      },
      [allowInputValue, changeValue, multiple],
    );

    const handleInputKeyDown = useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
        if (!e.altKey && e.key === 'ArrowDown') {
          e.preventDefault();
          setIsMenuOpened(true);

          setHighlightedIndex((prevState) =>
            prevState >= optionsState.length - 1 ? 0 : prevState + 1,
          );
        }

        if (e.altKey && e.key === 'ArrowDown') {
          e.preventDefault();
          setIsMenuOpened(true);
        }

        if (e.key === 'ArrowUp') {
          e.preventDefault();
          setIsMenuOpened(true);

          setHighlightedIndex((prevState) =>
            prevState <= 0 ? optionsState.length - 1 : prevState - 1,
          );
        }

        if (e.key === 'Enter' && isMenuOpened) {
          e.preventDefault();
          selectOption(highlightedIndex);
        }

        if (e.key === 'Escape') {
          setIsMenuOpened(false);
        }

        setIsBackspacePressed(e.key === 'Backspace');
      },
      [highlightedIndex, isMenuOpened, optionsState.length, selectOption],
    );

    const handleInputBlur = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        resetInputValue();
        setIsFocused(false);
        setIsMenuOpened(false);
        setIsBackspacePressed(false);
        onBlur?.(e);
      },
      [onBlur, resetInputValue],
    );

    const handleOptionMouseEnter = useCallback(
      (e: MouseEvent<HTMLLIElement>) => {
        const index = Number(e.currentTarget.dataset.index);

        if (Number.isNaN(index)) return;

        setHighlightedIndex(index);
      },
      [],
    );

    const handleOptionMouseDown = useCallback(
      (e: MouseEvent<HTMLLIElement>) => {
        e.preventDefault();

        const index = Number(e.currentTarget.dataset.index);

        if (Number.isNaN(index)) return;

        selectOption(index);
      },
      [selectOption],
    );

    const handleClearMouseDown = useCallback(
      (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        changeValue([]);
        setIsMenuOpened(false);
        setIsBackspacePressed(false);
      },
      [changeValue],
    );

    const handleRemoveMouseDown = useCallback(
      (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const index = Number(e.currentTarget.dataset.index);

        if (Number.isNaN(index)) return;

        const nextVal = [...selectedOptions];
        nextVal.splice(index, 1);
        changeValue(nextVal);
      },
      [changeValue, selectedOptions],
    );

    useLayoutEffect(() => {
      if (inlineAutoComplete) return;

      const initialIndex = autoHighlight && !inlineAutoComplete ? 0 : -1;

      if (!isMenuOpened) {
        let nextIndex = initialIndex;

        if (!isMenuOpened && !multiple && selectedOptions[0]) {
          const selectedIndex = optionsState?.findIndex(
            (item) => getLabel(item) === getLabel(selectedOptions[0]),
          );

          nextIndex = Math.max(nextIndex, selectedIndex);
        }

        setHighlightedIndex(nextIndex);
      } else {
        setHighlightedIndex((prevState) =>
          prevState < initialIndex || prevState > optionsState.length - 1
            ? initialIndex
            : prevState,
        );
      }
    }, [
      autoHighlight,
      getLabel,
      inlineAutoComplete,
      isMenuOpened,
      multiple,
      optionsState,
      selectedOptions,
    ]);

    useLayoutEffect(() => {
      if (!isMenuOpened || !inlineAutoComplete) {
        return;
      }

      const option = optionsState[0];
      const label = option ? getLabel(option) : '';

      if (
        searchQuery &&
        label.toLowerCase().startsWith(searchQuery.toLowerCase())
      ) {
        setHighlightedIndex(0);
      } else {
        setHighlightedIndex(-1);
      }
    }, [getLabel, inlineAutoComplete, isMenuOpened, optionsState, searchQuery]);

    useLayoutEffect(() => {
      if (
        !isMenuOpened ||
        !inlineAutoComplete ||
        isBackspacePressed ||
        highlightedIndex === -1
      ) {
        return;
      }

      const option = optionsState[highlightedIndex];
      const label = option ? getLabel(option) : '';

      if (!label) return;

      setInputValue(label);

      if (!label.toLowerCase().startsWith(searchQuery.toLowerCase())) {
        setSearchQuery(label);
      }
    }, [
      getLabel,
      highlightedIndex,
      inlineAutoComplete,
      isBackspacePressed,
      isMenuOpened,
      optionsState,
      searchQuery,
    ]);

    useLayoutEffect(() => {
      if (
        isMenuOpened &&
        searchQuery &&
        searchQuery !== inputValue &&
        inputValue.toLowerCase().startsWith(searchQuery.toLowerCase())
      ) {
        inputRef.current?.setSelectionRange(
          searchQuery.length,
          inputValue.length,
        );
      }
    }, [inputValue, isMenuOpened, searchQuery]);

    useLayoutEffect(() => {
      if (!isUncontrolled) {
        const nextOptions = mapToSelectedOptions(value, multiple);
        setSelectedOptions(nextOptions);
      }
    }, [allowInputValue, isUncontrolled, multiple, value]);

    useEffect(() => {
      resetInputValue();
    }, [resetInputValue]);

    useEffect(() => {
      updateOptions(searchQuery);
    }, [searchQuery, updateOptions]);

    return (
      <>
        <InputBox
          disabled={disabled}
          focused={isFocused}
          invalid={invalid}
          readOnly={readOnly}
          ref={setAnchorElement}
          rounded={rounded}
          size={size}
        >
          {icon && (
            <InputAction>
              <Icon
                color="primary500"
                fontSize="lg"
                name={icon}
                type={iconType}
              />
            </InputAction>
          )}

          <InputTags>
            {multiple &&
              selectedOptions.map((item, idx) => (
                <InputTag key={idx}>
                  <Tag
                    data-index={idx}
                    deletable
                    role="button"
                    tabIndex={-1}
                    variant="outline-tertiary"
                    onMouseDown={handleRemoveMouseDown}
                  >
                    {getLabel(item)}
                  </Tag>
                </InputTag>
              ))}

            <TextBox
              aria-activedescendant={
                highlightedIndex !== -1
                  ? slug(id, OPTION_ID, highlightedIndex)
                  : ''
              }
              aria-autocomplete="list"
              aria-controls={isMenuOpened ? slug(id, LISTBOX_ID) : ''}
              aria-expanded={isMenuOpened}
              aria-haspopup="listbox"
              aria-invalid={invalid}
              aria-owns={isMenuOpened ? slug(id, LISTBOX_ID) : ''}
              autoComplete="off"
              disabled={disabled}
              id={id}
              readOnly={readOnly}
              ref={mergedRefs}
              role="combobox"
              type="text"
              value={inputValue}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
              onClick={handleInputClick}
              onFocus={handleInputFocus}
              onKeyDown={handleInputKeyDown}
              {...inputProps}
            />
          </InputTags>

          {!readOnly &&
            !disabled &&
            (inputValue.length > 0 || selectedOptions.length > 0) && (
              <InputAction>
                <IconButton
                  aria-label={clearLabel}
                  icon="x"
                  rounded
                  size="sm"
                  tabIndex={-1}
                  variant="tertiary"
                  onMouseDown={handleClearMouseDown}
                />
              </InputAction>
            )}
        </InputBox>

        <Popover
          anchorElement={anchorElement}
          open={isMenuOpened}
          placement="bottom-start"
          strategy="absolute"
          style={popoverStyle}
        >
          <ul id={slug(id, LISTBOX_ID)} ref={listboxRef} role="listbox">
            {optionsState.map((item, idx) => (
              <OptionComponent
                data-index={idx}
                highlighted={idx === highlightedIndex}
                id={slug(id, OPTION_ID, idx)}
                key={idx}
                option={item}
                selected={selectedOptions.includes(item)}
                onMouseDown={handleOptionMouseDown}
                onMouseEnter={handleOptionMouseEnter}
              >
                {getLabel(item)}
              </OptionComponent>
            ))}

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

            {!loading && !loadingError && optionsState.length === 0 && (
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
