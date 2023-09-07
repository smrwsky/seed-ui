import { Box, Flex } from '@seed-ui/react';

import { Icon } from '../Icon';

import Button, { ButtonProps, ButtonSize, ButtonVariant } from './Button';

const variants: ButtonVariant[] = [
  'primary',
  'secondary',
  'tertiary',
  'success',
  'warning',
  'danger',
  'light',
  'dark',
  'primary-outline',
  'secondary-outline',
  'tertiary-outline',
  'success-outline',
  'warning-outline',
  'danger-outline',
  'light-outline',
  'dark-outline',
  'primary-overlay',
  'secondary-overlay',
  'tertiary-overlay',
  'success-overlay',
  'warning-overlay',
  'danger-overlay',
  'light-overlay',
  'dark-overlay',
];

const sizes: ButtonSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Inputs/Button',
  component: Button,

  args: {
    children: 'Click me',
  },
};

export function Base(args: ButtonProps): JSX.Element {
  return <Button {...args} />;
}

export function Variants(args: ButtonProps): JSX.Element {
  return (
    <Flex flexWrap="wrap" mt="-4" mx="-2">
      {variants.map((variant, i) => (
        <Box key={i} mt={4} px={2} width="auto">
          <Button {...args} variant={variant}>
            {variant}
          </Button>
        </Box>
      ))}
    </Flex>
  );
}

export function Sizes(args: ButtonProps): JSX.Element {
  return (
    <Flex alignItems="center" flexWrap="wrap" mt="-4" mx="-2">
      {sizes.map((size, i) => (
        <Box key={i} mt={4} px={2}>
          <Button {...args} size={size}>
            {size}
          </Button>
        </Box>
      ))}
    </Flex>
  );
}

export function WithIcon(args: ButtonProps): JSX.Element {
  return (
    <Flex flexWrap="wrap" mt="-4" mx="-2">
      <Box mt={4} px={2}>
        <Button {...args} startIcon={<Icon name="like" type="solid" />}>
          Start icon
        </Button>
      </Box>

      <Box mt={4} px={2}>
        <Button {...args} endIcon={<Icon name="like" type="solid" />}>
          End icon
        </Button>
      </Box>
    </Flex>
  );
}
