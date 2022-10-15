import React from 'react';
import { Col, Row } from '@seed-ui/layout';
import { atoms } from '@seed-ui/styles';

import Text from '../Text';

export type InputGroupDirection = 'row' | 'column';

export interface InputGroupProps
  extends React.LabelHTMLAttributes<HTMLElement>,
    React.RefAttributes<HTMLElement> {
  as?: React.ElementType;
  direction?: InputGroupDirection;
  error?: string;
  label?: React.ReactNode;
  message?: React.ReactNode;
}

const InputGroup: React.FC<InputGroupProps> = React.forwardRef(
  (
    {
      as: As = 'label',
      direction = 'row',
      error,
      label,
      message,
      children,
      ...elementProps
    },
    ref,
  ) => (
    <As ref={ref} {...elementProps}>
      <Row alignItems="center" gutter={1}>
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

          {typeof message === 'string' && (
            <Text className={atoms({ mt: 1 })} size="sm" variant="secondary">
              {message}
            </Text>
          )}

          {message && typeof message !== 'string' && (
            <div className={atoms({ mt: 1 })}>{message}</div>
          )}

          {error && (
            <Text className={atoms({ mt: 1 })} size="sm" variant="danger">
              {error}
            </Text>
          )}
        </Col>
      </Row>
    </As>
  ),
);

InputGroup.displayName = 'InputGroup';

export default InputGroup;
