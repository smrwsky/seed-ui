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

export function Base(args: TagProps): JSX.Element {
  return <Tag {...args} />;
}

export function Sizes(args: TagProps): JSX.Element {
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

export function Colors(args: TagProps): JSX.Element {
  return (
    <Flex alignItems="center" flexWrap="wrap" mt="-2" mx="-1">
      <Box mt={2} px={1}>
        <Tag {...args}>Default</Tag>
      </Box>

      <Box mt={2} px={1}>
        <Tag {...args} bg="secondary100" color="secondary700">
          Secondary
        </Tag>
      </Box>

      <Box mt={2} px={1}>
        <Tag
          {...args}
          bg="neutral50"
          borderColor="neutral200"
          color="neutral700"
        >
          Outlined
        </Tag>
      </Box>
    </Flex>
  );
}

export function Clickable(args: TagProps): JSX.Element {
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

export function Removable(args: TagProps): JSX.Element {
  return (
    <Tag {...args} removable onRemove={() => console.log('Remove clicked')}>
      Removable tag
    </Tag>
  );
}
