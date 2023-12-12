import { MenuSize, MenuVariant } from './Menu.types';
import React, { createContext } from 'react';
import { Maybe } from '../../types';

export interface MenuContextType {
  activeIndex: Maybe<number>;
  collapsed: boolean;
  indent: number;
  menuRef: React.RefObject<HTMLElement>;
  size: MenuSize;
  variant: MenuVariant;
  updateActiveIndex: (index: Maybe<number>) => void;
  onCollapsedChange?: (collapsed: boolean) => void;
}

export const MenuContext = createContext<MenuContextType>({
  activeIndex: null,
  collapsed: false,
  indent: 0,
  menuRef: { current: null },
  size: 'md',
  variant: 'secondary',
  updateActiveIndex: () => {
    // do nothing
  },
  onCollapsedChange: undefined,
});
