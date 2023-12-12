import { StoryFn } from '@storybook/react';

import { Icon } from '../Icon';
import { IconButton } from '../IconButton';

import DropdownMenu, { DropdownMenuProps } from './DropdownMenu';

export default {
  title: 'Navigation/DropdownMenu',
  component: DropdownMenu,
  args: {
    variant: 'primary',
  },
};

export const Basic: StoryFn<DropdownMenuProps> = (args) => (
  <DropdownMenu {...args}>
    <DropdownMenu.Trigger>
      <IconButton>
        <Icon name="dots-vertical-rounded" />
      </IconButton>
    </DropdownMenu.Trigger>

    <DropdownMenu.Content>
      <DropdownMenu.Item>Option 1</DropdownMenu.Item>

      <DropdownMenu.Item>Option 2</DropdownMenu.Item>

      <DropdownMenu.Item disabled>Option 3</DropdownMenu.Item>

      <DropdownMenu.Submenu label="Option 4">
        <DropdownMenu.Item>Option 4-1</DropdownMenu.Item>
        <DropdownMenu.Item>Option 4-2</DropdownMenu.Item>
        <DropdownMenu.Item>Option 4-3</DropdownMenu.Item>
      </DropdownMenu.Submenu>

      <DropdownMenu.Submenu label="Option 5">
        <DropdownMenu.Item>Option 5-1</DropdownMenu.Item>
        <DropdownMenu.Item>Option 5-2</DropdownMenu.Item>

        <DropdownMenu.Submenu label="Option 5-3">
          <DropdownMenu.Item>Option 5-3-1</DropdownMenu.Item>
          <DropdownMenu.Item>Option 5-3-2</DropdownMenu.Item>
          <DropdownMenu.Item>Option 5-3-3</DropdownMenu.Item>
        </DropdownMenu.Submenu>
      </DropdownMenu.Submenu>

      <DropdownMenu.Item>Option 6</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu>
);
