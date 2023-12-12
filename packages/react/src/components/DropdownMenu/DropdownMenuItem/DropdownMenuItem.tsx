'use client';

import { useFloatingTree, useListItem } from '@floating-ui/react';
import React, { memo, useCallback, useContext } from 'react';

import { DropdownMenuContext } from '../DropdownMenu.context';
import { DropdownMenuButton } from '../DropdownMenuButton';

export interface DropdownMenuItemProps
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

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  children,
  disabled,
  onClick,
  onFocus,
  ...props
}) => {
  const { activeIndex, getItemProps, setHasFocusInside } =
    useContext(DropdownMenuContext);

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
    <DropdownMenuButton
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
    </DropdownMenuButton>
  );
};

DropdownMenuItem.displayName = 'DropdownMenuItem';

export default memo(DropdownMenuItem);
