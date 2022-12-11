import cn from 'classnames';
import React, {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  useContext,
} from 'react';

import MenuContext from '../context';

import * as S from './MenuList.css';

export interface MenuListProps extends HTMLAttributes<HTMLUListElement> {
  children?: ReactNode;
}

const MenuList = forwardRef<HTMLUListElement, MenuListProps>(
  ({ className, role = 'menu', children, ...props }, ref) => {
    const { type, variant } = useContext(MenuContext);

    return (
      <ul
        className={cn(
          S.root,
          S.rootType[type],
          S.rootVariant[variant],
          className,
        )}
        ref={ref}
        role={type === 'horizontal' ? 'menubar' : role}
        {...props}
      >
        {children}
      </ul>
    );
  },
);

MenuList.displayName = 'MenuList';

export default MenuList;
