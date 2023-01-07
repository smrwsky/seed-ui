import React from 'react';
import { Col, Row } from '@seed-ui/layout';

import Button, { ButtonProps, ButtonSize, ButtonVariant } from './Button';
import docs from './Button.docs.mdx';

const variants: ButtonVariant[] = [
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
  'overlay-secondary',
  'overlay-primary',
  'overlay-tertiary',
  'overlay-info',
  'overlay-success',
  'overlay-warning',
  'overlay-danger',
  'overlay-alt',
];

const sizes: ButtonSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    children: {
      defaultValue: 'Click me',
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
        <Col key={i} width="auto">
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
    <Row alignItems="center" gutter={2}>
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

export function Rounded(args: ButtonProps): JSX.Element {
  return (
    <Button {...args} rounded>
      {shape}
    </Button>
  );
}

export function WithIcon(args: ButtonProps): JSX.Element {
  return (
    <Row gutter={2}>
      <Col>
        <Button {...args} startIcon="plus">
          Start icon
        </Button>
      </Col>

      <Col>
        <Button {...args} endIcon="plus">
          End icon
        </Button>
      </Col>
    </Row>
  );
}
