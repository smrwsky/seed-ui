import { Atoms, atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { forwardRef, HTMLAttributes, ReactNode, useContext } from 'react';

import { MenuContext } from '../Menu.context';
import { MenuVariant } from '../Menu.types';

export interface MenuListProps extends HTMLAttributes<HTMLUListElement> {
  isSubmenu?: boolean;
  children?: ReactNode;
}

const rootVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    bg: 'white',
  },
  secondary: {
    bg: 'white',
  },
  dark: {
    bg: 'primary700',
  },
};

const rootSubmenuVariantStyle: Record<MenuVariant, Atoms> = {
  primary: {
    bg: 'neutral50',
  },
  secondary: {
    bg: 'neutral50',
  },
  dark: {
    bg: 'primary800',
  },
};

const MenuList = forwardRef<HTMLUListElement, MenuListProps>(
  ({ className, isSubmenu, children, ...props }, ref) => {
    const { type, variant } = useContext(MenuContext);

    return (
      <ul
        className={cn(
          atoms({
            display: 'flex',
          }),
          type !== 'horizontal' &&
            atoms({
              flexDirection: 'column',
              py: 0.5,
            }),
          atoms({
            ...rootVariantStyle[variant],
            ...(isSubmenu && rootSubmenuVariantStyle[variant]),
          }),
          className,
        )}
        ref={ref}
        role={type === 'horizontal' ? 'menubar' : 'menu'}
        {...props}
      >
        {children}
      </ul>
    );
  },
);

MenuList.displayName = 'MenuList';

export { MenuList };
