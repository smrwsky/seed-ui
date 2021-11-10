import React from 'react';
import { Col, Container, Row } from '@seed-ui/layout';

import { InputContainer } from '../InputGroup/InputContainer';
import { InputGroup } from '../InputGroup';
import { Text } from '../Text';
import { Label } from '../Label';
import { InputAction } from '../InputGroup/InputAction';
import { Textbox } from '../InputGroup/TextBox';

export type TextInputShape = 'rectangle' | 'stadium';

export type TextInputSize = 'sm' | 'md' | 'lg';

export type TextInputDirection = 'row' | 'column';

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  direction?: TextInputDirection;
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
      <Row alignItems="baseline" gutter={1}>
        {typeof label === 'string' && (
          <Col
            width={
              direction === 'column' ? '1/1' : { mobile: '1/1', tablet: '1/3' }
            }
          >
            <Label size={size === 'sm' ? 'sm' : 'md'}>{label}</Label>
          </Col>
        )}

        {label && typeof label !== 'string' && (
          <Col
            width={
              direction === 'column' ? '1/1' : { mobile: '1/1', tablet: '1/3' }
            }
          >
            {label}
          </Col>
        )}

        <Col
          width={
            direction === 'column' ? '1/1' : { mobile: '1/1', tablet: '2/3' }
          }
        >
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
            <Text mt={1} size="sm" variant="secondary">
              {message}
            </Text>
          ) : (
            <Container mt={1}>{message}</Container>
          )}

          {error && (
            <Text mt={1} size="sm" variant="danger">
              {error}
            </Text>
          )}
        </Col>
      </Row>
    </InputGroup>
  );
};

TextInput.displayName = 'TextInput';

export default React.forwardRef(TextInput);
