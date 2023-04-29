import { Box, Flex } from '@seed-ui/flexbox';

import Button, { ButtonProps, ButtonSize, ButtonVariant } from './Button';

const variants: ButtonVariant[] = [
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
  'overlay-secondary',
  'overlay-primary',
  'overlay-tertiary',
  'overlay-info',
  'overlay-success',
  'overlay-warning',
  'overlay-danger',
  'overlay-light',
  'overlay-dark',
];

const sizes: ButtonSize[] = ['xs', 'sm', 'md', 'lg'];

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

export function Rounded(args: ButtonProps): JSX.Element {
  return <Button {...args} rounded />;
}

export function WithIcon(args: ButtonProps): JSX.Element {
  return (
    <Flex flexWrap="wrap" mt="-4" mx="-2">
      <Box mt={4} px={2}>
        <Button {...args} startIcon="like" startIconType="solid">
          Start icon
        </Button>
      </Box>

      <Box mt={4} px={2}>
        <Button {...args} endIcon="like" endIconType="solid">
          End icon
        </Button>
      </Box>
    </Flex>
  );
}
