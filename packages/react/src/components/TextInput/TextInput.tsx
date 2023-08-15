import {
  cloneElement,
  FocusEvent,
  forwardRef,
  InputHTMLAttributes,
  isValidElement,
  memo,
  ReactElement,
  useCallback,
  useState,
} from 'react';

import { IconProps } from '../Icon';
import { InputAction, InputBox, TextBox } from '../InputGroup';

export type TextInputSize = 'sm' | 'md' | 'lg';

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  defaultValue?: string;
  disabled?: boolean;
  icon?: ReactElement;
  inputSize?: number;
  invalid?: boolean;
  rounded?: boolean;
  size?: TextInputSize;
  value?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      rounded,
      size,
      disabled,
      icon,
      inputSize,
      invalid,
      readOnly,
      onFocus,
      onBlur,
      ...inputProps
    },
    ref,
  ) => {
    const [focused, setFocused] = useState(false);

    const handleFocus = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        e.persist();
        setFocused(true);

        if (onFocus) {
          onFocus(e);
        }
      },
      [onFocus],
    );

    const handleBlur = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        e.persist();
        setFocused(false);

        if (onBlur) {
          onBlur(e);
        }
      },
      [onBlur],
    );

    return (
      <InputBox
        disabled={disabled}
        focused={focused}
        invalid={invalid}
        readOnly={readOnly}
        rounded={rounded}
        size={size}
      >
        {isValidElement<IconProps>(icon) && (
          <InputAction>{cloneElement(icon, { fontSize: 'lg' })}</InputAction>
        )}

        <TextBox
          {...inputProps}
          disabled={disabled}
          readOnly={readOnly}
          ref={ref}
          size={inputSize}
          type="text"
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </InputBox>
    );
  },
);

TextInput.displayName = 'TextInput';

export default memo(TextInput);
