import React from 'react';

import Label, { LabelProps, LabelSize, LabelVariant } from './Label';
import docs from './Label.docs.mdx';

const variants: LabelVariant[] = [
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

const sizes: LabelSize[] = ['sm', 'md'];

export default {
  title: 'Typography/Label',
  component: Label,
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
      defaultValue: 'This is a label',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
};

export function Base(args: LabelProps): JSX.Element {
  return <Label {...args} />;
}

export function Variants(args: LabelProps): JSX.Element {
  return (
    <>
      {variants.map((variant, i) => (
        <Label {...args} key={i} variant={variant}>
          This is {variant} label
        </Label>
      ))}
    </>
  );
}

export function Sizes(args: LabelProps): JSX.Element {
  return (
    <>
      {sizes.map((size, i) => (
        <Label {...args} key={i} size={size}>
          A label with size {size}
        </Label>
      ))}
    </>
  );
}
