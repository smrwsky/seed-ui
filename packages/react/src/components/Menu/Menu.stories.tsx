import { atoms } from '@seed-ui/styles';
import { capitalize } from 'lodash';
import { Fragment, useCallback, useState } from 'react';

import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { PopupMenu } from '../PopupMenu';
import { Text } from '../Text';

import { Menu, MenuProps } from './Menu';
import { MenuItem } from './MenuItem';
import { Submenu } from './Submenu';

const types: MenuProps['type'][] = ['horizontal', 'inline', 'vertical'];

const variants: MenuProps['variant'][] = ['primary', 'secondary', 'dark'];

const sizes: MenuProps['size'][] = ['sm', 'md', 'lg'];

export default {
  title: 'Navigation/Menu',
  component: Menu,
};

export function Base(args: MenuProps): JSX.Element {
  const renderAction = useCallback(
    () => (
      <Icon
        color={args.variant === 'dark' ? 'white' : 'secondary500'}
        fontSize="lg"
        name="crown"
        type="solid"
      />
    ),
    [args.variant],
  );

  return (
    <div
      className={atoms({
        width: 'screen',
      })}
    >
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
          ActionComponent={renderAction}
          icon={<Icon name="home" />}
          selected
        >
          Option 1
        </MenuItem>

        <MenuItem icon={<Icon name="envelope" />}>Option 2</MenuItem>

        <MenuItem description="Description" icon={<Icon name="grid-alt" />}>
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

        <MenuItem icon={<Icon name="support" />}>Option 6</MenuItem>
      </Menu>
    </div>
  );
}

export function Type(args: MenuProps): JSX.Element {
  return (
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

          <Base {...args} key={i} type={type} />
        </Fragment>
      ))}
    </>
  );
}

export function Size(args: MenuProps): JSX.Element {
  return (
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

          <Base {...args} key={i} size={size} />
        </Fragment>
      ))}
    </>
  );
}

export function Variant(args: MenuProps): JSX.Element {
  return (
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

          <Base {...args} key={i} variant={variant} />
        </Fragment>
      ))}
    </>
  );
}

export function StandalonePopupMenu(): JSX.Element {
  const [buttonElement, setButtonElement] = useState<HTMLElement | null>(null);

  const renderAction = useCallback(
    () => <Icon color="secondary500" fontSize="lg" name="crown" type="solid" />,
    [],
  );

  return (
    <div
      style={{
        minWidth: '100%',
        minHeight: '50vh',
      }}
    >
      <IconButton
        ref={setButtonElement}
        size="sm"
        title="Show menu"
        variant="dark"
      >
        <Icon name="dots-vertical-rounded" />
      </IconButton>

      <PopupMenu anchorElement={buttonElement}>
        <MenuItem ActionComponent={renderAction} icon={<Icon name="home" />}>
          Option 1
        </MenuItem>

        <MenuItem icon={<Icon name="envelope" />}>Option 2</MenuItem>

        <MenuItem description="Description" icon={<Icon name="grid-alt" />}>
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
      </PopupMenu>
    </div>
  );
}
