import React from 'react';
import cn from 'classnames';

import * as S from './MenuItem.css';

export type MenuItemProps = React.LiHTMLAttributes<HTMLLIElement> & {
  active?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
  index?: number;
  invalid?: boolean;
  selected?: boolean;
};

function MenuItem({
  active,
  children,
  disabled,
  index,
  invalid,
  role = 'menuitem',
  selected,
  tabIndex = 0,
  className,
  ...elemProps
}: MenuItemProps): JSX.Element {
  return (
    <li
      aria-disabled={disabled}
      aria-invalid={invalid}
      aria-selected={selected}
      className={cn(S.root, active && S.rootActive)}
      role={role}
      tabIndex={tabIndex}
      {...elemProps}
    >
      {children}
    </li>
  );
}

export default MenuItem;
