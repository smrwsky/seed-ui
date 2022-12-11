import React from 'react';

import { TitleProps } from '../Title';
import { StrongProps } from '../Strong';

import docs from './Text.docs.mdx';
import Text, { TextProps, TextSize, TextVariant } from './Text';

const variants: TextVariant[] = [
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

const sizes: TextSize[] = ['sm', 'md'];

export default {
  title: 'Typography/Text',
  component: Text,
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
      defaultValue: false,
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'false' },
      },
    },
    'serif': {
      control: 'boolean',
      defaultValue: false,
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'false' },
      },
    },
    'size': {
      control: 'select',
      defaultValue: 'md',
      table: {
        type: {
          summary: sizes.join(' | '),
        },
        defaultValue: { summary: 'md' },
      },
    },
    'variant': {
      control: 'select',
      defaultValue: 'dark',
      table: {
        type: {
          summary: variants.join(' | '),
        },
        defaultValue: { summary: 'dark' },
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
      defaultValue: 'This is a text',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
};

export function Base(args: TextProps): JSX.Element {
  return <Text {...args} />;
}

export function Variants(args: TextProps): JSX.Element {
  return (
    <>
      {variants.map((variant, i) => (
        <Text {...args} key={i} variant={variant}>
          This is {variant} text
        </Text>
      ))}
    </>
  );
}

export function Sizes(args: TextProps): JSX.Element {
  return (
    <>
      {sizes.map((size, i) => (
        <Text {...args} key={i} size={size}>
          A text with size {size}
        </Text>
      ))}
    </>
  );
}

export function Serif(args: TitleProps): JSX.Element {
  return (
    <>
      {sizes.map((size, i) => (
        <Text {...args} key={i} serif size={size}>
          A text with size {size}
        </Text>
      ))}
    </>
  );
}

export function Bold(args: StrongProps): JSX.Element {
  return (
    <Text {...args} bold>
      This is a bold text
    </Text>
  );
}
