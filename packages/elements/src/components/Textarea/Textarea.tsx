import React from 'react';
import cx from 'classnames';

import { InputContainer } from '../InputGroup/InputContainer';
import { InputGroup } from '../InputGroup';
import { Text } from '../Text';
import { Label } from '../Label';
import { InputAction } from '../InputGroup/InputAction';
import { textboxStyle } from '../../styles/helpers';

import * as S from './Textarea.css';

export type TextareaShape = 'rectangle' | 'stadium';

export type TextareaSize = 'sm' | 'md' | 'lg';

export interface TextareaProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    'size' | 'action' | 'label'
  > {
  label?: React.ReactNode;
  submitOnEnter?: boolean;
  shape?: TextareaShape;
  size?: TextareaSize;
  disabled?: boolean;
  invalid?: boolean;
  error?: string;
  message?: React.ReactNode;
  action?: React.ReactNode;
}

const Textarea = (
  {
    label,
    shape,
    size,
    submitOnEnter = false,
    action,
    error,
    message,
    disabled,
    invalid,
    readOnly,
    id,
    onFocus,
    onBlur,
    onKeyPress,
    ...inputProps
  }: TextareaProps,
  ref: React.Ref<HTMLDivElement>,
): JSX.Element => {
  const [focused, setFocused] = React.useState(false);

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
  ): void => {
    if (submitOnEnter && e.key === 'Enter' && !e.shiftKey) {
      e.currentTarget.form?.dispatchEvent(
        new Event('submit', { cancelable: true }),
      );
      e.preventDefault();
    }

    if (onKeyPress) {
      e.persist();
      onKeyPress(e);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>): void => {
    setFocused(true);

    if (onFocus) {
      e.persist();
      onFocus(e);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>): void => {
    setFocused(false);

    if (onBlur) {
      e.persist();
      onBlur(e);
    }
  };

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
        <textarea
          {...inputProps}
          className={cx(textboxStyle, S.textarea)}
          id={id}
          readOnly={readOnly}
          disabled={disabled}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyPress={handleKeyPress}
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

Textarea.displayName = 'Textarea';

export default React.forwardRef(Textarea);
