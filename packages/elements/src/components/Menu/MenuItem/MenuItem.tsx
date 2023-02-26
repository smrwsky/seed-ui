import { FC, memo } from 'react';

import { MenuLink, MenuLinkProps } from '../MenuLink';
import { MenuListItem } from '../MenuListItem';

export type MenuItemProps = MenuLinkProps;

const MenuItem: FC<MenuItemProps> = ({ children, ...props }) => (
  <MenuListItem>
    <MenuLink {...props}>{children}</MenuLink>
  </MenuListItem>
);

MenuItem.displayName = 'MenuItem';

export default memo(MenuItem);
