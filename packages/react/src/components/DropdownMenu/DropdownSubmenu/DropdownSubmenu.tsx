'use client';

import {
  autoUpdate,
  FloatingNode,
  flip,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFloatingNodeId,
  useFloatingParentNodeId,
  useFloatingTree,
  useHover,
  useInteractions,
  useListItem,
  useListNavigation,
  useRole,
  useTypeahead,
  useMergeRefs,
} from '@floating-ui/react';
import { Icon } from '../../Icon';
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import {
  DropdownMenuContext,
  DropdownMenuContextType,
} from '../DropdownMenu.context';
import { DropdownMenuButton } from '../DropdownMenuButton';
import { DropdownMenuContent } from '../DropdownMenuContent';

export interface DropdownSubmenuProps {
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactElement;
  initialOpen?: boolean;
  label: string;
  selected?: boolean;
}

const DropdownSubmenu: React.FC<DropdownSubmenuProps> = ({
  icon,
  initialOpen = false,
  label,
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [hasFocusInside, setHasFocusInside] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const elementsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const labelsRef = useRef<Array<string>>([]);
  const parent = useContext(DropdownMenuContext);
  const tree = useFloatingTree();
  const nodeId = useFloatingNodeId();
  const parentId = useFloatingParentNodeId();
  const item = useListItem();

  const { floatingStyles, refs, context } = useFloating<HTMLButtonElement>({
    nodeId,
    open: isOpen,
    strategy: 'fixed',
    onOpenChange: setIsOpen,
    placement: 'right-start',
    middleware: [
      offset({
        mainAxis: 8,
        alignmentAxis: -5,
      }),
      flip(),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
  });

  const buttonRef = useMergeRefs([refs.setReference, item.ref]);
  const role = useRole(context, { role: 'menu' });

  const hover = useHover(context, {
    handleClose: safePolygon({ blockPointerEvents: true }),
  });

  const click = useClick(context, {
    event: 'mousedown',
    toggle: false,
    ignoreMouse: true,
    keyboardHandlers: true,
  });

  const dismiss = useDismiss(context);

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
    [hover, click, role, dismiss, listNavigation, typeahead],
  );

  const menuCtx = useMemo<DropdownMenuContextType>(
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
      isOpen,
      labelsRef,
      refs,
      setActiveIndex,
      setHasFocusInside,
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

  const handleFocus = useCallback(() => {
    setHasFocusInside(false);
    parent.setHasFocusInside(true);
  }, [parent]);

  useEffect(() => {
    if (!tree) {
      return;
    }

    function handleTreeClick() {
      setIsOpen(false);
    }

    function handleSubMenuOpen(event: { nodeId: string; parentId: string }) {
      if (event.nodeId !== nodeId && event.parentId === parentId) {
        setIsOpen(false);
      }
    }

    tree.events.on('click', handleTreeClick);
    tree.events.on('menuopen', handleSubMenuOpen);

    return () => {
      tree.events.off('click', handleTreeClick);
      tree.events.off('menuopen', handleSubMenuOpen);
    };
  }, [tree, nodeId, parentId]);

  useEffect(() => {
    if (isOpen && tree) {
      tree.events.emit('menuopen', { parentId, nodeId });
    }
  }, [tree, isOpen, nodeId, parentId]);

  const isActive = parent.activeIndex === item.index;

  return (
    <FloatingNode id={nodeId}>
      <DropdownMenuButton
        {...props}
        ref={buttonRef}
        endIcon={<Icon name="chevron-right" />}
        role="menuitem"
        startIcon={icon}
        tabIndex={isActive ? 0 : -1}
        {...getReferenceProps(
          parent.getItemProps({
            onFocus: handleFocus,
          }),
        )}
      >
        {label}
      </DropdownMenuButton>

      <DropdownMenuContext.Provider value={menuCtx}>
        <DropdownMenuContent initialFocus={-1}>{children}</DropdownMenuContent>
      </DropdownMenuContext.Provider>
    </FloatingNode>
  );
};

DropdownSubmenu.displayName = 'DropdownSubmenu';

export default DropdownSubmenu;
