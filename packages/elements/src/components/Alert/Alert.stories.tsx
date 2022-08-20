import React from 'react';
import { atoms } from '@seed-ui/styles';

import Link from '../Link';

import docs from './Alert.docs.mdx';
import Alert, { AlertProps } from './Alert';

const variants: AlertProps['variant'][] = [
  'info',
  'success',
  'warning',
  'danger',
];

export default {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    children: {
      control: 'text',
      defaultValue: (
        <>
          This is danger message -{' '}
          <Link bold href="#" variant="danger">
            Check this out
          </Link>
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

export function Base(args: AlertProps): JSX.Element {
  return <Alert {...args} />;
}

export function Title(args: AlertProps): JSX.Element {
  return <Alert {...args} title="Error" />;
}

export function Variants(args: AlertProps): JSX.Element {
  return (
    <>
      {variants.map((variant, i) => (
        <Alert {...args} className={atoms({ mb: 2 })} key={i} variant={variant}>
          This is {variant} message -{' '}
          <Link bold href="#" variant={variant}>
            Check this out
          </Link>
        </Alert>
      ))}
    </>
  );
}
