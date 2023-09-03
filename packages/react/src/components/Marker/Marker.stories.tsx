import { Meta, StoryFn } from '@storybook/react';

import { Icon } from '../Icon';
import { ListItem } from '../ListItem';
import { UList } from '../UList';

import Marker, { MarkerProps } from './Marker';

const meta: Meta = {
  title: 'typography/Marker',
  component: Marker,
  args: {
    children: <Icon name="check" />,
  },
};

export const Basic: StoryFn<MarkerProps> = (args) => (
  <UList>
    <ListItem>
      <Marker {...args} />
      List Item
    </ListItem>
  </UList>
);

export default meta;
