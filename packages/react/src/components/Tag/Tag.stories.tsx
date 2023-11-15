import { Box, Flex } from '@seed-ui/react';
import { toUpper } from 'lodash';

import Tag, { TagProps, TagSize } from './Tag';

const sizes: TagSize[] = ['sm', 'md'];

export default {
  title: 'Data Display/Tag',
  component: Tag,

  args: {
    children: 'Tag title',
  },
};

export function Basic(args: TagProps) {
  return <Tag {...args} />;
}

export function Sizes(args: TagProps) {
  return (
    <Flex alignItems="center" flexWrap="wrap" mt="-2" mx="-1">
      {sizes.map((size, i) => (
        <Box key={i} mt={2} px={1}>
          <Tag {...args} size={size}>
            {toUpper(size)}
          </Tag>
        </Box>
      ))}
    </Flex>
  );
}

export function Color(args: TagProps) {
  return (
    <Flex alignItems="center" flexWrap="wrap" mt="-2" mx="-1">
      <Box mt={2} px={1}>
        <Tag {...args}>Default</Tag>
      </Box>

      <Box mt={2} px={1}>
        <Tag {...args} bg="accent100" color="accent700">
          Accent
        </Tag>
      </Box>

      <Box mt={2} px={1}>
        <Tag
          {...args}
          bg="neutral50"
          borderColor="neutral200"
          color="neutral700"
        >
          Secondary
        </Tag>
      </Box>
    </Flex>
  );
}

export function Rounded(args: TagProps) {
  return (
    <Tag {...args} rounded>
      Rounded tag
    </Tag>
  );
}

export function Clickable(args: TagProps) {
  return (
    <Tag
      {...args}
      bg={{
        default: 'primary100',
        hover: 'primary50',
        active: 'primary200',
      }}
      onClick={() => console.log('Tag clicked')}
    >
      Clickable tag
    </Tag>
  );
}

export function Removable(args: TagProps) {
  return (
    <Tag {...args} removable onClick={() => console.log('Remove')}>
      Removable tag
    </Tag>
  );
}
