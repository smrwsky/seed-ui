import React from 'react';
import { Col, Container, Row } from '@seed-ui/layout';

import Text from '../Text/Text';

export type InputGroupDirection = 'row' | 'column';
export type InputGroupProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  direction?: InputGroupDirection;
  error?: string;
  label?: React.ReactNode;
  message?: React.ReactNode;
};

function InputGroup(
  {
    direction = 'row',
    error,
    label,
    message,
    children,
    ...elementProps
  }: InputGroupProps,
  ref: React.Ref<HTMLLabelElement>,
): JSX.Element {
  return (
    <label ref={ref} {...elementProps}>
      <Row alignItems="baseline" gutter={1}>
        {label && (
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
          {children}

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
    </label>
  );
}

export default React.forwardRef(InputGroup);
