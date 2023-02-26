import React from 'react';

export type MenuType = 'horizontal' | 'inline' | 'vertical';

export type MenuSize = 'sm' | 'md' | 'lg';

export type MenuVariant = 'primary' | 'secondary' | 'dark';

export type MenuContextType = {
  collapsed: boolean;
  indent: number;
  size: MenuSize;
  type: MenuType;
  variant: MenuVariant;
};

export const MenuContext = React.createContext<MenuContextType>({
  collapsed: false,
  indent: 0,
  size: 'md',
  type: 'vertical',
  variant: 'secondary',
});
