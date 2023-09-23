import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { FC, HTMLAttributes, ReactNode, useContext } from 'react';

import { ModalContext } from '../context';

export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const sizeStyles = {
  sm: atoms({
    px: 5,
  }),
  md: atoms({
    px: 5,
  }),
  lg: atoms({
    px: {
      mobile: 2,
      tablet: 5,
    },
  }),
};

const ModalBody: FC<ModalBodyProps> = ({ className, children, ...props }) => {
  const { size } = useContext(ModalContext);
  return (
    <div className={cn(sizeStyles[size], className)} {...props}>
      {children}
    </div>
  );
};

export default ModalBody;
