import { atoms } from '@seed-ui/styles';
import { StoryFn } from '@storybook/react';

import { Avatar } from '../Avatar';
import { Icon } from '../Icon';

import { Toast, ToastProps } from './Toast';

const variants: ToastProps['variant'][] = [
  'primary',
  'success',
  'warning',
  'danger',
];

export default {
  title: 'Feedback/Toast',
  component: Toast,

  args: {
    children: (
      <>
        This is a toast message -{' '}
        <a href={window.location.href}>Check this out</a>
      </>
    ),
  },
};

export const Basic: StoryFn<ToastProps> = (args) => <Toast {...args} />;

export const Variants: StoryFn<ToastProps> = (args) => (
  <>
    {variants.map((variant, i) => (
      <Toast {...args} className={atoms({ mb: 2 })} key={i} variant={variant}>
        This is a {variant} message -{' '}
        <a href={window.location.href}>Check this out</a>
      </Toast>
    ))}
  </>
);

export const WithIcon: StoryFn<ToastProps> = (args) => (
  <Toast
    {...args}
    icon={<Icon color="primary400" fontSize="3xl" name="dollar" />}
  >
    This is a toast message - <a href={window.location.href}>Check this out</a>
  </Toast>
);

export const WithAvatar: StoryFn<ToastProps> = (args) => (
  <Toast
    {...args}
    icon={
      <Avatar size="md">
        <img alt="Profile" src="https://i.pravatar.cc/300" />
      </Avatar>
    }
  >
    This is a toast message - <a href={window.location.href}>Check this out</a>
  </Toast>
);
