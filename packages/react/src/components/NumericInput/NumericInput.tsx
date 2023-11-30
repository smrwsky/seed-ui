'use client';

import { atoms } from '@seed-ui/styles';
import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
  useCallback,
  useEffect,
} from 'react';
import { NumericFormat, NumberFormatValues } from 'react-number-format';

import { IconProps } from '../Icon';
import { InputAction } from '../InputAction';
import { InputBox, InputBoxSize } from '../InputBox';

export type NumericValue = number | null;

export type NumericInputSize = InputBoxSize;

export interface NumericInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'defaultValue' | 'size' | 'type' | 'value' | 'onChange'
  > {
  allowLeadingZeros?: boolean;
  allowNegative?: boolean;
  allowedDecimalSeparators?: string[];
  decimalScale?: number;
  decimalSeparator?: string;
  defaultValue?: NumericValue;
  fixedDecimalScale?: boolean;
  isAllowed?: (values: NumberFormatValues) => boolean;
  prefix?: string;
  size?: NumericInputSize;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  invalid?: boolean;
  suffix?: string;
  thousandSeparator?: boolean | string;
  thousandsGroupStyle?: 'thousand' | 'lakh' | 'wan' | 'none';
  value?: NumericValue;
  onChange?: (value: NumericValue) => void;
}

const NumericInput = forwardRef<HTMLInputElement, NumericInputProps>(
  (
    {
      defaultValue,
      disabled,
      invalid = false,
      readOnly,
      size = 'md',
      startIcon,
      endIcon,
      value,
      onChange,
      onFocus,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const [valueState, setValueState] = React.useState<NumericValue>(
      value ?? defaultValue ?? null,
    );

    const [focused, setFocused] = React.useState(false);
    const inputValue = valueState ?? '';

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true);
        onFocus?.(e);
      },
      [onFocus],
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(false);
        onBlur?.(e);
      },
      [onBlur],
    );

    const handleValueChange = React.useCallback(
      ({ floatValue }: NumberFormatValues) => {
        onChange?.(floatValue ?? null);
      },
      [onChange],
    );

    useEffect(() => {
      if (value !== undefined) {
        setValueState(value);
      }
    }, [value]);

    return (
      <InputBox
        disabled={disabled}
        focused={focused}
        invalid={invalid}
        readOnly={readOnly}
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

        <NumericFormat
          disabled={disabled}
          getInputRef={ref}
          readOnly={readOnly}
          value={inputValue}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onValueChange={handleValueChange}
          {...props}
        />

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
    );
  },
);

NumericInput.displayName = 'NumericInput';

export default memo(NumericInput);
