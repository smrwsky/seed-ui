import {
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { DialogContext, DialogContextType, DialogSize } from './Dialog.context';
import { DialogBody } from './DialogBody';
import { DialogClose } from './DialogClose';
import { DialogContent } from './DialogContent';
import { DialogDescription } from './DialogDescription';
import { DialogFooter } from './DialogFooter';
import { DialogHeader } from './DialogHeader';
import { DialogTitle } from './DialogTitle';
import { DialogTrigger } from './DialogTrigger';

export interface DialogProps {
  open?: boolean;
  size?: DialogSize;
  children: ReactNode;
  onOpenChange?: (open: boolean) => void;
}

const Dialog: FC<DialogProps> = ({
  open,
  size = 'md',
  children,
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

  const handleClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const DialogCxt = useMemo<DialogContextType>(
    () => ({
      context,
      getReferenceProps,
      getFloatingProps,
      handleClose,
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
      descriptionId,
      getFloatingProps,
      getReferenceProps,
      handleClose,
      openState,
      refs,
      size,
      titleId,
    ],
  );

  useEffect(() => {
    if (isControlled) {
      setOpenState(open);
    }
  }, [isControlled, open]);

  return (
    <DialogContext.Provider value={DialogCxt}>
      {children}
    </DialogContext.Provider>
  );
};

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
