'use client';

import { atoms } from '@seed-ui/styles';
import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
  useCallback,
  useState,
} from 'react';

import { Icon, IconProps } from '../Icon';
import { InputAction } from '../InputAction';
import { InputBox, InputBoxSize } from '../InputBox';

export type SelectValue<IsMulti extends boolean> = IsMulti extends true
  ? readonly string[]
  : string | undefined;

export interface SelectProps<IsMulti extends boolean = false>
  extends Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    'defaultValue' | 'size' | 'value' | 'onChange'
  > {
  htmlSize?: number;
  invalid?: boolean;
  size?: InputBoxSize;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  success?: boolean;
  defaultValue?: SelectValue<IsMulti>;
  disabled?: boolean;
  multiple?: IsMulti;
  value?: SelectValue<IsMulti>;
  onChange?: (value: SelectValue<IsMulti>) => void;
  children?: React.ReactNode;
}

export interface SelectFn {
  <IsMulti extends boolean = false>(
    props: SelectProps<IsMulti> & React.RefAttributes<HTMLSelectElement>,
  ): React.ReactElement;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  <IsMulti extends boolean = false>(
    {
      htmlSize,
      invalid,
      size = 'md',
      startIcon,
      endIcon,
      success,
      disabled,
      multiple,
      onChange,
      onFocus,
      onBlur,
      children,
      ...props
    }: SelectProps<IsMulti>,
    ref: React.ForwardedRef<HTMLSelectElement>,
  ) => {
    const [focused, setFocused] = useState(false);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLSelectElement>) => {
        const nextValue = multiple
          ? Array.from(e.target.selectedOptions, (v) => v.value)
          : e.target.value;

        onChange?.(nextValue as SelectValue<IsMulti>);
      },
      [multiple, onChange],
    );

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLSelectElement>) => {
        setFocused(true);
        onFocus?.(e);
      },
      [onFocus],
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLSelectElement>) => {
        setFocused(false);
        onBlur?.(e);
      },
      [onBlur],
    );

    return (
      <InputBox
        disabled={disabled}
        focused={focused}
        invalid={invalid}
        size={size}
        success={success}
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

        <div
          className={atoms({
            position: 'relative',
            flex: 1,
          })}
        >
          <select
            {...props}
            ref={ref}
            className={atoms({
              position: 'relative',
              paddingRight: multiple ? 4 : 7,
              zIndex: 10,
            })}
            disabled={disabled}
            multiple={multiple}
            size={htmlSize}
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
                right: 0,
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
        </div>

        {isValidElement<IconProps>(endIcon) && (
          <InputAction
            className={atoms({
              ml: 1,
            })}
          >
            {cloneElement(endIcon, {
              fontSize: 'lg',
            })}
          </InputAction>
        )}
      </InputBox>
    );
  },
);

Select.displayName = 'Select';

export default memo(Select) as SelectFn;
