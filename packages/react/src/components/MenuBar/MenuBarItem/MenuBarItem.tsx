'use client';

import { useFloatingTree, useListItem } from '@floating-ui/react';
import React, { memo, useCallback, useContext } from 'react';

import { MenuBarContext } from '../MenuBar.context';
import { MenuBarButton } from '../MenuBarButton';

export interface MenuBarItemProps
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

const MenuBarItem: React.FC<MenuBarItemProps> = ({
  children,
  disabled,
  onClick,
  onFocus,
  ...props
}) => {
  const { activeIndex, getItemProps, setHasFocusInside } =
    useContext(MenuBarContext);

  const item = useListItem({ label: disabled ? null : children });
  const tree = useFloatingTree();
  const isActive = item.index === activeIndex;

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      tree?.events.emit('click');
      onClick?.(e);
    },
    [onClick, tree?.events],
  );

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLButtonElement>) => {
      setHasFocusInside(true);
      onFocus?.(e);
    },
    [onFocus, setHasFocusInside],
  );

  return (
    <MenuBarButton
      {...props}
      ref={item.ref}
      tabIndex={isActive ? 0 : -1}
      {...getItemProps({
        disabled,
        onClick: handleClick,
        onFocus: handleFocus,
      })}
    >
      {children}
    </MenuBarButton>
  );
};

MenuBarItem.displayName = 'MenuItem';

export default memo(MenuBarItem);
