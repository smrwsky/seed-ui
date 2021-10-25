import React from 'react';

import { InputContainer } from '../InputGroup/InputContainer';
import { InputGroup } from '../InputGroup';
import { Text } from '../Text';
import { Label } from '../Label';
import { InputAction } from '../InputGroup/InputAction';
import { Textbox } from '../InputGroup/TextBox';

export type TextInputShape = 'rectangle' | 'stadium';

export type TextInputSize = 'sm' | 'md' | 'lg';

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: React.ReactNode;
  shape?: TextInputShape;
  size?: TextInputSize;
  disabled?: boolean;
  invalid?: boolean;
  error?: string;
  message?: React.ReactNode;
  action?: React.ReactNode;
}

const TextInput = (
  {
    label,
    shape,
    size,
    action,
    error,
    message,
    disabled,
    invalid,
    readOnly,
    id,
    onFocus,
    onBlur,
    ...inputProps
  }: TextInputProps,
  ref: React.Ref<HTMLDivElement>,
): JSX.Element => {
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
    <InputGroup>
      {typeof label === 'string' ? (
        <Label size={size === 'sm' ? 'sm' : 'md'}>{label}</Label>
      ) : (
        label
      )}

      <InputContainer
        ref={ref}
        disabled={disabled}
        readOnly={readOnly}
        focused={focused}
        invalid={invalid || Boolean(error)}
        shape={shape}
        size={size}
      >
        <Textbox
          {...inputProps}
          readOnly={readOnly}
          disabled={disabled}
          onBlur={handleBlur}
          onFocus={handleFocus}
          type="text"
        />

        {action && <InputAction>{action}</InputAction>}
      </InputContainer>

      {typeof message === 'string' ? (
        <Text size="sm" variant="secondary">
          {message}
        </Text>
      ) : (
        message
      )}

      {error && (
        <Text size="sm" variant="danger">
          {error}
        </Text>
      )}
    </InputGroup>
  );
};

TextInput.displayName = 'TextInput';

export default React.forwardRef(TextInput);
