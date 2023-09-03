import { Meta, StoryFn } from '@storybook/react';

import { ListItem } from '../ListItem';

import OList, { OListProps } from './OList';

const meta: Meta = {
  title: 'typography/OList',
  component: OList,
};

export const Basic: StoryFn<OListProps> = (args) => (
  <OList {...args}>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </OList>
);

export default meta;
