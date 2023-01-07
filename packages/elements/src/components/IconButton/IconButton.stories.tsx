import React from 'react';
import { Box, Flex } from '@seed-ui/flexbox';

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
  'overlay-primary',
  'overlay-secondary',
  'overlay-tertiary',
  'overlay-info',
  'overlay-success',
  'overlay-warning',
  'overlay-danger',
  'overlay-alt',
];

const sizes: IconButtonSize[] = ['xs', 'sm', 'md', 'lg'];

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
    <Flex flexWrap="wrap" mt={-4} mx={-2}>
      {variants.map((variant, i) => (
        <Box key={i} mt={4} px={2} title={`${variant} variant IconButton`}>
          <IconButton
            {...args}
            title={`${variant} variant IconButton`}
            variant={variant}
          />
        </Box>
      ))}
    </Flex>
  );
}

export function Sizes(args: IconButtonProps): JSX.Element {
  return (
    <Flex alignItems="center" flexWrap="wrap" mt={-4} mx={-2}>
      {sizes.map((size, i) => (
        <Box key={i} mt={4} px={2}>
          <IconButton {...args} size={size} title={`${size} size IconButton`} />
        </Box>
      ))}
    </Flex>
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
