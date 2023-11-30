'use client';

import {
  autoUpdate,
  FloatingTree,
  flip,
  offset as offsetFn,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  useTypeahead,
  Placement,
  useFloatingTree,
} from '@floating-ui/react';
import React, { useEffect, useMemo, useRef, useState } from 'react';

import { DropdownMenuTrigger } from '../DropdownMenuTrigger';
import { MenuContext, MenuContextType } from '../Menu.context';
import { MenuItems } from '../MenuItems';

type DropdownMenuPlacement = Placement;

type DropdownMenuStrategy = 'fixed' | 'absolute';

interface DropdownMenuOffsetOptions {
  mainAxis?: number;
  crossAxis?: number;
  alignmentAxis?: number | null;
}

export interface DropdownMenuProps {
  children?: React.ReactNode;
  offset?: number | DropdownMenuOffsetOptions;
  placement?: DropdownMenuPlacement;
  strategy?: DropdownMenuStrategy;
}

const DropdownMenuBase: React.FC<DropdownMenuProps> = ({
  children,
  offset = 4,
  placement = 'bottom-start',
  strategy = 'fixed',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasFocusInside, setHasFocusInside] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const elementsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const labelsRef = useRef<Array<string>>([]);
  const tree = useFloatingTree();

  const { floatingStyles, refs, context } = useFloating<HTMLButtonElement>({
    open: isOpen,
    strategy,
    onOpenChange: setIsOpen,
    placement,
    middleware: [offsetFn(offset), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const role = useRole(context, { role: 'menu' });

  const click = useClick(context, {
    event: 'mousedown',
    toggle: true,
    ignoreMouse: false,
  });

  const dismiss = useDismiss(context, {
    bubbles: true,
  });

  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    nested: true,
    loop: true,
    focusItemOnHover: hasFocusInside,
    orientation: 'vertical',
    onNavigate: setActiveIndex,
  });

  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    onMatch: setActiveIndex,
    activeIndex,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [click, role, dismiss, listNavigation, typeahead],
  );

  const menuCtx = useMemo<MenuContextType>(
    () => ({
      activeIndex,
      collapsed: false,
      context,
      elementsRef,
      floatingStyles,
      getFloatingProps,
      getItemProps,
      getReferenceProps,
      hasFocusInside,
      indent: 0,
      isOpen,
      labelsRef,
      refs,
      setActiveIndex,
      setHasFocusInside,
      size: 'sm',
      type: 'vertical',
      variant: 'secondary',
    }),
    [
      activeIndex,
      context,
      floatingStyles,
      getFloatingProps,
      getItemProps,
      getReferenceProps,
      hasFocusInside,
      isOpen,
      refs,
    ],
  );

  useEffect(() => {
    if (!tree) return;

    function handleTreeClick() {
      setIsOpen(false);
    }

    tree.events.on('click', handleTreeClick);

    return () => {
      tree.events.off('click', handleTreeClick);
    };
  }, [tree]);

  return (
    <MenuContext.Provider value={menuCtx}>{children}</MenuContext.Provider>
  );
};

const DropdownMenu: React.FC<DropdownMenuProps> = (props) => (
  <FloatingTree>
    <DropdownMenuBase {...props} />
  </FloatingTree>
);

DropdownMenu.displayName = 'DropdownMenu';

export default Object.assign(DropdownMenu, {
  Trigger: DropdownMenuTrigger,
  Items: MenuItems,
});
