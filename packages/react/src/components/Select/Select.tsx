import { atoms } from '@seed-ui/styles';
import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
  useEffect,
  useState,
} from 'react';

import { Icon, IconProps } from '../Icon';
import { InputAction } from '../InputAction';
import { InputBox, InputBoxSize } from '../InputBox';

export type SelectSize = InputBoxSize;

export type SelectValue<IsMulti extends boolean> = IsMulti extends true
  ? readonly string[]
  : string | undefined;

export interface SelectProps<IsMulti extends boolean = false> {
  autoFocus?: boolean;
  children?: React.ReactNode;
  defaultValue?: SelectValue<IsMulti>;
  disabled?: boolean;
  id?: string;
  invalid?: boolean;
  maxRows?: number;
  multiple?: IsMulti;
  name?: string;
  size?: SelectSize;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  value?: SelectValue<IsMulti>;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
  onChange?: (value: SelectValue<IsMulti>) => void;
  onFocus?: React.FocusEventHandler<HTMLSelectElement>;
}

export interface SelectFn {
  <IsMulti extends boolean = false>(
    props: SelectProps<IsMulti> & React.RefAttributes<HTMLSelectElement>,
  ): React.ReactElement;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  <IsMulti extends boolean = false>(
    {
      children,
      defaultValue,
      disabled,
      id = 'select',
      invalid,
      maxRows,
      multiple,
      size = 'md',
      startIcon,
      endIcon,
      value,
      onChange,
      onFocus,
      onBlur,
      ...inputProps
    }: SelectProps<IsMulti>,
    ref: React.ForwardedRef<HTMLSelectElement>,
  ) => {
    const [valueState, setValueState] = useState<
      SelectValue<IsMulti> | undefined
    >(defaultValue);

    const [focused, setFocused] = useState(false);

    useEffect(() => {
      if (typeof value !== 'undefined') {
        setValueState(value);
      }
    }, [value]);

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
      const nextValue = multiple
        ? Array.from(e.target.selectedOptions, (v) => v.value)
        : e.target.value;

      if (typeof value === 'undefined' && !onChange) {
        setValueState(nextValue as SelectValue<IsMulti>);
      } else {
        onChange?.(nextValue as SelectValue<IsMulti>);
      }
    }

    function handleFocus(e: React.FocusEvent<HTMLSelectElement>): void {
      e.persist();
      setFocused(true);

      if (onFocus) {
        onFocus(e);
      }
    }

    function handleBlur(e: React.FocusEvent<HTMLSelectElement>): void {
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
        {isValidElement<IconProps>(startIcon) && (
          <InputAction>
            {cloneElement(startIcon, { fontSize: 'lg' })}
          </InputAction>
        )}

        <select
          {...inputProps}
          className={atoms({
            paddingRight: multiple ? 4 : 8,
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

        {!multiple && (
          <InputAction
            className={atoms({
              position: 'absolute',
              top: 0,
              right: 2,
              bottom: 0,
              my: 'auto',
            })}
          >
            <Icon
              className={atoms({
                opacity: disabled ? 40 : 100,
              })}
              fontSize="lg"
              name="chevron-down"
            />
          </InputAction>
        )}

        {isValidElement<IconProps>(endIcon) && (
          <InputAction>{cloneElement(endIcon, { fontSize: 'lg' })}</InputAction>
        )}
      </InputBox>
    );
  },
);

Select.displayName = 'Select';

export default memo(Select) as SelectFn;
