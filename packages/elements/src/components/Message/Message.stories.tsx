import React from 'react';
import { Col, Row } from '@seed-ui/layout';

import docs from './Message.docs.mdx';
import Message, { MessageProps } from './Message';

const variants: MessageProps['variant'][] = [
  'default',
  'info',
  'success',
  'warning',
  'danger',
];

export default {
  title: 'Feedback/Message',
  component: Message,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'This is message',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
};

export function Base(args: MessageProps): JSX.Element {
  return <Message {...args} />;
}

export function Variants(args: MessageProps): JSX.Element {
  return (
    <Row gutter={2}>
      {variants.map((variant, i) => (
        <Col key={i} width="1/1">
          <Message {...args} variant={variant}>
            This is {variant} message.
          </Message>
        </Col>
      ))}
    </Row>
  );
}
