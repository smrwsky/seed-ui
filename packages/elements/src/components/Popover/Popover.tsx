import React, { useEffect, useRef } from 'react';
import cn from 'classnames';
import {
  arrow as arrowMiddleware,
  offset as offsetMiddleware,
  flip,
  shift,
  useFloating,
  Placement,
} from '@floating-ui/react-dom';

import * as S from './Popover.css';

export type PopoverPlacement = Placement;

export type PopoverStrategy = 'absolute' | 'fixed';

export type PopoverTrigger = 'click' | 'hover' | 'focus' | 'manual';

export type PopoverProps = {
  anchorElement: HTMLElement | null;
  arrow?: boolean;
  className?: string;
  defaultOpen?: boolean;
  disabled?: boolean;
  offset?: number;
  open?: boolean;
  placement?: PopoverPlacement;
  shouldLockBody?: boolean;
  strategy?: PopoverStrategy;
  trigger?: PopoverTrigger | PopoverTrigger[];
  onOpenChange?: (visible: boolean) => void;
  children: React.ReactNode;
};

const Popover: React.FC<PopoverProps> = ({
  anchorElement,
  arrow,
  className,
  defaultOpen = false,
  disabled,
  offset = 0,
  open,
  placement = 'bottom',
  strategy = 'absolute',
  trigger = 'click',
  onOpenChange,
  children,
}) => {
  const arrowRef = useRef<HTMLDivElement>(null);

  const { floating, reference, refs, x, y } = useFloating({
    strategy,
    placement,
    middleware: [
      arrow && arrowMiddleware({ element: arrowRef }),
      flip(),
      shift(),
      offsetMiddleware(offset),
    ],
  });

  const [openState, setOpenState] = React.useState(defaultOpen);

  const triggers = React.useMemo(
    () => (Array.isArray(trigger) ? trigger : [trigger]),
    [trigger],
  );

  const isUncontrolled = typeof open === 'undefined' && !onOpenChange;

  const changeOpen = React.useCallback(
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

    function handleOpen() {
      changeOpen(true);
    }

    function handleClose() {
      changeOpen(false);
    }

    if (!disabled && triggers.includes('click')) {
      anchorElement?.addEventListener('click', handleClick);
    }

    if (!disabled && triggers.includes('focus')) {
      anchorElement?.addEventListener('focus', handleOpen);
      anchorElement?.addEventListener('blur', handleClose);
    }

    if (!disabled && triggers.includes('hover')) {
      anchorElement?.addEventListener('mouseenter', handleOpen);
    }

    return () => {
      anchorElement?.removeEventListener('click', handleOpen);
      anchorElement?.removeEventListener('focus', handleOpen);
      anchorElement?.removeEventListener('blur', handleClose);
      anchorElement?.removeEventListener('mouseenter', handleOpen);
    };
  }, [anchorElement, changeOpen, disabled, openState, triggers]);

  useEffect(() => {
    function handleOutsideMouseDown(e: MouseEvent) {
      if (
        !refs.floating.current?.contains(e.target as Node) &&
        !anchorElement?.contains(e.target as Node)
      ) {
        changeOpen(false);
      }
    }

    function handleOutsideMouseMove(e: MouseEvent) {
      if (
        !refs.floating.current?.contains(e.target as Node) &&
        !anchorElement?.contains(e.target as Node)
      ) {
        e.preventDefault();
        changeOpen(false);
      }
    }

    if (openState && !disabled && triggers.includes('click')) {
      document.addEventListener('mousedown', handleOutsideMouseDown);
    }

    if (openState && !disabled && triggers.includes('hover')) {
      document.addEventListener('mousemove', handleOutsideMouseMove);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideMouseDown);
      document.removeEventListener('mousemove', handleOutsideMouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anchorElement, changeOpen, disabled, openState, triggers]);

  if (!openState) {
    return null;
  }

  return (
    <div
      className={cn(S.root, className)}
      ref={floating}
      style={{
        position: strategy,
        top: y ? `${y}px` : 0,
        left: x ? `${x}px` : 0,
      }}
    >
      <div className={cn(S.content)}>{children}</div>
      {arrow && <div className={S.arrow} ref={arrowRef} />}
    </div>
  );
};

Popover.displayName = 'Popover';

export default Popover;
