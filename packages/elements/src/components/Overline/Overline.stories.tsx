import React from 'react';

import Overline, { OverlineProps, OverlineVariant } from './Overline';
import docs from './Overline.docs.mdx';

const variants: OverlineVariant[] = [
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
  title: 'Elements/Overline',
  component: Overline,
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
    '[Element props]': {
      table: {
        type: {
          summary: 'HTMLAttributes',
        },
      },
    },
    'children': {
      control: 'text',
      defaultValue: 'This is an overline',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
};

export function Base(args: OverlineProps): JSX.Element {
  return <Overline {...args} />;
}

export function Variants(args: OverlineProps): JSX.Element {
  return (
    <>
      {variants.map((variant, i) => (
        <Overline {...args} key={i} variant={variant}>
          This is {variant} overline
        </Overline>
      ))}
    </>
  );
}

export function Margins(args: OverlineProps): JSX.Element {
  return (
    <>
      <Overline {...args} my={4}>
        An overline with vertical margins
      </Overline>
    </>
  );
}
