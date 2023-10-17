import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { FC, HTMLAttributes, ReactNode, useContext } from 'react';

import { DialogContext } from '../Dialog.context';

export interface DialogHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  title?: string;
}

const sizeStyles = {
  sm: atoms({
    px: 5,
    py: 4,
  }),

  md: atoms({
    px: 5,
    py: 4,
  }),

  lg: atoms({
    position: {
      mobile: 'fixed',
      tablet: 'static',
    },
    top: 0,
    left: 0,
    width: 'full',
    minHeight: {
      mobile: 14,
      tablet: 0,
    },
    borderBottom: {
      mobile: 'thin',
      tablet: 'none',
    },
    borderColor: 'neutral100',
    px: {
      mobile: 3,
      tablet: 5,
    },
    py: {
      mobile: 2,
      tablet: 4,
    },
    zIndex: 20,
  }),
};

const DialogHeader: FC<DialogHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  const { size } = useContext(DialogContext);

  return (
    <div
      className={cn(atoms({ bg: 'white' }), sizeStyles[size], className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default DialogHeader;
