import { Meta, StoryFn } from '@storybook/react';

import { Icon } from '../Icon';
import { ListItem } from '../ListItem';
import { Marker } from '../Marker';
import { Text } from '../Text';

import UList, { UListProps } from './UList';

const meta: Meta = {
  title: 'typography/UList',
  component: UList,
};

export const Basic: StoryFn<UListProps> = (args) => (
  <UList {...args}>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
  </UList>
);

export const Types: StoryFn<UListProps> = (args) => (
  <>
    <Text
      as="h3"
      fontSize="xl"
      fontWeight="bold"
      letterSpacing="tight"
      lineHeight="tight"
      mb={8}
    >
      Disc
    </Text>

    <UList {...args} mb={8} type="disc">
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </UList>

    <Text
      as="h3"
      fontSize="xl"
      fontWeight="bold"
      letterSpacing="tight"
      lineHeight="tight"
      mb={8}
    >
      Dash
    </Text>

    <UList {...args} mb={8} type="dash">
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </UList>

    <Text
      as="h3"
      fontSize="xl"
      fontWeight="bold"
      letterSpacing="tight"
      lineHeight="tight"
      mb={8}
    >
      None
    </Text>

    <UList {...args} type="none">
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </UList>
  </>
);

export const WithIcons: StoryFn<UListProps> = (args) => (
  <UList {...args} type="none">
    <ListItem>
      <Marker role="none">
        <Icon name="grid-alt" />
      </Marker>
      Item 1
    </ListItem>
    <ListItem>
      <Marker role="none">
        <Icon name="stats" />
      </Marker>
      Item 2
    </ListItem>
    <ListItem>
      <Marker role="none">
        <Icon name="cog" />
      </Marker>
      Item 3
    </ListItem>
  </UList>
);

export default meta;
