import React from 'react';

export type MenuType = 'horizontal' | 'inline' | 'vertical';

export type MenuSize = 'sm' | 'md';

export type MenuVariant = 'primary' | 'secondary' | 'light' | 'dark';

export type MenuContextType = {
  collapsed: boolean;
  indent: number;
  size: MenuSize;
  type: MenuType;
  variant: MenuVariant;
};

const MenuContext = React.createContext<MenuContextType>({
  collapsed: false,
  indent: 0,
  size: 'md',
  type: 'vertical',
  variant: 'light',
});

export default MenuContext;
