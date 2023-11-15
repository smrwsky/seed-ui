'use client';

import React, { cloneElement, isValidElement, useContext } from 'react';

import { DialogContext } from '../Dialog.context';

export interface DialogCloseProps {
  children: React.ReactElement;
}

const DialogClose: React.FC<DialogCloseProps> = ({ children }) => {
  const { closeDialog } = useContext(DialogContext);

  if (isValidElement<React.ButtonHTMLAttributes<HTMLButtonElement>>(children)) {
    return cloneElement(children, { onClick: closeDialog });
  }

  return null;
};

DialogClose.displayName = 'DialogClose';

export default DialogClose;
