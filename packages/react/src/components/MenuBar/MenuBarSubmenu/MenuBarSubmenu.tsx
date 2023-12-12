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
  useRole,
  useTypeahead,
  useMergeRefs,
  FloatingPortal,
  FloatingFocusManager,
  FloatingList,
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

import { MenuBarContext, MenuBarContextType } from '../MenuBar.context';
import { MenuBarButton } from '../MenuBarButton';
import { Transition } from 'react-transition-group';
import cn from 'classnames';
import { atoms } from '@seed-ui/styles';
import { MenuVariant } from '../../Menu';
import {
  getFirstItem,
  getLastItem,
  getNextItem,
  getPrevItem,
} from '../../../utils/list-navigation';

export interface SubMenuProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactElement;
  initialOpen?: boolean;
  label: string;
  selected?: boolean;
}

const ENTER_TIMEOUT = 200;

const TRANSITION_TIMEOUT = {
  appear: 0,
  enter: ENTER_TIMEOUT,
  exit: ENTER_TIMEOUT,
};

const variantStyle = (variant: MenuVariant) =>
  variant === 'dark'
    ? atoms({
        bg: 'primary700',
        outlineColor: 'primary800',
      })
    : atoms({
        bg: 'white',
        outlineColor: 'neutral100',
      });

const MenuBarSubmenu: React.FC<SubMenuProps> = ({
  icon,
  initialOpen = false,
  label,
  children,
  onFocus,
  onKeyDown,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [hasFocusInside, setHasFocusInside] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const elementsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const labelsRef = useRef<Array<string>>([]);
  const parent = useContext(MenuBarContext);
  const tree = useFloatingTree();
  const nodeId = useFloatingNodeId();
  const parentId = useFloatingParentNodeId();
  const item = useListItem();

  const { floatingStyles, refs, context } = useFloating<HTMLButtonElement>({
    nodeId,
    open: isOpen,
    strategy: 'fixed',
    onOpenChange: setIsOpen,
    placement: 'bottom-start',
    middleware: [
      offset({
        mainAxis: 4,
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
    keyboardHandlers: false,
  });

  const dismiss = useDismiss(context);

  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    onMatch: setActiveIndex,
    activeIndex,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [hover, click, role, dismiss, typeahead],
  );

  const handleMenuItemKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        e.stopPropagation();
        const item = getPrevItem(refs.floating, e.currentTarget);
        item?.focus();
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        e.stopPropagation();
        const item = getNextItem(refs.floating, e.currentTarget);
        item?.focus();
      }

      if (!refs.reference.current) {
        return;
      }

      if (parent.isNested && e.key === 'ArrowLeft') {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(false);
        (refs.reference.current as HTMLButtonElement).focus();
      }

      if (!parent.isNested && e.key === 'ArrowLeft') {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(false);

        const item = getPrevItem(
          parent.refs.floating,
          refs.reference.current as HTMLButtonElement,
        );

        item?.focus();

        if (item?.getAttribute('aria-haspopup') === 'menu') {
          item.click();
        }
      }

      if (
        !parent.isNested &&
        e.key === 'ArrowRight' &&
        !e.currentTarget.getAttribute('aria-haspopup')
      ) {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(false);

        const item = getNextItem(
          parent.refs.floating,
          refs.reference.current as HTMLButtonElement,
        );

        item?.focus();

        if (item?.getAttribute('aria-haspopup') === 'menu') {
          item.click();
        }
      }
    },
    [parent.isNested, parent.refs.floating, refs.floating, refs.reference],
  );

  const menuCtx = useMemo<MenuBarContextType>(
    () => ({
      activeIndex,
      collapsed: false,
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
      isOpen,
      isNested: true,
      labelsRef,
      refs,
      setActiveIndex,
      setHasFocusInside,
      size: parent.size,
      variant: parent.variant,
    }),
    [
      activeIndex,
      context,
      floatingStyles,
      getFloatingProps,
      getItemProps,
      handleMenuItemKeyDown,
      hasFocusInside,
      isOpen,
      parent.size,
      parent.variant,
      refs,
    ],
  );

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLButtonElement>) => {
      setHasFocusInside(false);
      parent.setHasFocusInside(true);
      onFocus?.(e);
    },
    [onFocus, parent],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      console.log(e.key);
      if (
        e.key === 'Enter' ||
        e.key === ' ' ||
        (!parent.isNested && e.key === 'ArrowDown') ||
        (parent.isNested && e.key === 'ArrowRight')
      ) {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(true);

        requestAnimationFrame(() => {
          const item = getFirstItem(refs.floating);
          item?.focus();
        });
      }

      if (!parent.isNested && e.key === 'ArrowUp') {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(true);

        requestAnimationFrame(() => {
          const item = getLastItem(refs.floating);
          item?.focus();
        });
      }

      onKeyDown?.(e);
    },
    [onKeyDown, parent.isNested, refs.floating],
  );

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
      <MenuBarButton
        {...props}
        ref={buttonRef}
        endIcon={
          parent.isNested ? (
            <Icon name="chevron-right" />
          ) : (
            <Icon name="chevron-down" />
          )
        }
        role="menuitem"
        startIcon={icon}
        tabIndex={isActive ? 0 : -1}
        {...getReferenceProps(
          parent.getItemProps({
            onFocus: handleFocus,
            onKeyDown: handleKeyDown,
          }),
        )}
      >
        {label}
      </MenuBarButton>

      <MenuBarContext.Provider value={menuCtx}>
        <FloatingList elementsRef={elementsRef} labelsRef={labelsRef}>
          <Transition
            in={isOpen}
            mountOnEnter
            timeout={TRANSITION_TIMEOUT}
            unmountOnExit
          >
            {(status) => (
              <FloatingPortal>
                <FloatingFocusManager
                  context={context}
                  initialFocus={-1}
                  modal={false}
                >
                  <div
                    ref={refs.setFloating}
                    className={cn(
                      atoms({
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: 'xs',
                        maxHeight: 80,
                        borderRadius: 'lg',
                        outlineStyle: 'solid',
                        outline: 1,
                        boxShadow: {
                          default: 'lg',
                          focusVisible: 'lg',
                        },
                        zIndex: 10,
                        opacity: status === 'entered' ? 100 : 0,
                        transition: 'fade',
                        m: 0,
                        px: 0,
                        py: 0.5,
                      }),
                      variantStyle(parent.variant),
                    )}
                    style={floatingStyles}
                    {...getFloatingProps()}
                  >
                    {children}
                  </div>
                </FloatingFocusManager>
              </FloatingPortal>
            )}
          </Transition>
        </FloatingList>
      </MenuBarContext.Provider>
    </FloatingNode>
  );
};

MenuBarSubmenu.displayName = 'MenuBarSubmenu';

export default MenuBarSubmenu;
