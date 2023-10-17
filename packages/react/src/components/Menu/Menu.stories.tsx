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
          color={args.variant === 'dark' ? 'white' : 'secondary500'}
          fontSize="lg"
          name="crown"
          type="solid"
        />
      }
      label="Option 1"
      selected
      startIcon={<Icon name="home" />}
    />

    <MenuItem label="Option 2" startIcon={<Icon name="envelope" />} />

    <MenuItem disabled label="Option 3" startIcon={<Icon name="grid-alt" />} />

    <Submenu icon={<Icon name="stats" />} label="Option 4">
      <MenuItem label="Option 4-1" />
      <MenuItem label="Option 4-1" />
      <MenuItem label="Option 4-3" />
    </Submenu>

    <Submenu icon={<Icon name="cog" />} label="Option 5">
      <MenuItem label="Option 5-1" />
      <MenuItem label="Option 5-2" />

      <Submenu label="Option 5-3">
        <MenuItem label="Option 5-3-1" />
        <MenuItem label="Option 5-3-2" />
        <MenuItem label="Option 5-3-3" />
      </Submenu>
    </Submenu>

    <MenuItem label="Option 6" startIcon={<Icon name="support" />} />
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
      <MenuItem label="Option 1" />

      <MenuItem label="Option 2" />

      <MenuItem disabled label="Option 3" />

      <Submenu label="Option 4">
        <MenuItem label="Option 4-1" />
        <MenuItem label="Option 4-1" />
        <MenuItem label="Option 4-3" />
      </Submenu>

      <Submenu label="Option 5">
        <MenuItem label="Option 5-1" />
        <MenuItem label="Option 5-2" />

        <Submenu label="Option 5-3">
          <MenuItem label="Option 5-3-1" />
          <MenuItem label="Option 5-3-2" />
          <MenuItem label="Option 5-3-3" />
        </Submenu>
      </Submenu>

      <MenuItem label="Option 6" />
    </DropdownMenu.Items>
  </DropdownMenu>
);

Collapsed.args = {
  collapsed: true,
  type: 'horizontal',
};
