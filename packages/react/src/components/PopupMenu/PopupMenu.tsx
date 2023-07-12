/* eslint-disable jsx-a11y/no-autofocus */

import {
  flip,
  Placement,
  shift,
  useFloating,
  offset as offsetMiddleware,
} from '@floating-ui/react-dom';
import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { forwardRef, useCallback, useEffect, useState } from 'react';

import { mergeRefs } from '../../utils/merge-refs';
import { Menu, MenuAutoFocus, MenuProps, MenuVariant } from '../Menu';

export type PopupMenuPlacement = Placement;

export type PopupMenuStrategy = 'absolute' | 'fixed';

export type PopupMenuTrigger = 'auto' | 'manual';

export interface PopupMenuOffsetOptions {
  mainAxis?: number;
  crossAxis?: number;
  alignmentAxis?: number | null;
}

export interface PopupMenuProps
  extends Omit<MenuProps, 'direction' | 'size' | 'variant'> {
  anchorElement: HTMLElement | null;
  autoFocus?: MenuAutoFocus;
  defaultOpen?: boolean;
  offset?: number | PopupMenuOffsetOptions;
  open?: boolean;
  placement?: PopupMenuPlacement;
  strategy?: PopupMenuStrategy;
  trigger?: PopupMenuTrigger;
  variant?: MenuVariant;
  onAutoFocusChange?: (autoFocus: MenuAutoFocus) => void;
  onOpenChange?: (open: boolean) => void;
}

const CLOSE_DELAY = 200;

const PopupMenu = forwardRef<HTMLUListElement, PopupMenuProps>(
  (
    {
      anchorElement,
      autoFocus = 'on',
      className,
      defaultOpen,
      open,
      offset = 0,
      placement = 'bottom-start',
      strategy = 'absolute',
      style,
      trigger = 'auto',
      variant,
      onOpenChange,
      children,
      ...menuProps
    },
    ref,
  ) => {
    const { floating, reference, refs, x, y, update } = useFloating({
      strategy,
      placement,
      middleware: [flip(), offsetMiddleware(offset), shift()],
    });

    const [openState, setOpenState] = useState(defaultOpen);
    const isUncontrolled = typeof open === 'undefined' && !onOpenChange;

    const [menuElement, setMenuElement] = useState<HTMLUListElement | null>(
      null,
    );

    const mergedRefs = mergeRefs(ref, setMenuElement);

    const changeOpen = useCallback(
      (val: boolean) => {
        if (isUncontrolled) {
          setOpenState(val);
        } else {
          onOpenChange?.(val);
        }
      },
      [isUncontrolled, onOpenChange],
    );

    useEffect(() => {
      if (typeof open !== 'undefined') {
        setOpenState(open);
      }
    }, [open]);

    useEffect(() => {
      reference(anchorElement);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [anchorElement]);

    useEffect(() => {
      function handleClick() {
        changeOpen(!openState);
      }

      if (trigger === 'auto') {
        anchorElement?.addEventListener('click', handleClick);
      }

      return () => {
        anchorElement?.removeEventListener('click', handleClick);
      };
    }, [anchorElement, changeOpen, openState, trigger]);

    useEffect(() => {
      function handleOutsideMouseDown(e: MouseEvent) {
        if (
          !refs.floating.current?.contains(e.target as Node) &&
          !anchorElement?.contains(e.target as Node)
        ) {
          changeOpen(false);
        }
      }

      if (openState && trigger === 'auto') {
        document.addEventListener('mousedown', handleOutsideMouseDown);
      }

      return () => {
        document.removeEventListener('mousedown', handleOutsideMouseDown);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [anchorElement, openState]);

    useEffect(() => {
      let timeout: NodeJS.Timeout;

      function handler(e: MouseEvent) {
        clearTimeout(timeout);

        const tgt = e.target as HTMLElement;

        if (openState && menuElement?.contains(tgt)) {
          const allMenuItems =
            menuElement.querySelectorAll('[role="menuitem"]');

          const shouldClose = Array.from(allMenuItems).some(
            (el) =>
              !el.querySelector('[role="menuitem"]') &&
              !el.hasAttribute('aria-haspopup') &&
              el.contains(tgt),
          );

          if (shouldClose) {
            timeout = setTimeout(() => {
              changeOpen(false);
            }, CLOSE_DELAY);
          }
        }
      }

      document.addEventListener('mousedown', handler);

      return () => {
        clearTimeout(timeout);
        document.removeEventListener('mousedown', handler);
      };
    }, [anchorElement, changeOpen, menuElement, openState]);

    useEffect(() => {
      if (anchorElement && !anchorElement.getAttribute('aria-haspopup')) {
        anchorElement.setAttribute('aria-haspopup', 'true');
      }
    }, [anchorElement]);

    useEffect(() => {
      update();

      if (
        anchorElement &&
        anchorElement.getAttribute('aria-expanded') !== String(openState)
      ) {
        anchorElement.setAttribute('aria-expanded', String(openState));
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [anchorElement, openState]);

    return (
      <div
        className={cn(
          atoms({
            display: openState ? 'block' : 'none',
            width: 'max',
            zIndex: 'popover',
          }),
          className,
        )}
        ref={floating}
        style={{
          position: strategy,
          top: y ? `${y}px` : 0,
          left: x ? `${x}px` : 0,
          ...style,
        }}
      >
        <div
          className={cn(
            atoms({
              maxWidth: 'xs',
              maxHeight: 80,
              borderRadius: 'md',
              border: 'thin',
              boxShadow: 'lg',
            }),
            variant === 'dark'
              ? atoms({
                  bg: 'primary700',
                  borderColor: 'dark50',
                })
              : atoms({
                  bg: 'white',
                  borderColor: 'neutral50',
                }),
          )}
        >
          <Menu
            anchorElement={anchorElement}
            autoFocus={autoFocus}
            ref={mergedRefs}
            size="sm"
            type="vertical"
            variant={variant}
            {...menuProps}
          >
            {children}
          </Menu>
        </div>
      </div>
    );
  },
);

PopupMenu.displayName = 'PopupMenu';

export default PopupMenu;
