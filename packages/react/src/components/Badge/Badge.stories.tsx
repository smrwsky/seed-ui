import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import { Avatar } from '../Avatar';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';

import { Badge, BadgeProps } from './Badge';

const meta: Meta = {
  title: 'Data Display/Badge',
  component: Badge,
  args: {
    content: 5,
    children: (
      <IconButton title="Notifications" variant="outline">
        <Icon name="bell" />
      </IconButton>
    ),
  },
};

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const Basic = Template.bind({});

export const BackgroundColor = Template.bind({});

BackgroundColor.args = {
  bg: 'danger400',
};

export const Dot = Template.bind({});

Dot.args = {
  dot: true,
};

export const OverflowCount = Template.bind({});

OverflowCount.args = {
  content: 1000,
  overflowCount: 999,
};

export const ZeroCount = Template.bind({});

ZeroCount.args = {
  content: 0,
  showZero: true,
};

export const Position = Template.bind({});

Position.args = {
  position: 'bottom-end',
};

export const Offset = Template.bind({});

Offset.args = {
  offsetX: -5,
  offsetY: -5,
  children: (
    <IconButton avatar size="lg" title="Profile">
      <Avatar>
        <img alt="Profile" src="https://i.pravatar.cc/300" />
      </Avatar>
    </IconButton>
  ),
};

export const CustomContent = Template.bind({});

CustomContent.args = {
  content: <Icon color="danger400" fontSize="md" name="error" />,
  children: (
    <IconButton title="Notifications">
      <Icon name="bell" />
    </IconButton>
  ),
};

export const Standalone = Template.bind({});

Standalone.args = {
  content: 42,
  children: null,
};

export default meta;
