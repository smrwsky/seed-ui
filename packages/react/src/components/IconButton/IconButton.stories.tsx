import { Box, Flex } from '@seed-ui/react';

import { Avatar } from '../Avatar';

import IconButton, {
  IconButtonProps,
  IconButtonSize,
  IconButtonVariant,
} from './IconButton';

const variants: IconButtonVariant[] = [
  'primary',
  'secondary',
  'tertiary',
  'info',
  'success',
  'warning',
  'danger',
  'light',
  'dark',
  'outline-primary',
  'outline-secondary',
  'outline-tertiary',
  'outline-info',
  'outline-success',
  'outline-warning',
  'outline-danger',
  'outline-light',
  'outline-dark',
];

const sizes: IconButtonSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Inputs/IconButton',
  component: IconButton,

  args: {
    icon: 'like',
    iconType: 'solid',
  },
};

export function Base(args: IconButtonProps): JSX.Element {
  return <IconButton {...args} />;
}

export function Variants(args: IconButtonProps): JSX.Element {
  return (
    <Flex flexWrap="wrap" mt="-4" mx="-2">
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
    <Flex alignItems="center" flexWrap="wrap" mt="-4" mx="-2">
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
