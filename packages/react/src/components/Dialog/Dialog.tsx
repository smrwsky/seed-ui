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
  const [labelId, setLabelId] = useState<string | undefined>();
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
      descriptionId,
      open: openState,
      labelId,
      refs,
      size,
      closeDialog,
      getFloatingProps,
      getReferenceProps,
      setDescriptionId,
      setLabelId,
    }),
    [
      context,
      closeDialog,
      getReferenceProps,
      getFloatingProps,
      openState,
      refs,
      size,
      labelId,
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
