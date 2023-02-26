import { Box, Flex } from '@seed-ui/flexbox';

import Avatar, { AvatarProps, AvatarSize } from './Avatar';
import docs from './Avatar.docs.mdx';

const sizes: AvatarSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    placeholder: {
      defaultValue: 'Peter Griffin',
    },
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
        <Avatar {...args} backgroundColor="primary500" />
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
