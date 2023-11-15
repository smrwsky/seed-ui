'use client';

import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import React, { useContext } from 'react';

import { DialogContext } from '../Dialog.context';
import { DialogSize } from '../types';

export interface DialogHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title?: string;
}

const sizeStyles = (size: DialogSize) =>
  size === 'sm'
    ? atoms({
        px: 5,
        py: 4,
      })
    : atoms({
        borderBottom: {
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

const DialogHeader: React.FC<DialogHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  const { size } = useContext(DialogContext);

  return (
    <div
      className={cn(
        atoms({
          position: 'sticky',
          top: 0,
          minHeight: 14,
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

DialogHeader.displayName = 'DialogHeader';

export default DialogHeader;
