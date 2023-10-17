/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
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
  useMergeRefs,
  useClick,
  shift,
} from '@floating-ui/react';
import { useDebounceCallback } from '@react-hook/debounce';
import { atoms } from '@seed-ui/styles';
import {
  ChangeEvent,
  cloneElement,
  ComponentType,
  ForwardedRef,
  FocusEvent,
  FocusEventHandler,
  forwardRef,
  isValidElement,
  KeyboardEvent,
  MouseEvent,
  ReactElement,
  Ref,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Transition } from 'react-transition-group';

import { Maybe } from '../../types';
import { slug } from '../../utils/slug';
import { Box } from '../Box';
import { Flex } from '../Flex';
import { Icon, IconProps } from '../Icon';
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
   * Icon to display in the input element.
   */
  icon?: ReactElement;

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
  OptionComponent?: ComponentType<OptionComponentProps<Value>>;

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
  ref?: Ref<HTMLInputElement>;

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
  value?: MaybeMultiValue<Value, IsMulti>;

  /**
   * Callback function fired when the input element loses focus.
   */
  onBlur?: FocusEventHandler<HTMLInputElement>;

  /**
   * Callback function fired when the value of Autocomplete component changes.
   */
  onChange?: (value: MaybeMultiValue<Value, IsMulti>) => void;

  /**
   * Callback function fired when the input element receives focus.
   */
  onFocus?: FocusEventHandler<HTMLInputElement>;

  /**
   * Callback function fired when the search query changes.
   */
  onSearch?: (query: string) => void | Promise<void>;
}

type AutocompleteFn = <Value, IsMulti extends boolean = false>(
  props: AutocompleteProps<Value, IsMulti> & { ref?: Ref<HTMLInputElement> },
) => ReactElement;

export const LISTBOX_ID = 'listbox';

export const OPTION_ID = 'option';

const TRANSITION_TIMEOUT = {
  appear: 0,
  enter: 200,
  exit: 200,
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
  <Value extends unknown = unknown, IsMulti extends boolean = false>(
    {
      autoFocus = false,
      clearLabel = 'Clear',
      defaultValue,
      disabled = false,
      getLabel = String,
      icon,
      id,
      invalid = false,
      loading = false,
      loadingError,
      loadingLabel = 'Searching...',
      multiple = false as IsMulti,
      name,
      noResultLabel = 'No result',
      OptionComponent = Option as ComponentType<OptionComponentProps<Value>>,
      options,
      placeholder,
      readOnly = false,
      searchTimeout = 500,
      size = 'md',
      value,
      onBlur,
      onChange,
      onFocus,
      onSearch,
    }: AutocompleteProps<Value, IsMulti>,
    ref: ForwardedRef<HTMLInputElement>,
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
      whileElementsMounted: autoUpdate,
      open: isOpen,
      onOpenChange: setIsOpen,
      transform: false,
      strategy: 'fixed',
      middleware: [
        flip(),
        shift(),
        sizeFn({
          apply({ availableHeight, elements }) {
            const {
              offsetLeft = 0,
              offsetTop = 0,
              offsetWidth = 0,
              offsetHeight = 0,
            } = containerRef.current ?? {};

            Object.assign(elements.floating.style, {
              top: `${offsetTop + offsetHeight}px`,
              left: `${offsetLeft}px`,
              width: `${offsetWidth ?? 0}px`,
              maxHeight: `${availableHeight}px`,
            });
          },
          padding: 10,
        }),
      ],
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

    const mergedRefs = useMergeRefs([refs.setReference, ref]);

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
      (e: FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        onFocus?.(e);
      },
      [onFocus],
    );

    const handleInputChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
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
      (e: KeyboardEvent<HTMLInputElement>) => {
        if (
          e.key === 'Enter' &&
          activeIndex != null &&
          optionsState[activeIndex]
        ) {
          selectOption(activeIndex);
          setActiveIndex(null);
        }
      },
      [activeIndex, optionsState, selectOption],
    );

    const handleInputBlur = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        resetInputValue();
        onBlur?.(e);
      },
      [onBlur, resetInputValue],
    );

    const handleOptionClick = useCallback(
      (e: MouseEvent<HTMLLIElement>) => {
        e.preventDefault();
        const index = Number(e.currentTarget.dataset.index);

        if (!Number.isNaN(index)) {
          selectOption(index);
        }
      },
      [selectOption],
    );

    const handleClearMouseDown = useCallback(
      (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        changeValue([]);
        setInputValue('');
      },
      [changeValue],
    );

    const handleRemoveMouseDown = useCallback(
      (e: MouseEvent<HTMLDivElement>) => {
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
          {isValidElement<IconProps>(icon) && (
            <InputAction>{cloneElement(icon, { fontSize: 'lg' })}</InputAction>
          )}

          <Flex as="span" flex={1} flexWrap="wrap" mt="-1" mx="-0.5">
            {multiple &&
              selectedOptions.map((item, idx) => (
                <Box
                  as="span"
                  display="block"
                  key={idx}
                  lineHeight="none"
                  maxWidth="full"
                  minWidth={0}
                  mt={1}
                  px={0.5}
                >
                  <Tag
                    bg="neutral50"
                    borderColor="neutral200"
                    color="neutral700"
                    data-index={idx}
                    removable
                    role="button"
                    tabIndex={-1}
                    onMouseDown={handleRemoveMouseDown}
                  >
                    {getLabel(item)}
                  </Tag>
                </Box>
              ))}

            <Box
              as="span"
              display="block"
              lineHeight="none"
              maxWidth="full"
              minWidth={0}
              mt={1}
              px={0.5}
            >
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
          </Flex>

          {isFocused &&
            (inputValue.length > 0 || selectedOptions.length > 0) && (
              <InputAction>
                <Icon
                  aria-label={clearLabel}
                  className={atoms({
                    color: 'neutral700',
                    opacity: {
                      default: 65,
                      hover: 100,
                    },
                    transition: 'fade',
                    cursor: 'pointer',
                  })}
                  fontSize="xl"
                  name="x"
                  role="button"
                  tabIndex={-1}
                  onMouseDown={handleClearMouseDown}
                />
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
            <FloatingFocusManager
              context={context}
              initialFocus={-1}
              modal={false}
            >
              <ul
                className={atoms({
                  display: 'flex',
                  flexDirection: 'column',
                  maxWidth: 'xs',
                  borderRadius: 'md',
                  border: 'thin',
                  boxShadow: {
                    default: 'lg',
                    focusVisible: 'lg',
                  },
                  bg: 'white',
                  borderColor: 'neutral50',
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
                    endIcon={
                      multiple && selectedOptions.includes(item) ? (
                        <Icon color="primary500" fontSize="lg" name="check" />
                      ) : undefined
                    }
                    id={slug(id, OPTION_ID, idx)}
                    key={idx}
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
          )}
        </Transition>
      </>
    );
  },
);

Autocomplete.displayName = 'Autocomplete';

export default Autocomplete as AutocompleteFn;
