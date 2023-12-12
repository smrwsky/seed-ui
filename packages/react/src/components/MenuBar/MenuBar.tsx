'use client';

import {
  autoUpdate,
  FloatingList,
  FloatingTree,
  useFloating,
  useInteractions,
  useRole,
  useTypeahead,
} from '@floating-ui/react';
import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { MenuBarContext, MenuBarContextType } from './MenuBar.context';
import { MenuBarSize, MenuBarVariant } from './types';
import { MenuBarSubmenu } from './MenuBarSubmenu';
import { MenuBarItem } from './MenuBarItem';
import {
  getFirstItem,
  getLastItem,
  getNextItem,
  getPrevItem,
} from '../../utils/list-navigation';

export interface MenuBarProps extends React.HTMLAttributes<HTMLDivElement> {
  block?: boolean;
  collapsed?: boolean;
  size?: MenuBarSize;
  variant?: MenuBarVariant;
}

const MenuBar: React.FC<MenuBarProps> = ({
  block = false,
  collapsed = false,
  size = 'md',
  variant = 'primary',
  children,
  ...props
}) => {
  const [hasFocusInside, setHasFocusInside] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const elementsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const labelsRef = useRef<Array<string>>([]);

  const { refs, context, floatingStyles } = useFloating<HTMLButtonElement>({
    open: true,
    strategy: 'fixed',
    whileElementsMounted: autoUpdate,
  });

  const role = useRole(context, { role: 'menu' });

  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    onMatch: setActiveIndex,
    activeIndex,
  });

  const { getFloatingProps, getItemProps } = useInteractions([role, typeahead]);

  const handleMenuItemKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        e.stopPropagation();
        const item = getPrevItem(refs.floating, e.currentTarget);
        item?.focus();

        if (item?.getAttribute('aria-haspopup') === 'menu') {
          item.click();
        }
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        e.stopPropagation();
        const item = getNextItem(refs.floating, e.currentTarget);
        item?.focus();

        if (item?.getAttribute('aria-haspopup') === 'menu') {
          item.click();
        }
      }
    },
    [refs.floating],
  );

  const menuCtx = useMemo<MenuBarContextType>(
    () => ({
      activeIndex,
      collapsed,
      context,
      elementsRef,
      floatingStyles,
      getFloatingProps,
      getItemProps: (userProps = {}) => ({
        ...getItemProps(userProps),
        onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => {
          handleMenuItemKeyDown(e);
          userProps.onKeyDown?.(e);
        },
      }),
      hasFocusInside,
      indent: 0,
      isOpen: true,
      isNested: false,
      labelsRef,
      refs,
      setActiveIndex,
      setHasFocusInside,
      size,
      variant,
    }),
    [
      activeIndex,
      collapsed,
      context,
      floatingStyles,
      getFloatingProps,
      getItemProps,
      handleMenuItemKeyDown,
      hasFocusInside,
      refs,
      size,
      variant,
    ],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        e.stopPropagation();

        const item = getLastItem(refs.floating);

        item?.focus();

        if (item?.getAttribute('aria-haspopup') === 'menu') {
          item.click();
        }
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        e.stopPropagation();

        const item = getFirstItem(refs.floating);

        item?.focus();

        if (item?.getAttribute('aria-haspopup') === 'menu') {
          item.click();
        }
      }
    },
    [refs.floating],
  );

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (
        e.target instanceof Node &&
        !refs.floating.current?.contains(e.target)
      ) {
        setHasFocusInside(false);
        setActiveIndex(null);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [refs.floating]);

  return (
    <MenuBarContext.Provider value={menuCtx}>
      <FloatingTree>
        <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
          <div
            {...props}
            ref={refs.setFloating}
            className={cn(
              atoms({
                display: block ? 'flex' : 'inline-flex',
                bg: variant === 'dark' ? 'primary700' : 'white',
                boxShadow: {
                  focusVisible: hasFocusInside ? 'none' : 'focus',
                },
                px: 0.5,
                py: 0,
              }),
            )}
            {...getFloatingProps({
              role: 'menubar',
              tabIndex: activeIndex == null ? 0 : -1,
              onKeyDown: handleKeyDown,
            })}
          >
            {children}
          </div>
        </FloatingList>
      </FloatingTree>
    </MenuBarContext.Provider>
  );
};

MenuBar.displayName = 'MenuBar';

export default Object.assign(MenuBar, {
  Submenu: MenuBarSubmenu,
  Item: MenuBarItem,
});
