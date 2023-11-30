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

import { IconProps } from '../Icon';
import { InputAction } from '../InputAction';
import { InputBox, InputBoxSize } from '../InputBox';

export type DateInputSize = InputBoxSize;

export interface DateInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'min' | 'max'
  > {
  autoFocus?: boolean;
  className?: string;
  disabled?: boolean;
  id?: string;
  invalid?: boolean;
  min?: string;
  max?: string;
  name?: string;
  readOnly?: boolean;
  size?: DateInputSize;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  value?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
}

const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      className,
      disabled,
      id,
      invalid,
      readOnly,
      size = 'md',
      startIcon,
      endIcon,
      onFocus,
      onBlur,
      ...inputProps
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(true);

        if (onFocus) {
          onFocus(e);
        }
      },
      [onFocus],
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(false);

        if (onBlur) {
          onBlur(e);
        }
      },
      [onBlur],
    );

    return (
      <InputBox
        className={className}
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

        <input
          {...inputProps}
          disabled={disabled}
          id={id}
          readOnly={readOnly}
          ref={ref}
          type="date"
          onBlur={handleBlur}
          onFocus={handleFocus}
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

DateInput.displayName = 'DateInput';

export default memo(DateInput);
