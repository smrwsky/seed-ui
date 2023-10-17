import { Box, Flex } from '@seed-ui/react';

import { Avatar } from '../Avatar';
import { Icon } from '../Icon';

import IconButton, {
  IconButtonProps,
  IconButtonSize,
  IconButtonVariant,
} from './IconButton';

const variants: IconButtonVariant[] = [
  'primary',
  'secondary',
  'outline',
  'plain',
  'success',
  'warning',
  'danger',
  'ghost',
];

const sizes: IconButtonSize[] = ['sm', 'md', 'lg'];

export default {
  title: 'Inputs/IconButton',
  component: IconButton,

  args: {
    children: <Icon name="like" type="solid" />,
  },
};

export function Basic(args: IconButtonProps): JSX.Element {
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

export function WithAvatar(args: IconButtonProps): JSX.Element {
  return (
    <IconButton avatar {...args}>
      <Avatar>
        <img alt="Profile" src="https://i.pravatar.cc/300" />
      </Avatar>
    </IconButton>
  );
}
