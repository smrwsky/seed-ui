import { Box, Flex } from '@seed-ui/flexbox';

import Avatar, { AvatarProps, AvatarSize } from './Avatar';

const sizes: AvatarSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export default {
  title: 'Data Display/Avatar',
  component: Avatar,

  args: {
    placeholder: 'Peter Griffin',
  },
};

export function Base(args: AvatarProps): JSX.Element {
  return (
    <Flex>
      <Box mr={2}>
        <Avatar {...args}>
          <img alt="Doggo" src="/images/dog.jpg" />
        </Avatar>
      </Box>
      <Box mr={2}>
        <Avatar {...args} backgroundColor="secondary400" />
      </Box>
      <Box>
        <Avatar {...args} icon="user" />
      </Box>
    </Flex>
  );
}

export function Sizes(args: AvatarProps): JSX.Element {
  return (
    <Flex alignItems="center">
      {sizes.map((size, i) => (
        <Box key={i} ml={i && 2}>
          <Avatar {...args} size={size}>
            <img alt="Doggo" src="/images/dog.jpg" />
          </Avatar>
        </Box>
      ))}
    </Flex>
  );
}

export function Rounded(args: AvatarProps): JSX.Element {
  return (
    <Avatar {...args} rounded>
      <img alt="Doggo" src="/images/dog.jpg" />
    </Avatar>
  );
}
