import React from 'react';
import { Caption, Text, Space, Col, Row } from '@seed-ui/elements';
import { capitalize } from 'lodash';

import docs from './Icon.docs.mdx';
import Icon, {
  IconAnimation,
  IconFlip,
  IconProps,
  IconRotate,
  IconSize,
  IconVariant,
} from './Icon';

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

const SIZE_OPTIONS: IconSize[] = ['xs', 'sm', 'md', 'lg', 'xl', 'none'];

const ROTATE_OPTIONS: IconRotate[] = [0, 90, 180, 270];

const FLIP_OPTIONS: IconFlip[] = ['vertical', 'horizontal', 'none'];

const ANIMATION_OPTIONS: IconAnimation[] = [
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
  'none',
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
  'none': { type: 'solid', name: 'like' },
};

export default {
  title: 'Typography/Icon',
  component: Icon,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    name: {
      defaultValue: 'like',
    },
    type: {
      defaultValue: 'solid',
    },
    variant: {
      defaultValue: 'default',
    },
    size: {
      defaultValue: 'sm',
    },
  },
};

export function Base(args: IconProps): JSX.Element {
  return <Icon {...args} />;
}

export function Variants(args: IconProps): JSX.Element {
  return (
    <Row alignItems="center" gutter={2}>
      {VARIANT_OPTIONS.map((variant, i) => (
        <Col key={i}>
          <Space alignItems="center" direction="column" gutter={1}>
            <Icon {...args} name="like" type="solid" variant={variant} />
            <Caption variant="tertiary">
              {capitalize(variant ?? undefined)}
            </Caption>
          </Space>
        </Col>
      ))}
    </Row>
  );
}

export function Sizes(args: IconProps): JSX.Element {
  return (
    <Row alignItems="end" gutter={2}>
      {SIZE_OPTIONS.map((size, i) => (
        <Col key={i}>
          <Space alignItems="center" direction="column" gutter={1}>
            <Icon {...args} name="like" size={size} type="solid" />
            <Caption variant="tertiary">
              {capitalize(size ?? undefined)}
            </Caption>
          </Space>
        </Col>
      ))}
    </Row>
  );
}

export function Rotate(args: IconProps): JSX.Element {
  return (
    <Row alignItems="center" gutter={2}>
      {ROTATE_OPTIONS.map((rotate, i) => (
        <Col key={i}>
          <Space alignItems="center" direction="column" gutter={1}>
            <Icon {...args} rotate={rotate} />
            <Caption variant="tertiary">{rotate ?? undefined}</Caption>
          </Space>
        </Col>
      ))}
    </Row>
  );
}

export function Flip(args: IconProps): JSX.Element {
  return (
    <Row alignItems="center" gutter={2}>
      {FLIP_OPTIONS.map((flip, i) => (
        <Col key={i}>
          <Space alignItems="center" direction="column" gutter={1}>
            <Icon {...args} flip={flip} />
            <Caption variant="tertiary">
              {capitalize(flip ?? undefined)}
            </Caption>
          </Space>
        </Col>
      ))}
    </Row>
  );
}

export function Pull(args: IconProps): JSX.Element {
  return (
    <Text>
      <Icon
        {...args}
        name="quote-alt-left"
        pull="left"
        size="lg"
        type="solid"
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
      {ANIMATION_OPTIONS.map((animation, i) => (
        <Col key={i}>
          <Space alignItems="center" direction="column" gutter={1}>
            <Icon
              {...args}
              {...ANIMATION_SAMPLES_MAP[animation]}
              animation={animation}
            />
            <Caption variant="tertiary">
              {capitalize(animation ?? undefined)}
            </Caption>
          </Space>
        </Col>
      ))}
    </Row>
  );
}
