'use client';

import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import React, { useContext } from 'react';

import { DialogContext } from '../Dialog.context';
import { DialogSize } from '../types';

export interface DialogFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const sizeStyles = (size: DialogSize) =>
  size === 'sm'
    ? atoms({
        px: 5,
        py: 4,
      })
    : atoms({
        borderTop: {
          mobile: 'thin',
          tablet: 'none',
        },
        borderColor: 'neutral100',
        px: {
          mobile: 4,
          tablet: 5,
        },
        py: {
          mobile: 2,
          tablet: 4,
        },
      });

const DialogFooter: React.FC<DialogFooterProps> = ({
  className,
  children,
  ...props
}) => {
  const { size } = useContext(DialogContext);

  return (
    <div
      className={cn(
        atoms({
          position: 'sticky',
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          bg: 'white',
          zIndex: 20,
        }),
        sizeStyles(size),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

DialogFooter.displayName = 'DialogFooter';

export default DialogFooter;
