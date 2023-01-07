import React from 'react';
import { Space } from '@seed-ui/layout';

import Avatar, { AvatarProps, AvatarSize } from './Avatar';
import docs from './Avatar.docs.mdx';

const sizes: AvatarSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: {
    docs: { page: docs },
  },
};

export function Base(args: AvatarProps): JSX.Element {
  return (
    <Space gutter={1}>
      <Avatar {...args}>
        <img alt="Doggo" src="/images/dog.jpg" />
      </Avatar>

      <Avatar {...args} backgroundColor="primary500" />

      <Avatar {...args} icon="user" />
    </Space>
  );
}

export function Sizes(args: AvatarProps): JSX.Element {
  return (
    <Space alignItems="center" gutter={1}>
      {sizes.map((size) => (
        <Avatar key={size} {...args} size={size}>
          <img alt="Doggo" src="/images/dog.jpg" />
        </Avatar>
      ))}
    </Space>
  );
}

export function Rounded(args: AvatarProps): JSX.Element {
  return (
    <Avatar {...args} rounded>
      <img alt="Doggo" src="/images/dog.jpg" />
    </Avatar>
  );
}
