import React from 'react';

import Caption, { CaptionProps, CaptionVariant } from './Caption';
import docs from './Caption.docs.mdx';

const variants: CaptionVariant[] = [
  'primary',
  'secondary',
  'tertiary',
  'info',
  'success',
  'warning',
  'danger',
  'alt',
  'default',
];

export default {
  title: 'Typography/Caption',
  component: Caption,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    variant: {
      defaultValue: 'default',
    },
    children: {
      defaultValue: 'This is a caption',
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
