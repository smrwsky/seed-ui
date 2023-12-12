import { atoms } from '@seed-ui/styles';
import { StoryFn } from '@storybook/react';
import { capitalize } from 'lodash';
import React, { Fragment, useCallback, useState } from 'react';

import { Icon } from '../Icon';
import { Text } from '../Text';

import Menu, { MenuProps } from './Menu';
import { IconButton } from '../IconButton';

const variants: MenuProps['variant'][] = ['primary', 'secondary', 'dark'];

const sizes: MenuProps['size'][] = ['sm', 'md', 'lg'];

export default {
  title: 'Navigation/Menu',
  component: Menu,
  args: {
    variant: 'primary',
  },
};

const Template: StoryFn<MenuProps> = (args) => (
  <Menu
    {...args}
    className={atoms({
      width: { mobile: 'full', mobileLg: '1/2', desktop: '1/3' },
    })}
  >
    <Menu.Item
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
    </Menu.Item>

    <Menu.Item startIcon={<Icon name="envelope" />}>Option 2</Menu.Item>

    <Menu.Item disabled startIcon={<Icon name="grid-alt" />}>
      Option 3
    </Menu.Item>

    <Menu.Submenu icon={<Icon name="stats" />} label="Option 4">
      <Menu.Item>Option 4-1</Menu.Item>
      <Menu.Item>Option 4-2</Menu.Item>
      <Menu.Item>Option 4-3</Menu.Item>
    </Menu.Submenu>

    <Menu.Submenu icon={<Icon name="cog" />} label="Option 5">
      <Menu.Item>Option 5-1</Menu.Item>
      <Menu.Item>Option 5-2</Menu.Item>

      <Menu.Submenu label="Option 5-3">
        <Menu.Item>Option 5-3-1</Menu.Item>
        <Menu.Item>Option 5-3-2</Menu.Item>
        <Menu.Item>Option 5-3-3</Menu.Item>
      </Menu.Submenu>
    </Menu.Submenu>

    <Menu.Item startIcon={<Icon name="support" />}>Option 6</Menu.Item>
  </Menu>
);

export const Basic: StoryFn<MenuProps> = Template.bind({});

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

export const Collapsed: StoryFn<MenuProps> = (args) => {
  const [collapsed, setCollapsed] = useState(true);

  const onCollapsedChange = useCallback((collapsed: boolean) => {
    setCollapsed(collapsed);
  }, []);

  return (
    <>
      <IconButton
        className={atoms({
          m: 1,
        })}
        onClick={() => setCollapsed(!collapsed)}
      >
        <Icon name={collapsed ? 'right-indent' : 'left-indent'} />
      </IconButton>

      <Template
        {...args}
        collapsed={collapsed}
        onCollapsedChange={onCollapsedChange}
      />
    </>
  );
};
