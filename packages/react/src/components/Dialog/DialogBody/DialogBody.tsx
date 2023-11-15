'use client';

import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { FC, HTMLAttributes, ReactNode, useContext } from 'react';

import { DialogContext } from '../Dialog.context';
import { DialogSize } from '../types';

export interface DialogBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const sizeStyles = (size: DialogSize) =>
  size === 'sm'
    ? atoms({
        px: 5,
      })
    : atoms({
        px: {
          mobile: 4,
          tablet: 5,
        },
        py: {
          mobile: 4,
          tablet: 0,
        },
      });

const DialogBody: FC<DialogBodyProps> = ({ className, children, ...props }) => {
  const { size } = useContext(DialogContext);
  return (
    <div
      className={cn(atoms({ flex: 1 }), sizeStyles(size), className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default DialogBody;
