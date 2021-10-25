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
  title: 'Elements/Text',
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
    'm': {
      control: 'object',
      table: {
        type: {
          summary: "Atoms['m']",
        },
      },
    },
    'mb': {
      control: 'object',
      table: {
        type: {
          summary: "Atoms['mb']",
        },
      },
    },
    'ml': {
      control: 'object',
      table: {
        type: {
          summary: "Atoms['ml']",
        },
      },
    },
    'mr': {
      control: 'object',
      table: {
        type: {
          summary: "Atoms['mr']",
        },
      },
    },
    'mt': {
      control: 'object',
      table: {
        type: {
          summary: "Atoms['mt']",
        },
      },
    },
    'mx': {
      control: 'object',
      table: {
        type: {
          summary: "Atoms['mx']",
        },
      },
    },
    'my': {
      control: 'object',
      table: {
        type: {
          summary: "Atoms['my']",
        },
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

export function Margins(args: TextProps): JSX.Element {
  return (
    <Text {...args} my={4}>
      A text with vertical margins
    </Text>
  );
}
