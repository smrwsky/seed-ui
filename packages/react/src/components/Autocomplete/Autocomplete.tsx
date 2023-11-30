'use client';

import {
  autoUpdate,
  size as sizeFn,
  flip,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  FloatingFocusManager,
  FloatingPortal,
  useClick,
  offset,
} from '@floating-ui/react';
import { useDebounceCallback } from '@react-hook/debounce';
import { atoms } from '@seed-ui/styles';
import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Transition } from 'react-transition-group';

import { Maybe } from '../../types';
import { slug } from '../../utils/slug';
import { useMergeRefs } from '../../utils/use-merge-refs';
import { Box } from '../Box';
import { ClearIcon } from '../ClearIcon';
import { Flex } from '../Flex';
import { IconProps } from '../Icon';
import { InputAction } from '../InputAction';
import { InputBox, InputBoxSize } from '../InputBox';
import { Option, OptionProps } from '../Option';
import { Tag } from '../Tag';

export type AutocompleteSize = InputBoxSize;

export interface OptionComponentProps<OptionType> extends OptionProps {
  option: OptionType;
}

export type MaybeMultiValue<
  Value,
  IsMulti extends boolean,
> = IsMulti extends true ? Value[] : Value | null;

export interface AutocompleteProps<
  Value = unknown,
  IsMulti extends boolean = false,
> {
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
  defaultValue?: MaybeMultiValue<Value, IsMulti>;

  /**
   * If `true`, the input element is disabled and can't be interacted with.
   */
  disabled?: boolean;

  /**
   * A function that takes an `Option` and returns a string to use as the label
   * for that option.
   */
  getLabel?: (option: Value) => string;

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
  multiple?: IsMulti;

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
  OptionComponent?: React.ComponentType<OptionComponentProps<Value>>;

  /**
   * Array of options to display in the dropdown list.
   */
  options?: Value[];

  /**
   * Placeholder text to display in input element.
   */

  placeholder?: string;

  /**
   * If `true`, the input element is read-only and can't be interacted with.
   */
  readOnly?: boolean;

  /**
   * Ref passed to the input element.
   */
  ref?: React.Ref<HTMLInputElement>;

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
   * Icon to display at the start of the input element.
   */
  startIcon?: React.ReactElement;

  /**
   * Icon to display at the end of the input element.
   */
  endIcon?: React.ReactElement;

  /**
   * The current value of Autocomplete component.
   */
  value?: MaybeMultiValue<Value, IsMulti>;

  /**
   * Callback function fired when the input element loses focus.
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * Callback function fired when the value of Autocomplete component changes.
   */
  onChange?: (value: MaybeMultiValue<Value, IsMulti>) => void;

  /**
   * Callback function fired when the input element receives focus.
   */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;

  /**
   * Callback function fired when the search query changes.
   */
  onSearch?: (query: string) => void | Promise<void>;
}

type AutocompleteFn = <Value, IsMulti extends boolean = false>(
  props: AutocompleteProps<Value, IsMulti> & {
    ref?: React.Ref<HTMLInputElement>;
  },
) => React.ReactElement;

export const LISTBOX_ID = 'listbox';

export const OPTION_ID = 'option';

const TRANSITION_TIMEOUT = {
  appear: 0,
  enter: 200,
  exit: 200,
};

const offsetXBySizeMap: Record<AutocompleteSize, number> = {
  sm: -11,
  md: -11,
  lg: -15,
};

const offsetYBySizeMap: Record<AutocompleteSize, number> = {
  sm: 6,
  md: 10,
  lg: 14,
};

function toInputValue<Value, IsMulti extends boolean>(
  value: Maybe<MaybeMultiValue<Value, IsMulti>>,
  getLabel: (value: Value) => string,
): string {
  if (value == null || Array.isArray(value)) {
    return '';
  }

  return getLabel(value as Value);
}

function toSelectedOptions<Value, IsMulti extends boolean>(
  value: MaybeMultiValue<Value, IsMulti> | undefined,
): Value[] {
  if (value == null) {
    return [];
  }

  if (Array.isArray(value)) {
    return value as Value[];
  }

  return [value] as Value[];
}

function toValue<Value, IsMulti extends boolean>(
  selectedOptions: Value[],
  multiple: IsMulti,
): MaybeMultiValue<Value, IsMulti> {
  return (
    multiple ? selectedOptions : selectedOptions[0] ?? null
  ) as MaybeMultiValue<Value, IsMulti>;
}

function toggleOption<Value>(value: Value, items: Value[]): Value[] {
  return items.includes(value)
    ? items.filter((item) => item !== value)
    : [...items, value];
}

const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
  <Value extends unknown = unknown, IsMulti extends boolean = false>(
    {
      autoFocus = false,
      clearLabel = 'Clear',
      defaultValue,
      disabled = false,
      getLabel = String,
      id,
      invalid = false,
      loading = false,
      loadingError,
      loadingLabel = 'Searching...',
      multiple = false as IsMulti,
      name,
      noResultLabel = 'No result',
      OptionComponent = Option as React.ComponentType<
        OptionComponentProps<Value>
      >,
      options,
      placeholder,
      readOnly = false,
      searchTimeout = 500,
      size = 'md',
      startIcon,
      endIcon,
      value,
      onBlur,
      onChange,
      onFocus,
      onSearch,
    }: AutocompleteProps<Value, IsMulti>,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isFocused, setIsFocused] = useState(false);

    const [inputValue, setInputValue] = useState(() =>
      toInputValue(value ?? defaultValue, getLabel),
    );

    const [optionsState, setOptionsState] = useState<Value[]>(
      () => options ?? [],
    );

    const [selectedOptions, setSelectedOptions] = useState<Value[]>(() =>
      toSelectedOptions(value ?? defaultValue),
    );

    const containerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<Array<HTMLElement | null>>([]);
    const isControlled = typeof value !== 'undefined';

    const { refs, floatingStyles, context } = useFloating<HTMLInputElement>({
      middleware: [
        flip({ padding: 4 }),
        offset({
          mainAxis: offsetYBySizeMap[size],
          alignmentAxis: startIcon
            ? offsetXBySizeMap[size] - 24
            : offsetXBySizeMap[size],
        }),
        sizeFn({
          apply({ availableHeight, elements }) {
            const { offsetWidth = 0 } = containerRef.current ?? {};

            Object.assign(elements.floating.style, {
              width: `${offsetWidth + 4}px`,
              maxHeight: `${availableHeight}px`,
            });
          },
          padding: 10,
        }),
      ],
      open: isOpen,
      placement: 'bottom-start',
      strategy: 'fixed',
      transform: false,
      whileElementsMounted: autoUpdate,
      onOpenChange: setIsOpen,
    });

    const role = useRole(context, { role: 'listbox' });

    const click = useClick(context, {
      enabled: !disabled && !readOnly,
    });

    const dismiss = useDismiss(context);

    const listNav = useListNavigation(context, {
      enabled: !disabled && !readOnly,
      listRef,
      activeIndex,
      onNavigate: setActiveIndex,
      virtual: true,
      loop: true,
    });

    const { getReferenceProps, getFloatingProps, getItemProps } =
      useInteractions([role, click, dismiss, listNav]);

    const mergedRefs = useMergeRefs(refs.setReference, ref);

    const changeValue = useCallback(
      (options: Value[]) => {
        if (isControlled && onChange) {
          const nextOptions = toValue(options, multiple);
          onChange(nextOptions);
        } else {
          setSelectedOptions(options);
        }
      },
      [isControlled, multiple, onChange],
    );

    const resetInputValue = useCallback(() => {
      const selectedValue = multiple ? selectedOptions : selectedOptions[0];
      const nextValue = toInputValue(selectedValue, getLabel);
      setInputValue(nextValue);
    }, [getLabel, multiple, selectedOptions]);

    const selectOption = useCallback(
      (index: number): void => {
        const option = optionsState[index];

        if (!option) return;

        const nextOptions = multiple
          ? toggleOption(option, selectedOptions)
          : [option];

        changeValue(nextOptions);
        setIsOpen(false);

        const element = refs.domReference.current;

        if (element) {
          element.focus();
          element.setSelectionRange(element.value.length, element.value.length);
        }
      },
      [changeValue, multiple, optionsState, refs.domReference, selectedOptions],
    );

    const filterOptions = useCallback(
      (nextQuery: string) => {
        if (!options) return;

        const filtered = nextQuery
          ? options.filter((item) =>
              getLabel(item).toLowerCase().includes(nextQuery.toLowerCase()),
            )
          : options;

        setOptionsState(filtered);
      },
      [getLabel, options],
    );

    const updateOptions = useDebounceCallback(async (nextQuery: string) => {
      if (onSearch) {
        await onSearch(nextQuery);
      } else {
        filterOptions(nextQuery);
      }
    }, searchTimeout);

    const handleInputFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        onFocus?.(e);
      },
      [onFocus],
    );

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const nextValue = e.target.value;
        setInputValue(nextValue);

        if (nextValue) {
          setIsOpen(true);
          setActiveIndex(0);
        } else {
          changeValue([]);
        }
      },
      [changeValue],
    );

    const handleInputKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (
          e.key === 'Enter' &&
          activeIndex != null &&
          optionsState[activeIndex]
        ) {
          e.preventDefault();
          selectOption(activeIndex);
          setActiveIndex(null);
        }
      },
      [activeIndex, optionsState, selectOption],
    );

    const handleInputBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        resetInputValue();
        onBlur?.(e);
      },
      [onBlur, resetInputValue],
    );

    const handleOptionClick = useCallback(
      (e: React.MouseEvent<HTMLLIElement>) => {
        e.preventDefault();
        const index = Number(e.currentTarget.dataset.index);

        if (!Number.isNaN(index)) {
          selectOption(index);
        }
      },
      [selectOption],
    );

    const handleClearMouseDown = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        changeValue([]);
        setInputValue('');
      },
      [changeValue],
    );

    const handleRemoveMouseDown = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const index = Number(e.currentTarget.dataset.index);

        if (Number.isNaN(index)) {
          return;
        }

        const nextVal = [...selectedOptions];
        nextVal.splice(index, 1);
        changeValue(nextVal);
      },
      [changeValue, selectedOptions],
    );

    useEffect(() => {
      if (typeof value !== 'undefined') {
        const nextOptions = toSelectedOptions(value);
        setSelectedOptions(nextOptions);
      }
    }, [value]);

    useEffect(() => {
      if (options) {
        setOptionsState(options);
      }
    }, [options]);

    useEffect(() => {
      updateOptions(inputValue);
    }, [inputValue, updateOptions]);

    useEffect(() => {
      resetInputValue();
    }, [resetInputValue]);

    return (
      <>
        <InputBox
          disabled={disabled}
          focused={isFocused}
          invalid={invalid}
          readOnly={readOnly}
          ref={containerRef}
          size={size}
        >
          {isValidElement<IconProps>(startIcon) && (
            <InputAction
              className={atoms({
                mr: 1,
              })}
            >
              {cloneElement(startIcon, { fontSize: 'lg' })}
            </InputAction>
          )}

          <Flex as="span" flex={1} flexWrap="wrap" mt="-1" mx="-0.5">
            {multiple &&
              selectedOptions.map((item, idx) => (
                <Box as="span" display="block" key={idx} mt={1} px={0.5}>
                  <Tag
                    bg={disabled ? 'neutral100' : 'primary100'}
                    borderColor={disabled ? 'neutral200' : 'primary300'}
                    color={disabled ? 'neutral300' : 'neutral900'}
                    data-index={idx}
                    disabled={disabled || readOnly}
                    removable
                    tabIndex={-1}
                    onMouseDown={handleRemoveMouseDown}
                  >
                    {getLabel(item)}
                  </Tag>
                </Box>
              ))}

            {(!multiple ||
              selectedOptions.length === 0 ||
              (!disabled && !readOnly)) && (
              <Box as="span" display="block" mt={1} px={0.5} width="full">
                <input
                  aria-activedescendant={
                    activeIndex != null ? slug(id, OPTION_ID, activeIndex) : ''
                  }
                  aria-autocomplete="list"
                  aria-controls={isOpen ? slug(id, LISTBOX_ID) : ''}
                  aria-invalid={invalid}
                  aria-owns={isOpen ? slug(id, LISTBOX_ID) : ''}
                  autoComplete="off"
                  autoFocus={autoFocus}
                  disabled={disabled}
                  id={id}
                  name={name}
                  placeholder={placeholder}
                  readOnly={readOnly}
                  type="text"
                  {...getReferenceProps({
                    ref: mergedRefs,
                    value: inputValue,
                    onFocus: handleInputFocus,
                    onBlur: handleInputBlur,
                    onChange: handleInputChange,
                    onKeyDown: handleInputKeyDown,
                  })}
                />
              </Box>
            )}
          </Flex>

          {!disabled &&
            !readOnly &&
            isFocused &&
            (inputValue.length > 0 || selectedOptions.length > 0) && (
              <InputAction
                className={atoms({
                  ml: 1,
                })}
              >
                <ClearIcon
                  aria-label={clearLabel}
                  color="neutral700"
                  fontSize="xl"
                  role="button"
                  tabIndex={-1}
                  onMouseDown={handleClearMouseDown}
                />
              </InputAction>
            )}

          {isValidElement<IconProps>(endIcon) && (
            <InputAction
              className={atoms({
                ml: 1,
              })}
            >
              {cloneElement(endIcon, { fontSize: 'lg' })}
            </InputAction>
          )}
        </InputBox>

        <Transition
          in={isOpen}
          mountOnEnter
          timeout={TRANSITION_TIMEOUT}
          unmountOnExit
        >
          {(status) => (
            <FloatingPortal>
              <FloatingFocusManager
                context={context}
                initialFocus={-1}
                modal={false}
              >
                <ul
                  className={atoms({
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 'lg',
                    border: 'thin',
                    boxShadow: {
                      default: 'lg',
                      focusVisible: 'lg',
                    },
                    bg: 'white',
                    borderColor: 'neutral100',
                    opacity: status === 'entered' ? 100 : 0,
                    transition: 'fade',
                    overflowX: 'hidden',
                    overflowY: 'auto',
                    px: 0,
                    py: 0.5,
                    m: 0,
                    zIndex: 10,
                  })}
                  id={slug(id, LISTBOX_ID)}
                  ref={refs.setFloating}
                  style={floatingStyles}
                  {...getFloatingProps()}
                >
                  {optionsState.map((item, idx) => (
                    <OptionComponent
                      active={idx === activeIndex}
                      data-index={idx}
                      id={slug(id, OPTION_ID, idx)}
                      key={idx}
                      multiple={multiple}
                      option={item}
                      selected={selectedOptions.includes(item)}
                      {...getItemProps({
                        ref: (node) => {
                          listRef.current[idx] = node;
                        },
                        onClick: handleOptionClick,
                      })}
                    >
                      {getLabel(item)}
                    </OptionComponent>
                  ))}

                  {loading && (
                    <Option disabled role="none">
                      {loadingLabel}
                    </Option>
                  )}

                  {!loading && loadingError && (
                    <Option disabled role="alert">
                      {loadingError}
                    </Option>
                  )}

                  {!loading && !loadingError && optionsState.length === 0 && (
                    <Option disabled role="none">
                      {noResultLabel}
                    </Option>
                  )}
                </ul>
              </FloatingFocusManager>
            </FloatingPortal>
          )}
        </Transition>
      </>
    );
  },
);

Autocomplete.displayName = 'Autocomplete';

export default Autocomplete as AutocompleteFn;
