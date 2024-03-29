import { Flex } from '@seed-ui/react';
import { atoms } from '@seed-ui/styles';
import { StoryFn } from '@storybook/react';

import Message, { MessageProps } from './Message';

const variants: MessageProps['variant'][] = [
  'primary',
  'success',
  'warning',
  'danger',
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
      <Message {...args} key={i} className={atoms({ mb: 2 })} variant={variant}>
        This is a {variant} message.
      </Message>
    ))}
  </Flex>
);
