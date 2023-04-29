import { atoms, Caption, Text } from '@seed-ui/elements';
import { Box, Flex } from '@seed-ui/flexbox';
import { capitalize } from 'lodash';

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
  'secondary',
  'tertiary',
  'info',
  'success',
  'warning',
  'danger',
  'light',
  'dark',
];

const SIZE_OPTIONS: IconSize[] = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  '4xl',
];

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

  args: {
    name: 'like',
    type: 'solid',
  },
};

export function Base(args: IconProps): JSX.Element {
  return <Icon {...args} />;
}

export function Variants(args: IconProps): JSX.Element {
  return (
    <Flex alignItems="center" mt="-2" mx="-1">
      {VARIANT_OPTIONS.map((variant, i) => (
        <Box key={i} lineHeight={0} mt={2} px={1}>
          <Flex alignItems="center" flexDirection="column">
            <Icon {...args} name="like" type="solid" variant={variant} />
            <Caption className={atoms({ mt: 1 })} variant="tertiary">
              {capitalize(variant ?? undefined)}
            </Caption>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
}

export function Sizes(args: IconProps): JSX.Element {
  return (
    <Flex alignItems="center" mt="-2" mx="-1">
      {SIZE_OPTIONS.map((size, i) => (
        <Box key={i} lineHeight={0} mt={2} px={1}>
          <Flex alignItems="center" flexDirection="column">
            <Icon {...args} name="like" size={size} type="solid" />
            <Caption variant="tertiary">
              {capitalize(size ?? undefined)}
            </Caption>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
}

export function Rotate(args: IconProps): JSX.Element {
  return (
    <Flex alignItems="center" mt="-2" mx="-1">
      {ROTATE_OPTIONS.map((rotate, i) => (
        <Box key={i} lineHeight={0} mt={2} px={1}>
          <Flex alignItems="center" flexDirection="column">
            <Icon {...args} rotate={rotate} />
            <Caption variant="tertiary">{rotate ?? undefined}</Caption>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
}

export function Flip(args: IconProps): JSX.Element {
  return (
    <Flex alignItems="center" mt="-2" mx="-1">
      {FLIP_OPTIONS.map((flip, i) => (
        <Box key={i} lineHeight={0} mt={2} px={1}>
          <Flex alignItems="center" flexDirection="column">
            <Icon {...args} flip={flip} />
            <Caption variant="tertiary">
              {capitalize(flip ?? undefined)}
            </Caption>
          </Flex>
        </Box>
      ))}
    </Flex>
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
    <Flex alignItems="center" mt="-2" mx="-1">
      {ANIMATION_OPTIONS.map((animation, i) => (
        <Box key={i} lineHeight={0} mt={2} px={1}>
          <Flex alignItems="center" flexDirection="column">
            <Icon
              {...args}
              {...ANIMATION_SAMPLES_MAP[animation]}
              animation={animation}
            />
            <Caption variant="tertiary">
              {capitalize(animation ?? undefined)}
            </Caption>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
}
