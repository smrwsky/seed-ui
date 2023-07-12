import { forwardRef, memo } from 'react';

import { MenuLink, MenuLinkProps } from '../MenuLink';
import { MenuListItem } from '../MenuListItem';

export type MenuItemProps = MenuLinkProps;

let MenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>(
  ({ children, ...props }, ref) => (
    <MenuListItem>
      <MenuLink ref={ref} {...props}>
        {children}
      </MenuLink>
    </MenuListItem>
  ),
);

MenuItem.displayName = 'MenuItem';

MenuItem = memo(MenuItem);

export { MenuItem };
