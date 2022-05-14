import React from 'react';

import Text from '../Text';

import Link, { LinkProps, LinkVariant } from './Link';
import docs from './Link.docs.mdx';

const variants: LinkVariant[] = [
  'primary',
  'accent',
  'secondary',
  'info',
  'success',
  'warning',
  'danger',
  'light',
];

export default {
  title: 'Typography/Link',
  component: Link,
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
    'href': {
      control: 'text',
      defaultValue: '#',
      table: {
        type: {
          summary: 'string',
        },
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
      defaultValue: 'This is a link',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
};

export function Base(args: LinkProps): JSX.Element {
  return (
    <Text>
      <Link {...args} />
    </Text>
  );
}

export function Variants(args: LinkProps): JSX.Element {
  return (
    <>
      {variants.map((variant, i) => (
        <Text key={i}>
          <Link {...args} variant={variant}>
            This is {variant} link
          </Link>
        </Text>
      ))}
    </>
  );
}

export function Bold(args: LinkProps): JSX.Element {
  return (
    <Link {...args} bold>
      This is a bold link
    </Link>
  );
}
