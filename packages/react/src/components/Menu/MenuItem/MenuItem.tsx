'use client';

import React, { memo, useCallback, useContext, useRef } from 'react';

import { MenuContext } from '../Menu.context';
import { MenuButton } from '../MenuButton';

export interface MenuItemProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'children' | 'type'
  > {
  disabled?: boolean;
  index?: number;
  selected?: boolean;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  children: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  disabled,
  index,
  onFocus,
  children,
  ...props
}) => {
  const { activeIndex, updateActiveIndex } = useContext(MenuContext);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const isActive = index === activeIndex;

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLButtonElement>) => {
      updateActiveIndex(index);
      onFocus?.(e);
    },
    [index, onFocus, updateActiveIndex],
  );

  return (
    <MenuButton
      {...props}
      ref={buttonRef}
      disabled={disabled}
      tabIndex={isActive ? 0 : -1}
      onFocus={handleFocus}
    >
      {children}
    </MenuButton>
  );
};

MenuItem.displayName = 'MenuItem';

export default memo(MenuItem);
