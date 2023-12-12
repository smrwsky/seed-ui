import { atoms } from '@seed-ui/styles';
import { StoryFn } from '@storybook/react';
import { capitalize } from 'lodash';
import { Fragment } from 'react';

import { Icon } from '../Icon';
import { Text } from '../Text';

import MenuBar, { MenuBarProps } from './MenuBar';
import { Divider } from '../Divider';

const variants: MenuBarProps['variant'][] = ['primary', 'secondary', 'dark'];

const sizes: MenuBarProps['size'][] = ['sm', 'md', 'lg'];

export default {
  title: 'Navigation/MenuBar',
  component: MenuBar,
  args: {
    variant: 'primary',
  },
};

const Template: StoryFn<MenuBarProps> = (args) => (
  <>
    <MenuBar
      {...args}
      className={atoms({
        width: { mobile: 'full', mobileLg: '1/2', desktop: '1/3' },
      })}
    >
      <MenuBar.Item
        endIcon={
          <Icon
            color={args.variant === 'dark' ? 'white' : 'accent400'}
            fontSize="lg"
            name="crown"
            type="solid"
          />
        }
        selected
        startIcon={<Icon name="home" />}
      >
        Option 1
      </MenuBar.Item>

      <MenuBar.Item startIcon={<Icon name="envelope" />}>Option 2</MenuBar.Item>

      <MenuBar.Item disabled startIcon={<Icon name="grid-alt" />}>
        Option 3
      </MenuBar.Item>

      <MenuBar.Submenu icon={<Icon name="stats" />} label="Option 4">
        <MenuBar.Item>Option 4-1</MenuBar.Item>
        <MenuBar.Item>Option 4-2</MenuBar.Item>
        <MenuBar.Item>Option 4-3</MenuBar.Item>
      </MenuBar.Submenu>

      <MenuBar.Submenu icon={<Icon name="cog" />} label="Option 5">
        <MenuBar.Item>Option 5-1</MenuBar.Item>
        <MenuBar.Item>Option 5-2</MenuBar.Item>

        <MenuBar.Submenu label="Option 5-3">
          <MenuBar.Item>Option 5-3-1</MenuBar.Item>
          <MenuBar.Item>Option 5-3-2</MenuBar.Item>
          <MenuBar.Item>Option 5-3-3</MenuBar.Item>
        </MenuBar.Submenu>
      </MenuBar.Submenu>

      <MenuBar.Item startIcon={<Icon name="support" />}>Option 6</MenuBar.Item>
    </MenuBar>
    <Divider color="neutral200" />
  </>
);

export const Basic: StoryFn<MenuBarProps> = Template.bind({});

export const Size: StoryFn<MenuBarProps> = (args) => (
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

export const Variant: StoryFn<MenuBarProps> = (args) => (
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

Collapsed.args = {
  collapsed: true,
};
