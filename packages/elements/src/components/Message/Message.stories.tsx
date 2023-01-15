import React from 'react';
import { Box, Flex } from '@seed-ui/flexbox';

import docs from './Message.docs.mdx';
import Message, { MessageProps } from './Message';

const variants: MessageProps['variant'][] = [
  'info',
  'success',
  'warning',
  'danger',
  'light',
];

export default {
  title: 'Feedback/Message',
  component: Message,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    children: {
      defaultValue: 'This is message',
    },
  },
};

export function Base(args: MessageProps): JSX.Element {
  return <Message {...args} />;
}

export function Variants(args: MessageProps): JSX.Element {
  return (
    <Flex flexWrap="wrap" mt={-4}>
      {variants.map((variant, i) => (
        <Box key={i} mt={4} width="full">
          <Message {...args} variant={variant}>
            This is {variant} message.
          </Message>
        </Box>
      ))}
    </Flex>
  );
}
