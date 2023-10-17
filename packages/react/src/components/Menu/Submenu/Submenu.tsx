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
import {
  FC,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Icon } from '../../Icon';
import { MenuContext, MenuContextType } from '../Menu.context';
import { MenuButton } from '../MenuButton';
import { MenuItems } from '../MenuItems';

export interface SubMenuProps {
  children?: ReactNode;
  disabled?: boolean;
  icon?: ReactElement;
  label: string;
  selected?: boolean;
}

const Submenu: FC<SubMenuProps> = ({ icon, label, children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasFocusInside, setHasFocusInside] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const elementsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const labelsRef = useRef<Array<string>>([]);
  const parent = useContext(MenuContext);
  const tree = useFloatingTree();
  const nodeId = useFloatingNodeId();
  const parentId = useFloatingParentNodeId();
  const item = useListItem();

  const { floatingStyles, refs, context } = useFloating<HTMLButtonElement>({
    nodeId,
    open: isOpen,
    strategy: 'fixed',
    onOpenChange: setIsOpen,
    placement: parent.type === 'horizontal' ? 'bottom-start' : 'right-start',
    middleware: [
      offset(
        parent.type === 'horizontal'
          ? {
              mainAxis: 4,
            }
          : {
              mainAxis: 8,
              alignmentAxis: -5,
            },
      ),
      flip(),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
  });

  const buttonRef = useMergeRefs([refs.setReference, item.ref]);

  const role = useRole(context, { role: 'menu' });

  const hover = useHover(context, {
    enabled: parent.type !== 'inline',
    handleClose: safePolygon({ blockPointerEvents: true }),
  });

  const click = useClick(context, {
    event: 'mousedown',
    toggle: parent.type === 'inline',
    ignoreMouse: parent.type !== 'inline',
    keyboardHandlers: true,
  });

  const dismiss = useDismiss(context);

  const listNavigation = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    nested: true,
    loop: true,
    focusItemOnHover: hasFocusInside,
    orientation:
      parent.type === 'horizontal' && !hasFocusInside
        ? 'horizontal'
        : 'vertical',
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
      indent: parent.type === 'inline' ? parent.indent + 1 : 0,
      isOpen,
      labelsRef,
      refs,
      setActiveIndex,
      setHasFocusInside,
      size: parent.type === 'inline' ? parent.size : 'sm',
      type: parent.type === 'inline' ? 'inline' : 'vertical',
      variant: parent.variant,
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
      parent.indent,
      parent.size,
      parent.type,
      parent.variant,
      refs,
    ],
  );

  const handleFocus = useCallback(() => {
    setHasFocusInside(false);
    parent.setHasFocusInside(true);
  }, [parent]);

  useEffect(() => {
    if (!tree) return;

    function handleTreeClick() {
      setIsOpen(false);
    }

    function onSubMenuOpen(event: { nodeId: string; parentId: string }) {
      if (event.nodeId !== nodeId && event.parentId === parentId) {
        setIsOpen(false);
      }
    }

    tree.events.on('click', handleTreeClick);
    tree.events.on('menuopen', onSubMenuOpen);

    return () => {
      tree.events.off('click', handleTreeClick);
      tree.events.off('menuopen', onSubMenuOpen);
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
      <MenuButton
        {...props}
        active={isActive}
        collapsed={parent.collapsed}
        endIcon={
          parent.type === 'vertical' ? (
            <Icon name="chevron-right" />
          ) : (
            <Icon
              flip={
                parent.type === 'horizontal' || !isOpen ? 'vertical' : 'none'
              }
              name="chevron-up"
            />
          )
        }
        indent={parent.indent}
        ref={buttonRef}
        role="menuitem"
        size={parent.size}
        startIcon={icon}
        tabIndex={isActive ? 0 : -1}
        type={parent.type}
        variant={parent.variant}
        {...getReferenceProps(
          parent.getItemProps({
            onFocus: handleFocus,
          }),
        )}
      >
        {label}
      </MenuButton>

      <MenuContext.Provider value={menuCtx}>
        <MenuItems initialFocus={-1}>{children}</MenuItems>
      </MenuContext.Provider>
    </FloatingNode>
  );
};

Submenu.displayName = 'Submenu';

export default Submenu;
