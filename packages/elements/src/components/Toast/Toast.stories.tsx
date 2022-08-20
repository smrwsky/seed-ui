import React from 'react';
import { atoms } from '@seed-ui/styles';

import Link from '../Link';

import docs from './Toast.docs.mdx';
import Toast, { ToastProps } from './Toast';

const variants: ToastProps['variant'][] = [
  'default',
  'info',
  'success',
  'warning',
  'danger',
];

export default {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    children: {
      control: 'text',
      defaultValue: (
        <>
          This is toast message - <Link href="#">Check this out</Link>
        </>
      ),
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
};

export function Base(args: ToastProps): JSX.Element {
  return <Toast {...args} />;
}

export function Title(args: ToastProps): JSX.Element {
  return <Toast {...args} title="Title" />;
}

export function Variants(args: ToastProps): JSX.Element {
  return (
    <>
      {variants.map((variant, i) => (
        <Toast {...args} className={atoms({ mb: 2 })} key={i} variant={variant}>
          This is {variant} message - <Link href="#">Check this out</Link>
        </Toast>
      ))}
    </>
  );
}
