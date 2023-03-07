import cx from 'classnames';
import { forwardRef, LiHTMLAttributes, useContext } from 'react';

import { MenuContext } from '../context';

import * as S from './MenuListItem.css';

export type MenuListItemProps = LiHTMLAttributes<HTMLLIElement>;

const MenuListItem = forwardRef<HTMLLIElement, MenuListItemProps>(
  ({ children, className, role = 'none', ...props }, ref) => {
    const { collapsed } = useContext(MenuContext);

    return (
      <li
        className={cx(S.root, collapsed && S.rootCollapsed, className)}
        ref={ref}
        role={role}
        {...props}
      >
        {children}
      </li>
    );
  },
);

MenuListItem.displayName = 'MenuListItem';

export default MenuListItem;
