import { atoms } from '@seed-ui/styles';
import { StoryFn } from '@storybook/react';
import { capitalize } from 'lodash';
import { Fragment } from 'react';

import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { Text } from '../Text';

import { DropdownMenu, DropdownMenuProps } from './DropdownMenu';
import Menu, { MenuProps } from './Menu';
import { MenuItem } from './MenuItem';
import { Submenu } from './Submenu';

const types: MenuProps['type'][] = ['horizontal', 'inline', 'vertical'];

const variants: MenuProps['variant'][] = ['primary', 'secondary', 'dark'];

const sizes: MenuProps['size'][] = ['sm', 'md', 'lg'];

export default {
  title: 'Navigation/Menu',
  component: Menu,
};

const Template: StoryFn<MenuProps> = (args) => (
  <Menu
    {...args}
    className={atoms({
      width:
        args.type === 'horizontal'
          ? 'full'
          : { mobile: 'full', mobileLg: '1/2', desktop: '1/3' },
    })}
  >
    <MenuItem
      endIcon={
        <Icon
          color={args.variant === 'dark' ? 'white' : 'accent500'}
          fontSize="lg"
          name="crown"
          type="solid"
        />
      }
      selected
      startIcon={<Icon name="home" />}
    >
      Option 1
    </MenuItem>

    <MenuItem startIcon={<Icon name="envelope" />}>Option 2</MenuItem>

    <MenuItem disabled startIcon={<Icon name="grid-alt" />}>
      Option 3
    </MenuItem>

    <Submenu icon={<Icon name="stats" />} label="Option 4">
      <MenuItem>Option 4-1</MenuItem>
      <MenuItem>Option 4-2</MenuItem>
      <MenuItem>Option 4-3</MenuItem>
    </Submenu>

    <Submenu icon={<Icon name="cog" />} label="Option 5">
      <MenuItem>Option 5-1</MenuItem>
      <MenuItem>Option 5-2</MenuItem>

      <Submenu label="Option 5-3">
        <MenuItem>Option 5-3-1</MenuItem>
        <MenuItem>Option 5-3-2</MenuItem>
        <MenuItem>Option 5-3-3</MenuItem>
      </Submenu>
    </Submenu>

    <MenuItem startIcon={<Icon name="support" />}>Option 6</MenuItem>
  </Menu>
);

export const Basic: StoryFn<MenuProps> = Template.bind({});

export const Type: StoryFn<MenuProps> = (args) => (
  <>
    {types.map((type, i) => (
      <Fragment key={i}>
        <Text
          as="h3"
          className={atoms({ mt: i > 0 ? 4 : 0, mb: 1.5 })}
          fontFamily="secondary"
          fontSize="2xl"
          fontWeight="semiBold"
          letterSpacing="wide"
          lineHeight="tight"
        >
          {capitalize(type)}
        </Text>

        <Template {...args} key={i} type={type} />
      </Fragment>
    ))}
  </>
);

export const Size: StoryFn<MenuProps> = (args) => (
  <>
    {sizes.map((size, i) => (
      <Fragment key={i}>
        <Text
          as="h3"
          className={atoms({ mt: i > 0 ? 4 : 0, mb: 1.5 })}
          fontFamily="secondary"
          fontSize="2xl"
          fontWeight="semiBold"
          letterSpacing="wide"
          lineHeight="tight"
        >
          {capitalize(size)}
        </Text>

        <Template {...args} key={i} size={size} />
      </Fragment>
    ))}
  </>
);

export const Variant: StoryFn<MenuProps> = (args) => (
  <>
    {variants.map((variant, i) => (
      <Fragment key={i}>
        <Text
          as="h3"
          className={atoms({ mt: i > 0 ? 4 : 0, mb: 1.5 })}
          fontFamily="secondary"
          fontSize="2xl"
          fontWeight="semiBold"
          letterSpacing="wide"
          lineHeight="tight"
        >
          {capitalize(variant)}
        </Text>

        <Template {...args} key={i} variant={variant} />
      </Fragment>
    ))}
  </>
);

export const Collapsed = Template.bind({});

export const Dropdown: StoryFn<DropdownMenuProps> = (args) => (
  <DropdownMenu {...args}>
    <DropdownMenu.Trigger>
      <IconButton>
        <Icon name="dots-vertical-rounded" />
      </IconButton>
    </DropdownMenu.Trigger>

    <DropdownMenu.Items>
      <MenuItem>Option 1</MenuItem>

      <MenuItem>Option 2</MenuItem>

      <MenuItem disabled>Option 3</MenuItem>

      <Submenu label="Option 4">
        <MenuItem>Option 4-1</MenuItem>
        <MenuItem>Option 4-2</MenuItem>
        <MenuItem>Option 4-3</MenuItem>
      </Submenu>

      <Submenu label="Option 5">
        <MenuItem>Option 5-1</MenuItem>
        <MenuItem>Option 5-2</MenuItem>

        <Submenu label="Option 5-3">
          <MenuItem>Option 5-3-1</MenuItem>
          <MenuItem>Option 5-3-2</MenuItem>
          <MenuItem>Option 5-3-3</MenuItem>
        </Submenu>
      </Submenu>

      <MenuItem>Option 6</MenuItem>
    </DropdownMenu.Items>
  </DropdownMenu>
);

Collapsed.args = {
  collapsed: true,
  type: 'horizontal',
};
