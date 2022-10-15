import React from 'react';
import { Col, Row } from '@seed-ui/layout';
import { Icon } from '@seed-ui/icons';

import Avatar from '../Avatar';

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
  'dark',
  'primary-outline',
  'accent-outline',
  'secondary-outline',
  'info-outline',
  'success-outline',
  'warning-outline',
  'danger-outline',
  'light-outline',
  'dark-outline',
  'primary-overlay',
  'accent-overlay',
  'secondary-overlay',
  'info-overlay',
  'success-overlay',
  'warning-overlay',
  'danger-overlay',
  'light-overlay',
  'dark-overlay',
];

const sizes: ButtonSize[] = ['sm', 'md', 'lg'];

const shapes: ButtonShape[] = ['rectangle', 'stadium'];

export default {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    children: {
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

export function WithIcon(args: ButtonProps): JSX.Element {
  return (
    <Row gutter={2}>
      <Col>
        <Button {...args} startIcon={<Icon name="plus" />}>
          Start icon
        </Button>
      </Col>

      <Col>
        <Button {...args} endIcon={<Icon name="plus" />}>
          End icon
        </Button>
      </Col>
    </Row>
  );
}

export function WithAvatar(args: ButtonProps): JSX.Element {
  return (
    <Button
      {...args}
      startIcon={
        <Avatar>
          <img alt="Doggo" src="/images/dog.jpg" />
        </Avatar>
      }
    >
      With avatar
    </Button>
  );
}
