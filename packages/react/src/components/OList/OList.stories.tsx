import { Meta, StoryFn } from '@storybook/react';

import { Box } from '../Box';
import { ListItem } from '../ListItem';

import OList, { OListProps } from './OList';

const meta: Meta = {
  title: 'typography/OList',
  component: OList,
};

export const Basic: StoryFn<OListProps> = (args) => (
  <Box minWidth={[0, 96]}>
    <OList {...args}>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </OList>
  </Box>
);

export default meta;
