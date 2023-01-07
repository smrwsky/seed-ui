import React from 'react';
import { Col, Row } from '@seed-ui/layout';
import { capitalize } from 'lodash';

import Tag, { TagProps, TagSize, TagVariant } from './Tag';
import docs from './Tag.docs.mdx';

const variants: TagVariant[] = [
  'primary',
  'secondary',
  'tertiary',
  'info',
  'success',
  'warning',
  'danger',
  'alt',
  'outline-primary',
  'outline-secondary',
  'outline-tertiary',
  'outline-info',
  'outline-success',
  'outline-warning',
  'outline-danger',
  'outline-alt',
];

const sizes: TagSize[] = ['sm', 'md'];

export default {
  title: 'Data Display/Tag',
  component: Tag,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    children: {
      defaultValue: 'Tag title',
    },
  },
};

export function Base(args: TagProps): JSX.Element {
  return <Tag {...args} />;
}

export function Sizes(args: TagProps): JSX.Element {
  return (
    <Row alignItems="center" gutter={2}>
      {sizes.map((size, i) => (
        <Col key={i}>
          <Tag {...args} size={size}>
            {capitalize(size)}
          </Tag>
        </Col>
      ))}
    </Row>
  );
}

export function Variants(args: TagProps): JSX.Element {
  return (
    <Row gutter={2}>
      {variants.map((variant, i) => (
        <Col key={i} width="auto">
          <Tag {...args} variant={variant}>
            {capitalize(variant)}
          </Tag>
        </Col>
      ))}
    </Row>
  );
}

export function Rounded(args: TagProps): JSX.Element {
  return (
    <Tag {...args} rounded>
      Rounded tag
    </Tag>
  );
}

export function Clickable(args: TagProps): JSX.Element {
  return (
    // eslint-disable-next-line no-console
    <Tag {...args} onClick={() => console.log('Tag clicked')}>
      Clickable tag
    </Tag>
  );
}

export function Removable(args: TagProps): JSX.Element {
  return (
    // eslint-disable-next-line no-console
    <Tag {...args} deletable onClick={() => console.log('Tag clicked')}>
      Removable tag
    </Tag>
  );
}

export function Disabled(args: TagProps): JSX.Element {
  return (
    // eslint-disable-next-line no-console
    <Tag {...args} disabled>
      Disabled tag
    </Tag>
  );
}
