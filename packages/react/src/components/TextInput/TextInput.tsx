'use client';

import { atoms } from '@seed-ui/styles';
import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useMergeRefs } from '../../utils/use-merge-refs';
import { ClearIcon } from '../ClearIcon';
import { IconProps } from '../Icon';
import { InputAction } from '../InputAction';
import { InputBox, InputBoxSize } from '../InputBox';

export interface TextInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'onChange'
  > {
  clearable?: boolean;
  clearLabel?: string;
  htmlSize?: number;
  invalid?: boolean;
  size?: InputBoxSize;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  success?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      clearable,
      clearLabel = 'Clear',
      htmlSize,
      invalid,
      size,
      startIcon,
      endIcon,
      success,
      defaultValue,
      disabled,
      readOnly,
      value,
      onChange,
      onFocus,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const [valueState, setValueState] = useState(defaultValue ?? value ?? '');
    const [focused, setFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const mergedRefs = useMergeRefs(ref, inputRef);

    const isClearable =
      clearable && focused && valueState.length > 0 && !disabled && !readOnly;

    const changeValue = useCallback(
      (nextValue: string) => {
        setValueState(nextValue);
        onChange?.(nextValue);
      },
      [onChange],
    );

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value: nextValue } = e.target;
        setValueState(nextValue);
        changeValue(nextValue);
      },
      [changeValue],
    );

    const handleClear = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        inputRef.current?.focus();
        changeValue('');
      },
      [changeValue],
    );

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        e.persist();
        setFocused(true);
        onFocus?.(e);
      },
      [onFocus],
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        e.persist();
        setFocused(false);
        onBlur?.(e);
      },
      [onBlur],
    );

    useEffect(() => {
      if (typeof value !== 'undefined') {
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

        <input
          {...props}
          ref={mergedRefs}
          disabled={disabled}
          readOnly={readOnly}
          size={htmlSize}
          type="text"
          value={valueState}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
        />

        {isClearable && (
          <InputAction
            className={atoms({
              ml: 1,
            })}
          >
            <ClearIcon
              aria-label={clearLabel}
              color="neutral700"
              data-testid="clear-icon"
              fontSize="xl"
              role="button"
              tabIndex={-1}
              onMouseDown={handleClear}
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
    );
  },
);

TextInput.displayName = 'TextInput';

export default memo(TextInput);
