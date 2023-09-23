import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { FC, HTMLAttributes, ReactNode, useContext } from 'react';

import { ModalContext } from '../context';

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
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
    top: 0,
    left: 0,
    width: 'full',
    borderBottom: {
      mobile: 'thin',
      tablet: 'none',
    },
    borderColor: 'neutral100',
    px: {
      mobile: 1,
      tablet: 5,
    },
    py: {
      mobile: 1,
      tablet: 4,
    },
    zIndex: 20,
  }),
};

const ModalHeader: FC<ModalHeaderProps> = ({
  className,
  children,
  ...props
}) => {
  const { size } = useContext(ModalContext);
  return (
    <div
      className={cn(atoms({ bg: 'white' }), sizeStyles[size], className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default ModalHeader;
