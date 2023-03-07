/* eslint-disable jsx-a11y/no-autofocus */
import cn from 'classnames';
import {
  CSSProperties,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { mergeRefs } from '../../../utils/merge-refs';
import {
  Popover,
  PopoverPlacement,
  PopoverStrategy,
  PopoverTrigger,
} from '../../Popover';
import Menu, { MenuAutoFocus, MenuProps } from '../Menu';

import * as S from './PopupMenu.css';

export interface PopupMenuProps
  extends Omit<MenuProps, 'direction' | 'size' | 'variant'> {
  anchorElement: HTMLElement | null;
  autoFocus?: MenuAutoFocus;
  defaultOpen?: boolean;
  open?: boolean;
  popoverClassName?: string;
  popoverStyle?: CSSProperties;
  placement?: PopoverPlacement;
  strategy?: PopoverStrategy;
  trigger?: PopoverTrigger | PopoverTrigger[];
  onAutoFocusChange?: (autoFocus: MenuAutoFocus) => void;
  onOpenChange?: (open: boolean) => void;
}

const PopupMenu = forwardRef<HTMLUListElement, PopupMenuProps>(
  (
    {
      anchorElement,
      autoFocus = 'on',
      defaultOpen,
      open,
      popoverClassName,
      popoverStyle,
      placement = 'bottom-start',
      strategy = 'absolute',
      trigger = 'click',
      className,
      onOpenChange,
      children,
      ...menuProps
    },
    ref,
  ): JSX.Element => {
    const [openState, setOpenState] = useState(defaultOpen);
    const isUncontrolled = typeof open === 'undefined' && !onOpenChange;

    const [menuElement, setMenuElement] = useState<HTMLUListElement | null>(
      null,
    );

    const mergedRefs = mergeRefs(ref, setMenuElement);

    const handleOpenChange = useCallback(
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
      if (anchorElement && !anchorElement.getAttribute('aria-haspopup')) {
        anchorElement.setAttribute('aria-haspopup', 'true');
      }
    }, [anchorElement, openState]);

    useEffect(() => {
      if (
        anchorElement &&
        anchorElement.getAttribute('aria-expanded') !== String(openState)
      ) {
        anchorElement.setAttribute('aria-expanded', String(openState));
      }
    }, [anchorElement, openState]);

    useEffect(() => {
      let timeout: NodeJS.Timeout;

      function handler(e: MouseEvent) {
        if (openState && menuElement?.contains(e.target as HTMLElement)) {
          const allMenuItems =
            menuElement.querySelectorAll('[role="menuitem"]');

          const shouldClose = Array.from(allMenuItems).some(
            (el) =>
              !el.querySelector('[role="menuitem"]') &&
              !el.hasAttribute('aria-haspopup') &&
              el.contains(e.target as Node),
          );

          if (shouldClose) {
            timeout = setTimeout(() => {
              handleOpenChange(false);
            }, 200);
          }
        }
      }

      document.addEventListener('mousedown', handler);

      return () => {
        document.removeEventListener('mousedown', handler);
        clearTimeout(timeout);
      };
    }, [anchorElement, handleOpenChange, menuElement, openState]);

    return (
      <Popover
        anchorElement={anchorElement}
        className={popoverClassName}
        open={openState}
        placement={placement}
        strategy={strategy}
        style={popoverStyle}
        trigger={trigger}
        onOpenChange={handleOpenChange}
      >
        <Menu
          anchorElement={anchorElement}
          autoFocus={autoFocus}
          className={cn(S.menu, className)}
          ref={mergedRefs}
          size="sm"
          type="vertical"
          {...menuProps}
        >
          {children}
        </Menu>
      </Popover>
    );
  },
);

PopupMenu.displayName = 'PopupMenu';

export default PopupMenu;
