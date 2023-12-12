import React, {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { MenuContext, MenuContextType } from './Menu.context';
import { MenuSize, MenuVariant } from './Menu.types';
import cn from 'classnames';
import { atoms } from '@seed-ui/styles';
import { Submenu } from './Submenu';
import { MenuItem } from './MenuItem';
import { Maybe } from '../../types';
import { getFirstItem, getLastItem } from '../../utils/list-navigation';

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean;
  size?: MenuSize;
  variant?: MenuVariant;
  onCollapsedChange?: (collapsed: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({
  collapsed = false,
  size = 'md',
  variant = 'primary',
  onCollapsedChange,
  children,
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState<Maybe<number>>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const updateActiveIndex = useCallback((index: Maybe<number>) => {
    setActiveIndex(index);
  }, []);

  const menuCxt: MenuContextType = useMemo(
    () => ({
      activeIndex,
      collapsed,
      indent: 0,
      menuRef,
      size,
      variant,
      updateActiveIndex,
      onCollapsedChange,
    }),
    [
      activeIndex,
      collapsed,
      onCollapsedChange,
      size,
      updateActiveIndex,
      variant,
    ],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        e.stopPropagation();
        const item = getLastItem(menuRef);
        item?.focus();
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        e.stopPropagation();
        const item = getFirstItem(menuRef);
        item?.focus();
      }
    },
    [menuRef],
  );

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (e.target instanceof Node && !menuRef.current?.contains(e.target)) {
        setActiveIndex(null);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <MenuContext.Provider value={menuCxt}>
      <div
        {...props}
        ref={menuRef}
        className={cn(
          atoms({
            display: 'flex',
            flexDirection: 'column',
            bg: variant === 'dark' ? 'primary700' : 'white',
            px: 0,
            py: 0.5,
          }),
        )}
        role="menu"
        tabIndex={activeIndex == null ? 0 : -1}
        onKeyDown={handleKeyDown}
      >
        {Children.map(children, (child, i) =>
          isValidElement(child) ? cloneElement(child, { index: i }) : null,
        )}
      </div>
    </MenuContext.Provider>
  );
};

Menu.displayName = 'Menu';

export default Object.assign(Menu, {
  Submenu: Submenu,
  Item: MenuItem,
});
