import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { FC, HTMLAttributes, ReactNode, useContext } from 'react';

import { DialogContext } from '../Dialog.context';

export interface DialogFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
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
    bottom: 0,
    left: 0,
    width: 'full',
    borderTop: {
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

const DialogFooter: FC<DialogFooterProps> = ({
  className,
  children,
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

export default DialogFooter;
