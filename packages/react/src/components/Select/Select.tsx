import { atoms } from '@seed-ui/styles';
import {
  ChangeEvent,
  cloneElement,
  FocusEvent,
  FocusEventHandler,
  forwardRef,
  isValidElement,
  memo,
  ReactElement,
  ReactNode,
  RefAttributes,
  useEffect,
  useState,
} from 'react';

import { Icon, IconProps } from '../Icon';
import { InputAction } from '../InputAction';
import { InputBox, InputBoxSize } from '../InputBox';

export type SelectSize = InputBoxSize;

export type SelectValue = string | string[];

export interface SelectProps<TValue extends SelectValue = SelectValue> {
  autoFocus?: boolean;
  defaultValue?: TValue;
  disabled?: boolean;
  icon?: ReactElement;
  id?: string;
  invalid?: boolean;
  maxRows?: number;
  multiple?: boolean;
  name?: string;
  onBlur?: FocusEventHandler<HTMLSelectElement>;
  onChange?: (value: TValue) => void;
  onFocus?: FocusEventHandler<HTMLSelectElement>;
  size?: SelectSize;
  value?: TValue;
  children?: ReactNode;
}

export interface SelectFn {
  <TValue extends SelectValue = SelectValue>(
    props: SelectProps<TValue> & RefAttributes<HTMLSelectElement>,
  ): ReactElement;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      defaultValue,
      disabled,
      icon,
      invalid,
      maxRows,
      multiple,
      size = 'md',
      id = 'select',
      value,
      onChange,
      onFocus,
      onBlur,
      children,
      ...inputProps
    },
    ref,
  ) => {
    const [valueState, setValueState] = useState<
      string | number | readonly string[] | undefined
    >(defaultValue);

    const [focused, setFocused] = useState(false);

    useEffect(() => {
      if (typeof value !== 'undefined') {
        setValueState(value);
      }
    }, [value]);

    function handleChange(e: ChangeEvent<HTMLSelectElement>) {
      const nextValue = multiple
        ? Array.from(e.target.selectedOptions, (v) => v.value)
        : e.target.value;

      if (typeof value === 'undefined' && !onChange) {
        setValueState(nextValue);
      } else {
        onChange?.(nextValue);
      }
    }

    function handleFocus(e: FocusEvent<HTMLSelectElement>): void {
      e.persist();
      setFocused(true);

      if (onFocus) {
        onFocus(e);
      }
    }

    function handleBlur(e: FocusEvent<HTMLSelectElement>): void {
      e.persist();
      setFocused(false);

      if (onBlur) {
        onBlur(e);
      }
    }

    return (
      <InputBox
        className={atoms({
          position: 'relative',
        })}
        disabled={disabled}
        focused={focused}
        invalid={invalid}
        size={size}
      >
        {isValidElement<IconProps>(icon) && (
          <InputAction>{cloneElement(icon, { fontSize: 'lg' })}</InputAction>
        )}

        <select
          {...inputProps}
          className={atoms({
            paddingRight: multiple ? 0 : 7,
            zIndex: 10,
          })}
          disabled={disabled}
          id={id}
          multiple={multiple}
          ref={ref}
          size={maxRows}
          value={valueState}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
        >
          {children}
        </select>

        {!multiple && !disabled && (
          <InputAction
            className={atoms({
              position: 'absolute',
              top: 0,
              right: 2,
              bottom: 0,
              my: 'auto',
            })}
          >
            <Icon fontSize="lg" name="chevron-down" />
          </InputAction>
        )}
      </InputBox>
    );
  },
);

Select.displayName = 'Select';

export default memo(Select) as SelectFn;
