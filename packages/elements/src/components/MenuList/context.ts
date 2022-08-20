import React from 'react';

export type MenuListDirection = 'horizontal' | 'vertical';

export type MenuListSize = 'sm' | 'md';

export type MenuListVariant = 'primary' | 'secondary' | 'light' | 'dark';

export type MenuListContextType = {
  collapsed: boolean;
  direction: MenuListDirection;
  size: MenuListSize;
  variant: MenuListVariant;
};

const MenuListContext = React.createContext<MenuListContextType>({
  collapsed: false,
  direction: 'vertical',
  size: 'md',
  variant: 'light',
});

export default MenuListContext;
