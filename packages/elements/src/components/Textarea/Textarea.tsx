import React from 'react';
import cn from 'classnames';

import { textboxStyle } from '../../styles';
import InputGroup from '../InputGroup';
import Label from '../Label';
import InputContainer from '../InputContainer';
import InputAction from '../InputAction';

import * as S from './Textarea.css';

export type TextareaShape = 'rectangle' | 'stadium';

export type TextareaSize = 'sm' | 'md' | 'lg';

export type TextareaDirection = 'row' | 'column';

export interface TextareaProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    'size' | 'action' | 'label'
  > {
  action?: React.ReactNode;
  direction?: TextareaDirection;
  disabled?: boolean;
  error?: string;
  invalid?: boolean;
  label?: React.ReactNode;
  message?: React.ReactNode;
  shape?: TextareaShape;
  size?: TextareaSize;
  submitOnEnter?: boolean;
}

const Textarea = (
  {
    direction = 'column',
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
  ref: React.Ref<HTMLTextAreaElement>,
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
        <textarea
          {...inputProps}
          className={cn(textboxStyle, S.textarea)}
          disabled={disabled}
          id={id}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyPress={handleKeyPress}
          readOnly={readOnly}
          ref={ref}
        />

        {action && <InputAction>{action}</InputAction>}
      </InputContainer>
    </InputGroup>
  );
};

export default React.forwardRef(Textarea);
