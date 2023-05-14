import { atoms } from '@seed-ui/styles';
import { StoryFn } from '@storybook/react';

import { Link } from '../Link';

import Toast, { ToastProps } from './Toast';

const variants: ToastProps['variant'][] = [
  'info',
  'success',
  'warning',
  'danger',
  'light',
];

export default {
  title: 'Feedback/Toast',
  component: Toast,

  args: {
    children: (
      <>
        This is a toast message - <Link href="#">Check this out</Link>
      </>
    ),
  },
};

export const Basic: StoryFn<ToastProps> = (args) => <Toast {...args} />;

export const Title: StoryFn<ToastProps> = (args) => (
  <Toast {...args} title="Title" />
);

export const Variants: StoryFn<ToastProps> = (args) => (
  <>
    {variants.map((variant, i) => (
      <Toast {...args} className={atoms({ mb: 2 })} key={i} variant={variant}>
        This is {variant === 'info' ? 'an' : 'a'} message -{' '}
        <Link href="#">Check this out</Link>
      </Toast>
    ))}
  </>
);
