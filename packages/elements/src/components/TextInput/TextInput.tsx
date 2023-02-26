import { Icon, IconType } from '@seed-ui/icons';
import {
  FC,
  FocusEvent,
  forwardRef,
  InputHTMLAttributes,
  memo,
  RefAttributes,
  useCallback,
  useState,
} from 'react';

import { InputAction, InputBox, TextBox } from '../InputGroup';

export type TextInputSize = 'sm' | 'md' | 'lg';

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  defaultValue?: string;
  disabled?: boolean;
  icon?: string;
  iconType?: IconType;
  inputSize?: number;
  invalid?: boolean;
  rounded?: boolean;
  size?: TextInputSize;
  value?: string;
}

const TextInput: FC<TextInputProps & RefAttributes<HTMLInputElement>> =
  forwardRef<HTMLInputElement, TextInputProps>(
    (
      {
        rounded,
        size,
        disabled,
        icon,
        iconType,
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
          {icon && (
            <InputAction>
              <Icon name={icon} size="sm" type={iconType} variant="secondary" />
            </InputAction>
          )}

          <TextBox
            {...inputProps}
            disabled={disabled}
            onBlur={handleBlur}
            onFocus={handleFocus}
            readOnly={readOnly}
            ref={ref}
            size={inputSize}
            type="text"
          />
        </InputBox>
      );
    },
  );

TextInput.displayName = 'TextInput';

export default memo(TextInput);
