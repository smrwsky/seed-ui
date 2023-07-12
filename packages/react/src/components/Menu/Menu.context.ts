import { createContext } from 'react';

import { MenuSize, MenuType, MenuVariant } from './Menu.types';

export type MenuContextType = {
  collapsed: boolean;
  indent: number;
  size: MenuSize;
  type: MenuType;
  variant: MenuVariant;
};

export const MenuContext = createContext<MenuContextType>({
  collapsed: false,
  indent: 0,
  size: 'md',
  type: 'vertical',
  variant: 'secondary',
});
