import React from 'react';
import { Col, Row } from '@seed-ui/layout';
import { capitalize } from 'lodash';

import Tag, { TagProps, TagShape, TagSize, TagVariant } from './Tag';
import docs from './Tag.docs.mdx';

const variants: TagVariant[] = [
  'primary',
  'accent',
  'secondary',
  'info',
  'success',
  'warning',
  'danger',
  'primary-outline',
  'accent-outline',
  'secondary-outline',
  'info-outline',
  'success-outline',
  'warning-outline',
  'danger-outline',
];

const sizes: TagSize[] = ['sm', 'md'];

const shapes: TagShape[] = ['rectangle', 'stadium'];

export default {
  title: 'Data Display/Tag',
  component: Tag,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    'as': {
      table: {
        type: {
          summary: 'ElementType',
        },
        defaultValue: { summary: 'Tag' },
      },
    },

    'shape': {
      control: 'select',
      defaultValue: 'rectangle',
      table: {
        type: {
          summary: shapes.join(' | '),
        },
        defaultValue: { summary: 'rectangle' },
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
      defaultValue: 'primary',
      options: variants,
      table: {
        type: {
          summary: variants.join(' | '),
        },
        defaultValue: { summary: 'primary' },
      },
    },
    'aria-disabled': {
      control: 'boolean',
      defaultValue: false,
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'false' },
      },
    },
    'onDelete': {
      table: {
        type: {
          summary: '() => void',
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
      defaultValue: 'Tag title',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
};

export function Base(args: TagProps): JSX.Element {
  return <Tag {...args} />;
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

export function Shapes(args: TagProps): JSX.Element {
  return (
    <Row gutter={2}>
      {shapes.map((shape, i) => (
        <Col key={i}>
          <Tag {...args} shape={shape}>
            {capitalize(shape)}
          </Tag>
        </Col>
      ))}
    </Row>
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
    <Tag {...args} onDelete={() => console.log('Delete clicked')}>
      Removable tag
    </Tag>
  );
}

export function Disabled(args: TagProps): JSX.Element {
  return (
    // eslint-disable-next-line no-console
    <Tag {...args} disabled onDelete={() => console.log('Delete clicked')}>
      Disabled tag
    </Tag>
  );
}
