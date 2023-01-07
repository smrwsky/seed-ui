import React, {
  FC,
  forwardRef,
  InputHTMLAttributes,
  memo,
  RefAttributes,
} from 'react';
import { Icon, IconType } from '@seed-ui/icons';

import { InputAction, InputContainer, Textbox } from '../InputGroup';

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
        id,
        onFocus,
        onBlur,
        ...inputProps
      },
      ref,
    ) => {
      const [focused, setFocused] = React.useState(false);

      const handleFocus = React.useCallback(
        (e: React.FocusEvent<HTMLInputElement>) => {
          e.persist();
          setFocused(true);

          if (onFocus) {
            onFocus(e);
          }
        },
        [onFocus],
      );

      const handleBlur = React.useCallback(
        (e: React.FocusEvent<HTMLInputElement>) => {
          e.persist();
          setFocused(false);

          if (onBlur) {
            onBlur(e);
          }
        },
        [onBlur],
      );

      return (
        <InputContainer
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

          <Textbox
            {...inputProps}
            disabled={disabled}
            onBlur={handleBlur}
            onFocus={handleFocus}
            readOnly={readOnly}
            ref={ref}
            size={inputSize}
            type="text"
          />
        </InputContainer>
      );
    },
  );

TextInput.displayName = 'TextInput';

export default memo(TextInput);
