import React from 'react';
import { Icon } from '@seed-ui/icons';

import IconButton from '../IconButton';
import Textbox from '../Textbox';
import InputGroup from '../InputGroup';
import Label from '../Label';
import InputContainer from '../InputContainer';
import InputAction from '../InputAction';

import * as S from './DateInput.css';

export type DateInputShape = 'rectangle' | 'stadium';

export type DateInputSize = 'sm' | 'md' | 'lg';

export type DateInputDirection = 'row' | 'column';

export interface DateInputProps {
  autoFocus?: boolean;
  children?: React.ReactNode;
  direction?: DateInputDirection;
  disabled?: boolean;
  error?: string;
  id?: string;
  invalid?: boolean;
  label?: React.ReactNode;
  message?: string;
  name?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  readOnly?: boolean;
  shape?: DateInputShape;
  size?: DateInputSize;
  success?: boolean;
  value?: string;
}

function DateInput(
  {
    direction = 'row',
    disabled,
    error,
    invalid,
    label,
    message,
    readOnly,
    shape = 'rectangle',
    size = 'md',
    success,
    id,
    onFocus,
    onBlur,
    children,
    ...inputProps
  }: DateInputProps,
  ref: React.Ref<HTMLInputElement>,
): JSX.Element {
  const [focused, setFocused] = React.useState(false);

  function handleFocus(e: React.FocusEvent<HTMLInputElement>): void {
    e.persist();
    setFocused(true);

    if (onFocus) {
      onFocus(e);
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement>): void {
    e.persist();
    setFocused(false);

    if (onBlur) {
      onBlur(e);
    }
  }

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
        className={S.container}
        disabled={disabled}
        focused={focused}
        invalid={invalid || Boolean(error)}
        readOnly={readOnly}
        shape={shape}
        size={size}
      >
        <Textbox
          {...inputProps}
          className={S.input}
          disabled={disabled}
          id={id}
          onBlur={handleBlur}
          onFocus={handleFocus}
          readOnly={readOnly}
          ref={ref}
          type="date"
        />

        <InputAction className={S.action}>
          <IconButton
            className={S.icon}
            role="none"
            size="sm"
            variant="secondary"
          >
            <Icon name="calendar" />
          </IconButton>
        </InputAction>
      </InputContainer>
    </InputGroup>
  );
}

export default React.forwardRef(DateInput);
