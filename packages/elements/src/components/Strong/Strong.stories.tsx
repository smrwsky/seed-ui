import React from 'react';
import { atoms } from '@seed-ui/styles';

import Text from '../Text';

import Strong, { StrongProps, StrongVariant } from './Strong';
import docs from './Strong.docs.mdx';

const variants: StrongVariant[] = [
  'primary',
  'accent',
  'secondary',
  'info',
  'success',
  'warning',
  'danger',
  'light',
  'dark',
];

export default {
  title: 'Typography/Strong',
  component: Strong,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    'as': {
      table: {
        type: {
          summary: 'ElementType',
        },
        defaultValue: { summary: 'div' },
      },
    },
    'bold': {
      control: 'boolean',
      defaultValue: true,
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'true' },
      },
    },
    'variant': {
      control: 'select',
      defaultValue: 'primary',
      table: {
        type: {
          summary: variants.join(' | '),
        },
        defaultValue: { summary: 'primary' },
      },
    },
    '[Element props]': {
      table: {
        type: {
          summary: 'HTMLAttributes',
        },
      },
    },
    'children': {
      control: 'text',
      defaultValue: 'This is strong element',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
};

export function Base(args: StrongProps): JSX.Element {
  return (
    <Text>
      <Strong {...args} />
    </Text>
  );
}

export function Variants(args: StrongProps): JSX.Element {
  return (
    <>
      {variants.map((variant, i) => (
        <Text key={i}>
          <Strong {...args} variant={variant}>
            This is {variant} strong
          </Strong>
        </Text>
      ))}
    </>
  );
}

export function Bold(args: StrongProps): JSX.Element {
  return (
    <>
      <Text className={atoms({ mb: 1.5 })}>
        This is default <Strong {...args}>strong</Strong>.
      </Text>

      <Text>
        This is also{' '}
        <Strong {...args} bold={false}>
          strong
        </Strong>
        , but it&apos;s font-weight is inherit.
      </Text>
    </>
  );
}
