'use client';

import React, { cloneElement, isValidElement, useContext } from 'react';

import { DialogContext } from '../Dialog.context';

export type DialogTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const DialogTrigger: React.FC<DialogTriggerProps> = ({
  children,
  ...props
}) => {
  const { getReferenceProps, refs } = useContext(DialogContext);

  if (isValidElement<React.HTMLProps<Element>>(children)) {
    return cloneElement(children, {
      ...props,
      ref: refs.setReference,
      ...getReferenceProps(),
    });
  }

  return null;
};

export default DialogTrigger;
