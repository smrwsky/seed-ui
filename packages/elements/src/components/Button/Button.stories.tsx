import React from 'react';
import { Col, Row } from '@seed-ui/layout';

import Button, {
  ButtonProps,
  ButtonShape,
  ButtonSize,
  ButtonVariant,
} from './Button';
import docs from './Button.docs.mdx';

const variants: ButtonVariant[] = [
  'primary',
  'accent',
  'secondary',
  'info',
  'success',
  'warning',
  'danger',
  'light',
  'primary-outline',
  'accent-outline',
  'secondary-outline',
  'info-outline',
  'success-outline',
  'warning-outline',
  'danger-outline',
  'light-outline',
  'primary-overlay',
  'accent-overlay',
  'secondary-overlay',
  'info-overlay',
  'success-overlay',
  'warning-overlay',
  'danger-overlay',
  'light-overlay',
];

const sizes: ButtonSize[] = ['sm', 'md', 'lg'];

const shapes: ButtonShape[] = ['rectangle', 'stadium'];

export default {
  title: 'Elements/Button',
  component: Button,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    'as': {
      table: {
        type: {
          summary: 'ElementType',
        },
        defaultValue: { summary: 'button' },
      },
    },
    'disabled': {
      control: 'boolean',
      defaultValue: false,
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'false' },
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
    'startIcon': {
      table: {
        type: {
          summary: 'ReactElement',
        },
      },
    },
    'endIcon': {
      table: {
        type: {
          summary: 'ReactElement',
        },
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
    '[Element props]': {
      table: {
        type: {
          summary: 'HTMLAttributes',
        },
      },
    },
    'children': {
      control: 'text',
      defaultValue: 'Click me',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
};

export function Base(args: ButtonProps): JSX.Element {
  return <Button {...args} />;
}

export function Variants(args: ButtonProps): JSX.Element {
  return (
    <Row gutter={2}>
      {variants.map((variant, i) => (
        <Col width="auto" key={i}>
          <Button {...args} variant={variant}>
            {variant}
          </Button>
        </Col>
      ))}
    </Row>
  );
}

export function Sizes(args: ButtonProps): JSX.Element {
  return (
    <Row align="center" gutter={2}>
      {sizes.map((size, i) => (
        <Col key={i}>
          <Button {...args} size={size}>
            {size}
          </Button>
        </Col>
      ))}
    </Row>
  );
}

export function Shapes(args: ButtonProps): JSX.Element {
  return (
    <Row gutter={2}>
      {shapes.map((shape, i) => (
        <Col key={i}>
          <Button {...args} shape={shape}>
            {shape}
          </Button>
        </Col>
      ))}
    </Row>
  );
}
