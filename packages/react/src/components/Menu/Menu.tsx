'use client';

import {
  autoUpdate,
  FloatingList,
  FloatingTree,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
} from '@floating-ui/react';
import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import { MenuContext, MenuContextType } from './Menu.context';
import { MenuSize, MenuType, MenuVariant } from './types';

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  block?: boolean;
  collapsed?: boolean;
  type?: MenuType;
  size?: MenuSize;
  variant?: MenuVariant;
}

const Menu: React.FC<MenuProps> = ({
  block = false,
  collapsed = false,
  type = 'vertical',
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
    whileElementsMounted: autoUpdate,
  });

  const role = useRole(context, { role: 'menu' });

  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    loop: true,
    focusItemOnHover: hasFocusInside,
    orientation: type === 'horizontal' ? 'horizontal' : 'vertical',
    onNavigate: setActiveIndex,
  });

  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    onMatch: setActiveIndex,
    activeIndex,
  });

  const { getFloatingProps, getItemProps, getReferenceProps } = useInteractions(
    [role, listNavigation, typeahead],
  );

  const menuCtx = useMemo<MenuContextType>(
    () => ({
      activeIndex,
      collapsed,
      context,
      elementsRef,
      floatingStyles,
      getFloatingProps,
      getItemProps,
      getReferenceProps,
      hasFocusInside,
      indent: 0,
      isOpen: true,
      labelsRef,
      refs,
      setActiveIndex,
      setHasFocusInside,
      size,
      type,
      variant,
    }),
    [
      activeIndex,
      collapsed,
      context,
      floatingStyles,
      getFloatingProps,
      getItemProps,
      getReferenceProps,
      hasFocusInside,
      refs,
      size,
      type,
      variant,
    ],
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
    <MenuContext.Provider value={menuCtx}>
      <FloatingTree>
        <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
          <div
            {...props}
            className={cn(
              atoms({
                display: block ? 'flex' : 'inline-flex',
                bg: variant === 'dark' ? 'primary700' : 'white',
                boxShadow: {
                  focusVisible: hasFocusInside ? 'none' : 'focus',
                },
              }),
              type === 'horizontal'
                ? atoms({
                    px: 0.5,
                    py: 0,
                  })
                : atoms({
                    flexDirection: 'column',
                    px: 0,
                    py: 0.5,
                  }),
            )}
            ref={refs.setFloating}
            {...getFloatingProps({
              tabIndex: activeIndex == null ? 0 : -1,
            })}
          >
            {children}
          </div>
        </FloatingList>
      </FloatingTree>
    </MenuContext.Provider>
  );
};

Menu.displayName = 'Menu';

export default Menu;
