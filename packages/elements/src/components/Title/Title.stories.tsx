import React from 'react';
import { atoms } from '@seed-ui/styles';

import docs from './Title.docs.mdx';
import Title, { TitleProps, TitleSize, TitleVariant } from './Title';

const variants: TitleVariant[] = [
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

const sizes: TitleSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export default {
  title: 'Typography/Title',
  component: Title,
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
      defaultValue: 'This is a title',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
};

export function Base(args: TitleProps): JSX.Element {
  return <Title {...args} />;
}

export function Variants(args: TitleProps): JSX.Element {
  return (
    <>
      {variants.map((variant, i) => (
        <Title {...args} key={i} variant={variant}>
          This is {variant} title
        </Title>
      ))}
    </>
  );
}

export function Sizes(args: TitleProps): JSX.Element {
  return (
    <>
      {sizes.map((size, i) => (
        <Title {...args} key={i} size={size}>
          A title with size {size}
        </Title>
      ))}
    </>
  );
}

export function Serif(args: TitleProps): JSX.Element {
  return (
    <>
      {sizes.map((size, i) => (
        <Title {...args} key={i} serif size={size}>
          A title with size {size}
        </Title>
      ))}
    </>
  );
}

export function Margins(args: TitleProps): JSX.Element {
  return (
    <>
      <Title {...args} className={atoms({ my: 4 })}>
        A title with vertical margins
      </Title>
    </>
  );
}
