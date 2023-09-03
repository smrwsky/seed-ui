import { Meta, StoryFn } from '@storybook/react';

import { UList } from '../UList';

import ListItem, { ListItemProps } from './ListItem';

const meta: Meta = {
  title: 'typography/ListItem',
  component: ListItem,
  args: {
    children: 'List Item',
  },
};

export const Basic: StoryFn<ListItemProps> = (args) => (
  <UList>
    <ListItem {...args} />
  </UList>
);

export default meta;
