import React from 'react';
import { Space } from '@seed-ui/layout';
import { Icon } from '@seed-ui/icons';

import Avatar, { AvatarProps, AvatarShape, AvatarSize } from './Avatar';
import docs from './Avatar.docs.mdx';

const sizes: AvatarSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

const shapes: AvatarShape[] = ['circle', 'square'];

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: {
    docs: { page: docs },
  },
  argTypes: {
    shape: {
      control: 'select',
      defaultValue: 'circle',
      table: {
        type: {
          summary: shapes.join(' | '),
        },
        defaultValue: { summary: 'rectangle' },
      },
    },
    placeholder: {
      control: 'text',
      defaultValue: 'Peter Parker',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    size: {
      control: 'select',
      defaultValue: 'md',
      table: {
        type: {
          summary: sizes.join(' | '),
        },
        defaultValue: { summary: 'md' },
      },
    },

    children: {
      table: {
        type: {
          summary: 'ReactElement',
        },
      },
    },
  },
};

export function Base(args: AvatarProps): JSX.Element {
  return (
    <Space gutter={1}>
      <Avatar {...args}>
        <img alt="Doggo" src="/images/dog.jpg" />
      </Avatar>

      <Avatar {...args} backgroundColor="accent500" />

      <Avatar {...args} icon={<Icon name="user" />} />
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

export function Shapes(args: AvatarProps): JSX.Element {
  return (
    <Space alignItems="center" gutter={1}>
      {shapes.map((shape) => (
        <Avatar key={shape} {...args} shape={shape}>
          <img alt="Doggo" src="/images/dog.jpg" />
        </Avatar>
      ))}
    </Space>
  );
}
