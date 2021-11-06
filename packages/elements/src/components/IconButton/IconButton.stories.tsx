import React from 'react';
import { Col, Row } from '@seed-ui/layout';
import { GearIcon } from '@seed-ui/icons';

import IconButton, {
  IconButtonProps,
  IconButtonSize,
  IconButtonVariant,
} from './IconButton';
import docs from './IconButton.docs.mdx';

const variants: IconButtonVariant[] = [
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
];

const sizes: IconButtonSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Elements/IconButton',
  component: IconButton,
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
    '[Element props]': {
      table: {
        type: {
          summary: 'HTMLAttributes',
        },
      },
    },
    'children': {
      table: {
        type: {
          summary: 'ReactElement',
        },
      },
    },
  },
};

export function Base(args: IconButtonProps): JSX.Element {
  return (
    <IconButton {...args}>
      <GearIcon />
    </IconButton>
  );
}

export function Variants(args: IconButtonProps): JSX.Element {
  return (
    <Row gutter={2}>
      {variants.map((variant, i) => (
        <Col title={`${variant} variant IconButton`} key={i}>
          <IconButton {...args} variant={variant}>
            <GearIcon />
          </IconButton>
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
          <IconButton {...args} title={`${size} size IconButton`} size={size}>
            <GearIcon />
          </IconButton>
        </Col>
      ))}
    </Row>
  );
}
