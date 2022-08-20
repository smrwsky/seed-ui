import React from 'react';
import cn from 'classnames';

import * as S from './MenuList.css';
import MenuListItem from './MenuListItem';
import MenuListContext, {
  MenuListDirection,
  MenuListSize,
  MenuListVariant,
} from './context';
import MenuListLink from './MenuListLink';

export interface MenuListProps
  extends React.HTMLAttributes<HTMLUListElement>,
    React.RefAttributes<HTMLUListElement> {
  action?: React.ReactNode;
  active?: boolean;
  collapsed?: boolean;
  direction?: MenuListDirection;
  size?: MenuListSize;
  variant?: MenuListVariant;
}

const MenuList: React.FC<MenuListProps> = React.forwardRef(
  (
    {
      children,
      className,
      collapsed = false,
      direction = 'vertical',
      role = 'menu',
      size = 'md',
      tabIndex = -1,
      variant = 'primary',
      ...elemProps
    },
    ref,
  ) => {
    const context = React.useMemo(
      () => ({ collapsed, direction, size, variant }),
      [collapsed, size, variant],
    );

    return (
      <MenuListContext.Provider value={context}>
        <ul
          className={cn(S.root, S.rootVariant[variant], className)}
          ref={ref}
          role={role}
          tabIndex={tabIndex}
          {...elemProps}
        >
          {children}
        </ul>
      </MenuListContext.Provider>
    );
  },
);

MenuList.displayName = 'MenuList';

export default Object.assign(MenuList, {
  Label: MenuListLink,
  Item: MenuListItem,
});
