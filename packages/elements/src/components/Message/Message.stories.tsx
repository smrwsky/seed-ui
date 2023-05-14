import { Flex } from '@seed-ui/flexbox';
import { atoms } from '@seed-ui/styles';
import { StoryFn } from '@storybook/react';

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
  args: {
    children: 'This is a message',
  },
};

export const Basic: StoryFn<MessageProps> = (args) => <Message {...args} />;

export const WithTitle: StoryFn<MessageProps> = (args) => (
  <Message {...args} title="Title" />
);

export const Variants: StoryFn<MessageProps> = (args) => (
  <Flex alignItems="center" flexDirection="column">
    {variants.map((variant, i) => (
      <Message {...args} className={atoms({ mb: 2 })} key={i} variant={variant}>
        This is {variant === 'info' ? 'an' : 'a'} {variant} message.
      </Message>
    ))}
  </Flex>
);
