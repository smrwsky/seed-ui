'use client';

import {
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { DialogContext, DialogContextType } from './Dialog.context';
import { DialogBody } from './DialogBody';
import { DialogClose } from './DialogClose';
import { DialogContent } from './DialogContent';
import { DialogDescription } from './DialogDescription';
import { DialogFooter } from './DialogFooter';
import { DialogHeader } from './DialogHeader';
import { DialogTitle } from './DialogTitle';
import { DialogTrigger } from './DialogTrigger';
import { DialogSize } from './types';

export interface DialogProps {
  children: React.ReactNode;
  open?: boolean;
  size?: DialogSize;
  onOpenChange?: (open: boolean) => void;
}

const Dialog: React.FC<DialogProps> = ({
  children,
  open,
  size = 'md',
  onOpenChange,
}) => {
  const [openState, setOpenState] = useState(() => open ?? false);
  const [titleId, setTitleId] = useState<string | undefined>();
  const [descriptionId, setDescriptionId] = useState<string | undefined>();
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

  const { refs, context } = useFloating({
    open: openState,
    onOpenChange: setOpen,
  });

  const click = useClick(context, {
    enabled: !isControlled,
  });

  const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' });
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const closeDialog = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const dialogCxt = useMemo<DialogContextType>(
    () => ({
      context,
      closeDialog,
      getReferenceProps,
      getFloatingProps,
      open: openState,
      refs,
      size,
      titleId,
      setTitleId,
      descriptionId,
      setDescriptionId,
    }),
    [
      context,
      closeDialog,
      getReferenceProps,
      getFloatingProps,
      openState,
      refs,
      size,
      titleId,
      descriptionId,
    ],
  );

  useEffect(() => {
    if (isControlled) {
      setOpenState(open);
    }
  }, [isControlled, open]);

  return (
    <DialogContext.Provider value={dialogCxt}>
      {children}
    </DialogContext.Provider>
  );
};

Dialog.displayName = 'Dialog';

export default Object.assign(Dialog, {
  Trigger: DialogTrigger,
  Content: DialogContent,
  Header: DialogHeader,
  Body: DialogBody,
  Footer: DialogFooter,
  Close: DialogClose,
  Title: DialogTitle,
  Description: DialogDescription,
});
