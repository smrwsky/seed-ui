'use client';

import React, { cloneElement, isValidElement, useContext } from 'react';

import { PopoverContext } from '../Popover.context';

export type DialogTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const PopoverTrigger: React.FC<DialogTriggerProps> = ({
  children,
  ...props
}) => {
  const { getReferenceProps, refs } = useContext(PopoverContext);

  if (isValidElement<React.HTMLProps<Element>>(children)) {
    return cloneElement(children, {
      ref: refs.setReference,
      ...getReferenceProps(props),
    });
  }

  return null;
};

export default PopoverTrigger;
