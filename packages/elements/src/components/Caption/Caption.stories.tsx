import React from 'react';

import Caption, { CaptionProps, CaptionVariant } from './Caption';
import docs from './Caption.docs.mdx';

const variants: CaptionVariant[] = [
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
  title: 'Typography/Caption',
  component: Caption,
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

    '[Element props]': {
      table: {
        type: {
          summary: 'HTMLAttributes',
        },
      },
    },
    'children': {
      control: 'text',
      defaultValue: 'This is a caption',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
};

export function Base(args: CaptionProps): JSX.Element {
  return <Caption {...args} />;
}

export function Variants(args: CaptionProps): JSX.Element {
  return (
    <>
      {variants.map((variant, i) => (
        <Caption {...args} key={i} variant={variant}>
          This is {variant} caption
        </Caption>
      ))}
    </>
  );
}
