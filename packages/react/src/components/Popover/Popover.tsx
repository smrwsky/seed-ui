import {
  autoUpdate,
  flip,
  offset as offsetFn,
  OffsetOptions,
  Placement,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { PopoverContext, PopoverContextType } from './Popover.context';
import { PopoverContent } from './PopoverContent';
import { PopoverTrigger } from './PopoverTrigger';

export interface PopoverProps {
  initialOpen?: boolean;
  offset?: OffsetOptions;
  open?: boolean;
  overflowPadding?: number;
  modal?: boolean;
  placement?: Placement;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

const Popover: React.FC<PopoverProps> = ({
  initialOpen = false,
  offset = 4,
  open,
  overflowPadding = 8,
  modal = false,
  placement = 'bottom',
  onOpenChange,
  children,
}) => {
  const [openState, setOpenState] = useState(() => open ?? initialOpen);
  const [labelId, setLabelId] = useState<string>();
  const [descriptionId, setDescriptionId] = useState<string>();
  const isControlled = open !== undefined;

  const setOpen = useCallback(
    (nextOpen: boolean) => {
      if (isControlled) {
        onOpenChange?.(nextOpen);
      } else {
        setOpenState(nextOpen);
      }
    },
    [isControlled, onOpenChange],
  );

  const { context, floatingStyles, refs } = useFloating({
    placement,
    open: openState,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offsetFn(offset),
      flip({
        crossAxis: placement.includes('-'),
        fallbackAxisSideDirection: 'end',
        padding: overflowPadding,
      }),
      shift({ padding: overflowPadding }),
    ],
  });

  const click = useClick(context, {
    enabled: !isControlled,
  });

  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const closePopover = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const popoverCxt = useMemo<PopoverContextType>(
    () => ({
      context,
      closePopover,
      floatingStyles,
      getReferenceProps,
      getFloatingProps,
      open: openState,
      modal,
      refs,
      labelId,
      setLabelId,
      descriptionId,
      setDescriptionId,
    }),
    [
      closePopover,
      context,
      descriptionId,
      floatingStyles,
      getFloatingProps,
      getReferenceProps,
      labelId,
      modal,
      openState,
      refs,
    ],
  );

  useEffect(() => {
    if (open !== undefined) {
      setOpenState(open);
    }
  }, [open, setOpen]);

  return (
    <PopoverContext.Provider value={popoverCxt}>
      {children}
    </PopoverContext.Provider>
  );
};

export default Object.assign(Popover, {
  Trigger: PopoverTrigger,
  Content: PopoverContent,
});
