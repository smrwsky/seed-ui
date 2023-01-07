import React from 'react';
import { Col, Row } from '@seed-ui/layout';

import Avatar from '../Avatar';

import IconButton, {
  IconButtonProps,
  IconButtonSize,
  IconButtonVariant,
} from './IconButton';
import docs from './IconButton.docs.mdx';

const variants: IconButtonVariant[] = [
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

const sizes: IconButtonSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Inputs/IconButton',
  component: IconButton,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    icon: {
      defaultValue: 'like',
    },
    iconType: {
      defaultValue: 'solid',
    },
  },
};

export function Base(args: IconButtonProps): JSX.Element {
  return <IconButton {...args} />;
}

export function Variants(args: IconButtonProps): JSX.Element {
  return (
    <Row gutter={2}>
      {variants.map((variant, i) => (
        <Col key={i} title={`${variant} variant IconButton`}>
          <IconButton
            {...args}
            title={`${variant} variant IconButton`}
            variant={variant}
          />
        </Col>
      ))}
    </Row>
  );
}

export function Sizes(args: IconButtonProps): JSX.Element {
  return (
    <Row alignItems="center" gutter={2}>
      {sizes.map((size, i) => (
        <Col key={i}>
          <IconButton {...args} size={size} title={`${size} size IconButton`} />
        </Col>
      ))}
    </Row>
  );
}

export function Rounded(args: IconButtonProps): JSX.Element {
  return <IconButton {...args} rounded title={'Rounded IconButton'} />;
}

export function WithAvatar(args: IconButtonProps): JSX.Element {
  return (
    <IconButton {...args}>
      <Avatar>
        <img alt="Doggo" src="/images/dog.jpg" />
      </Avatar>
    </IconButton>
  );
}
