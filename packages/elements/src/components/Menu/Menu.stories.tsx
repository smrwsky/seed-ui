import React, { Fragment, useCallback, useState } from 'react';
import { atoms } from '@seed-ui/styles';
import { capitalize } from 'lodash';
import { Icon } from '@seed-ui/icons';

import Title from '../Title';
import IconButton from '../IconButton';

import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
import Menu, { MenuProps } from './Menu';
import docs from './Menu.docs.mdx';
import PopupMenu from './PopupMenu';

const types: MenuProps['type'][] = ['horizontal', 'inline', 'vertical'];

const variants: MenuProps['variant'][] = ['primary', 'secondary', 'alt'];

const sizes: MenuProps['size'][] = ['sm', 'md'];

export default {
  title: 'Navigation/Menu',
  component: Menu,
  parameters: {
    docs: { page: docs },
  },
};

export function Base(args: MenuProps): JSX.Element {
  const renderAction = useCallback(
    () => <Icon name="crown" size="sm" type="solid" variant="primary" />,
    [],
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
        <MenuItem ActionComponent={renderAction} icon="home" selected>
          Option 1
        </MenuItem>

        <MenuItem icon="envelope">Option 2</MenuItem>

        <MenuItem description="Description" icon="grid-alt">
          Option 3
        </MenuItem>

        <SubMenu icon="stats" label="Option 4">
          <MenuItem>Option 4-1</MenuItem>
          <MenuItem>Option 4-2</MenuItem>
          <MenuItem>Option 4-3</MenuItem>
        </SubMenu>

        <SubMenu icon="cog" label="Option 5">
          <MenuItem>Option 5-1</MenuItem>
          <MenuItem>Option 5-2</MenuItem>

          <SubMenu label="Option 5-3">
            <MenuItem>Option 5-3-1</MenuItem>
            <MenuItem>Option 5-3-2</MenuItem>
            <MenuItem>Option 5-3-3</MenuItem>
          </SubMenu>
        </SubMenu>
      </Menu>
    </div>
  );
}

export function Type(args: MenuProps): JSX.Element {
  return (
    <>
      {types.map((type, i) => (
        <Fragment key={i}>
          <Title className={atoms({ mt: i > 0 ? 4 : 0, mb: 1.5 })} size="xs">
            {capitalize(type)}
          </Title>

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
          <Title className={atoms({ mt: i > 0 ? 4 : 0, mb: 1.5 })} size="xs">
            {capitalize(size)}
          </Title>

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
          <Title className={atoms({ mt: i > 0 ? 4 : 0, mb: 1.5 })} size="xs">
            {capitalize(variant)}
          </Title>

          <Base {...args} key={i} variant={variant} />
        </Fragment>
      ))}
    </>
  );
}

export function StandalonePopupMenu(): JSX.Element {
  const [buttonElement, setButtonElement] = useState<HTMLElement | null>(null);

  const renderAction = useCallback(
    () => <Icon name="crown" size="sm" type="solid" variant="primary" />,
    [],
  );

  return (
    <div
      style={{
        minWidth: '100%',
        minHeight: '50vh',
      }}
    >
      <IconButton ref={setButtonElement} title="Show menu" variant="default">
        <Icon name="dots-vertical-rounded" />
      </IconButton>

      <PopupMenu anchorElement={buttonElement}>
        <MenuItem ActionComponent={renderAction} icon="home">
          Option 1
        </MenuItem>

        <MenuItem icon="envelope">Option 2</MenuItem>

        <MenuItem description="Description" icon="grid-alt">
          Option 3
        </MenuItem>

        <SubMenu icon="stats" label="Option 4">
          <MenuItem>Option 4-1</MenuItem>
          <MenuItem>Option 4-2</MenuItem>
          <MenuItem>Option 4-3</MenuItem>
        </SubMenu>

        <SubMenu icon="cog" label="Option 5">
          <MenuItem>Option 5-1</MenuItem>
          <MenuItem>Option 5-2</MenuItem>

          <SubMenu label="Option 5-3">
            <MenuItem>Option 5-3-1</MenuItem>
            <MenuItem>Option 5-3-2</MenuItem>
            <MenuItem>Option 5-3-3</MenuItem>
          </SubMenu>
        </SubMenu>
      </PopupMenu>
    </div>
  );
}
