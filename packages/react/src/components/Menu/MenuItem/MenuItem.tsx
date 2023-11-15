'use client';

import { useFloatingTree, useListItem } from '@floating-ui/react';
import React, { memo, useCallback, useContext } from 'react';

import { MenuContext } from '../Menu.context';
import { MenuButton } from '../MenuButton';

export interface MenuItemProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'children' | 'type'
  > {
  disabled?: boolean;
  selected?: boolean;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  children: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  disabled,
  onClick,
  onFocus,
  ...props
}) => {
  const {
    activeIndex,
    collapsed,
    getItemProps,
    indent,
    size,
    setHasFocusInside,
    type,
    variant,
  } = useContext(MenuContext);

  const item = useListItem({ label: disabled ? null : children });
  const tree = useFloatingTree();
  const isActive = item.index === activeIndex;

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      tree?.events.emit('click');
    },
    [onClick, tree?.events],
  );

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLButtonElement>) => {
      onFocus?.(e);
      setHasFocusInside(true);
    },
    [onFocus, setHasFocusInside],
  );

  return (
    <MenuButton
      {...props}
      active={isActive}
      collapsed={collapsed}
      indent={indent}
      ref={item.ref}
      size={size}
      tabIndex={isActive ? 0 : -1}
      type={type}
      variant={variant}
      {...getItemProps({
        disabled,
        onClick: handleClick,
        onFocus: handleFocus,
      })}
    >
      {children}
    </MenuButton>
  );
};

MenuItem.displayName = 'MenuItem';

export default memo(MenuItem);
