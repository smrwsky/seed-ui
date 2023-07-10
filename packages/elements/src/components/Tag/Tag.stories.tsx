import { Box, Flex } from '@seed-ui/elements';
import { capitalize } from 'lodash';

import Tag, { TagProps, TagSize, TagVariant } from './Tag';

const variants: TagVariant[] = [
  'primary',
  'secondary',
  'tertiary',
  'info',
  'success',
  'warning',
  'danger',
  'light',
  'outline-primary',
  'outline-secondary',
  'outline-tertiary',
  'outline-info',
  'outline-success',
  'outline-warning',
  'outline-danger',
  'outline-light',
];

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
            {capitalize(size)}
          </Tag>
        </Box>
      ))}
    </Flex>
  );
}

export function Variants(args: TagProps): JSX.Element {
  return (
    <Flex alignItems="center" flexWrap="wrap" mt="-2" mx="-1">
      {variants.map((variant, i) => (
        <Box key={i} lineHeight={0} mt={2} px={1} width="auto">
          <Tag {...args} variant={variant}>
            {capitalize(variant)}
          </Tag>
        </Box>
      ))}
    </Flex>
  );
}

export function Rounded(args: TagProps): JSX.Element {
  return (
    <Tag {...args} rounded>
      Rounded tag
    </Tag>
  );
}

export function Clickable(args: TagProps): JSX.Element {
  return (
    <Tag {...args} onClick={() => console.log('Tag clicked')}>
      Clickable tag
    </Tag>
  );
}

export function Removable(args: TagProps): JSX.Element {
  return (
    <Tag {...args} deletable onClick={() => console.log('Tag clicked')}>
      Removable tag
    </Tag>
  );
}

export function Disabled(args: TagProps): JSX.Element {
  return (
    <Tag {...args} disabled>
      Disabled tag
    </Tag>
  );
}
