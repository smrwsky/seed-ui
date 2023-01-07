import React from 'react';

import Text from '../Text';

import Link, { LinkProps, LinkVariant } from './Link';
import docs from './Link.docs.mdx';

const variants: LinkVariant[] = [
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
  title: 'Typography/Link',
  component: Link,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    children: {
      defaultValue: 'This is a link',
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
