import { Box, Flex } from '@seed-ui/react';

import { Icon } from '../Icon';

import Button, { ButtonProps, ButtonSize, ButtonVariant } from './Button';

const variants: ButtonVariant[] = [
  'primary',
  'accent',
  'secondary',
  'tertiary',
  'success',
  'warning',
  'danger',
  'ghost',
];

const sizes: ButtonSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Inputs/Button',
  component: Button,

  args: {
    children: 'Click me',
  },
};

export function Basic(args: ButtonProps) {
  return <Button {...args} />;
}

export function Variants(args: ButtonProps) {
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

export function Sizes(args: ButtonProps) {
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

export function WithIcon(args: ButtonProps) {
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

export function Loading(args: ButtonProps) {
  return <Button {...args} loading />;
}

export function Disabled(args: ButtonProps) {
  return <Button {...args} disabled />;
}

export function AsLink(args: ButtonProps) {
  return <Button {...args} as="a" href="#" />;
}

export function Rounded(args: ButtonProps) {
  return <Button {...args} rounded />;
}
