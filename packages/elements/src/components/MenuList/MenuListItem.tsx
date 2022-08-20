import React from 'react';
import cx from 'classnames';

import * as S from './MenuListItem.css';
import MenuListLink from './MenuListLink';
import MenuListContext from './context';

export interface MenuListItemProps
  extends React.LiHTMLAttributes<HTMLLIElement>,
    React.RefAttributes<HTMLLIElement> {
  action?: React.ReactNode;
  active?: boolean;
  counter?: number;
  description?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  icon?: React.ReactElement;
  indent?: number;
  invalid?: boolean;
  selected?: boolean;
}

const MenuListItem: React.FC<MenuListItemProps> = React.forwardRef(
  (
    {
      action,
      active,
      children,
      className,
      counter,
      description,
      disabled,
      href,
      icon,
      indent,
      invalid,
      role = 'none',
      selected,
      ...elemProps
    },
    ref,
  ) => {
    const { collapsed } = React.useContext(MenuListContext);

    return (
      <li
        {...elemProps}
        className={cx(S.root, collapsed && S.rootCollapsed, className)}
        ref={ref}
        role={role}
      >
        {typeof children === 'string' ? (
          <MenuListLink
            action={action}
            active={active}
            counter={counter}
            description={description}
            disabled={disabled}
            href={href}
            icon={icon}
            indent={indent}
            invalid={invalid}
            selected={selected}
          >
            {children}
          </MenuListLink>
        ) : (
          children
        )}
      </li>
    );
  },
);

MenuListItem.displayName = 'MenuListItem';

export default MenuListItem;
