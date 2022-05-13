import React from 'react';

import Textbox from '../Textbox';
import InputContainer from '../InputContainer';
import InputGroup from '../InputGroup';
import Label from '../Label';
import InputAction from '../InputAction';

export type TextInputShape = 'rectangle' | 'stadium';

export type TextInputSize = 'sm' | 'md' | 'lg';

export type TextInputDirection = 'row' | 'column';

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  action?: React.ReactNode;
  direction?: TextInputDirection;
  disabled?: boolean;
  error?: string;
  invalid?: boolean;
  label?: React.ReactNode;
  message?: React.ReactNode;
  shape?: TextInputShape;
  size?: TextInputSize;
}

const TextInput = (
  {
    direction = 'column',
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
  ref: React.Ref<HTMLInputElement>,
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
    <InputGroup
      direction={direction}
      error={error}
      htmlFor={id}
      label={
        typeof label === 'string' ? (
          <Label size={size === 'sm' ? 'sm' : 'md'}>{label}</Label>
        ) : (
          label
        )
      }
      message={message}
    >
      <InputContainer
        disabled={disabled}
        focused={focused}
        invalid={invalid || Boolean(error)}
        readOnly={readOnly}
        shape={shape}
        size={size}
      >
        <Textbox
          {...inputProps}
          disabled={disabled}
          onBlur={handleBlur}
          onFocus={handleFocus}
          readOnly={readOnly}
          ref={ref}
          type="text"
        />

        {action && <InputAction>{action}</InputAction>}
      </InputContainer>
    </InputGroup>
  );
};

export default React.forwardRef(TextInput);
