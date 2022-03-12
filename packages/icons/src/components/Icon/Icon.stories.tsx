import React from 'react';
import { Space, Col, Row } from '@seed-ui/elements/src';
import { Caption, Text } from '@seed-ui/elements';
import { capitalize } from 'lodash';

import { Maybe } from '../../types/helpers';

import docs from './Icon.docs.mdx';
import Icon, {
  IconAnimation,
  IconFlip,
  IconProps,
  IconPull,
  IconRotate,
  IconSize,
  IconType,
  IconVariant,
} from './Icon';

const TYPE_OPTIONS: Maybe<IconType>[] = ['regular', 'solid', 'logo'];

const VARIANT_OPTIONS: IconVariant[] = [
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

const SIZE_OPTIONS: Maybe<IconSize>[] = ['xs', 'sm', 'md', 'lg', undefined];

const ROTATE_OPTIONS: Maybe<IconRotate>[] = [90, 180, 270, undefined];

const FLIP_OPTIONS: Maybe<IconFlip>[] = ['vertical', 'horizontal', undefined];

const PULL_OPTIONS: Maybe<IconPull>[] = ['left', 'right', undefined];

const ANIMATION_OPTIONS: Maybe<IconAnimation>[] = [
  'spin',
  'tada',
  'flashing',
  'burst',
  'fade-left',
  'fade-right',
  'fade-up',
  'fade-down',
  'spin-hover',
  'tada-hover',
  'flashing-hover',
  'burst-hover',
  'fade-left-hover',
  'fade-right-hover',
  'fade-up-hover',
  'fade-down-hover',
  undefined,
];

const ANIMATION_SAMPLES_MAP: Record<
  IconAnimation,
  Pick<IconProps, 'type' | 'name'>
> = {
  'spin': { type: 'regular', name: 'loader' },
  'tada': { type: 'solid', name: 'bell' },
  'flashing': { type: 'solid', name: 'error' },
  'burst': { type: 'regular', name: 'radio-circle' },
  'fade-left': { type: 'solid', name: 'left-arrow-circle' },
  'fade-right': { type: 'solid', name: 'right-arrow-circle' },
  'fade-up': { type: 'solid', name: 'up-arrow-circle' },
  'fade-down': { type: 'solid', name: 'down-arrow-circle' },
  'spin-hover': { type: 'regular', name: 'loader' },
  'tada-hover': { type: 'solid', name: 'bell' },
  'flashing-hover': { type: 'solid', name: 'error' },
  'burst-hover': { type: 'regular', name: 'radio-circle' },
  'fade-left-hover': { type: 'solid', name: 'left-arrow-circle' },
  'fade-right-hover': { type: 'solid', name: 'right-arrow-circle' },
  'fade-up-hover': { type: 'solid', name: 'up-arrow-circle' },
  'fade-down-hover': { type: 'solid', name: 'down-arrow-circle' },
};

export default {
  title: 'Overview/Icon',
  component: Icon,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    'name': {
      control: 'text',
      defaultValue: 'like',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    'type': {
      control: 'radio',
      defaultValue: 'solid',
      options: TYPE_OPTIONS,
      table: {
        type: {
          summary: TYPE_OPTIONS.map(String).join(' | '),
        },
        defaultValue: {
          summary: 'regular',
        },
      },
    },
    'variant': {
      control: 'select',
      defaultValue: 'secondary',
      options: VARIANT_OPTIONS,
      table: {
        type: {
          summary: VARIANT_OPTIONS.map(String).join(' | '),
        },
        defaultValue: {
          summary: 'dark',
        },
      },
    },
    'size': {
      control: 'select',
      options: SIZE_OPTIONS,
      defaultValue: 'sm',
      table: {
        type: {
          summary: SIZE_OPTIONS.map(String).join(' | '),
        },
      },
    },
    'rotate': {
      control: 'select',
      options: ROTATE_OPTIONS,
      table: {
        type: {
          summary: ROTATE_OPTIONS.map(String).join(' | '),
        },
      },
    },
    'flip': {
      control: 'radio',
      options: FLIP_OPTIONS,
      table: {
        type: {
          summary: FLIP_OPTIONS.map(String).join(' | '),
        },
      },
    },
    'pull': {
      control: 'radio',
      options: PULL_OPTIONS,
      table: {
        type: {
          summary: PULL_OPTIONS.map(String).join(' | '),
        },
      },
    },
    'animation': {
      control: 'select',
      options: ANIMATION_OPTIONS,
      table: {
        type: {
          summary: ANIMATION_OPTIONS.map(String).join(' | '),
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
  },
};

export function Base(args: IconProps): JSX.Element {
  return <Icon {...args} />;
}

export function Variants(args: IconProps): JSX.Element {
  return (
    <Row alignItems="center" gutter={2}>
      {VARIANT_OPTIONS.map(
        (variant, i) =>
          variant && (
            <Col key={i}>
              <Space direction="column" align="center" gutter={1}>
                <Icon {...args} type="solid" name="like" variant={variant} />
                <Caption variant="secondary">
                  {capitalize(variant ?? undefined)}
                </Caption>
              </Space>
            </Col>
          ),
      )}
    </Row>
  );
}

export function Sizes(args: IconProps): JSX.Element {
  return (
    <Row alignItems="center" gutter={2}>
      {SIZE_OPTIONS.map(
        (size, i) =>
          size && (
            <Col key={i}>
              <Space direction="column" align="center" gutter={1}>
                <Icon {...args} type="solid" name="like" size={size} />
                <Caption variant="secondary">
                  {capitalize(size ?? undefined)}
                </Caption>
              </Space>
            </Col>
          ),
      )}
    </Row>
  );
}

export function Rotate(args: IconProps): JSX.Element {
  return (
    <Row alignItems="center" gutter={2}>
      {ROTATE_OPTIONS.map(
        (rotate, i) =>
          rotate && (
            <Col key={i}>
              <Space direction="column" align="center" gutter={1}>
                <Icon {...args} rotate={rotate} />
                <Caption variant="secondary">{rotate ?? undefined}</Caption>
              </Space>
            </Col>
          ),
      )}
    </Row>
  );
}

export function Flip(args: IconProps): JSX.Element {
  return (
    <Row alignItems="center" gutter={2}>
      {FLIP_OPTIONS.map(
        (flip, i) =>
          flip && (
            <Col key={i}>
              <Space direction="column" align="center" gutter={1}>
                <Icon {...args} flip={flip} />
                <Caption variant="secondary">
                  {capitalize(flip ?? undefined)}
                </Caption>
              </Space>
            </Col>
          ),
      )}
    </Row>
  );
}

export function Pull(args: IconProps): JSX.Element {
  return (
    <Text>
      <Icon
        {...args}
        size="lg"
        type="solid"
        name="quote-alt-left"
        pull="left"
      />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus erat
      eu nibh laoreet, sed ullamcorper diam ornare. Quisque viverra ante nec
      luctus imperdiet. Quisque ut imperdiet nisi. Quisque ultrices laoreet
      odio, non vestibulum lacus molestie sollicitudin. Phasellus nec dolor eget
      nunc commodo sodales vel vel eros.
    </Text>
  );
}

export function Animation(args: IconProps): JSX.Element {
  return (
    <Row alignItems="center" gutter={2}>
      {ANIMATION_OPTIONS.map(
        (animation, i) =>
          animation && (
            <Col key={i}>
              <Space direction="column" align="center" gutter={1}>
                <Icon
                  {...args}
                  {...ANIMATION_SAMPLES_MAP[animation]}
                  animation={animation}
                />
                <Caption variant="secondary">
                  {capitalize(animation ?? undefined)}
                </Caption>
              </Space>
            </Col>
          ),
      )}
    </Row>
  );
}
