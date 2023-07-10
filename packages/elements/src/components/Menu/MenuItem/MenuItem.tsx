import { forwardRef, memo } from 'react';

import { MenuLink, MenuLinkProps } from '../MenuLink';
import { MenuListItem } from '../MenuListItem';

export type MenuItemProps = MenuLinkProps;

let MenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>(
  ({ children, ...props }) => (
    <MenuListItem>
      <MenuLink {...props}>{children}</MenuLink>
    </MenuListItem>
  ),
);

MenuItem.displayName = 'MenuItem';

MenuItem = memo(MenuItem);

export { MenuItem };
