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
        p: 4,
      })
    : atoms({
        borderStyle: 'solid',
        borderTop: 0,
        borderBottom: {
          mobile: 1,
          tablet: 0,
        },
        borderX: 0,
        borderColor: 'neutral100',
        px: 4,
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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: 14,
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
