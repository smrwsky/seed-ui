import React from 'react';
import cn from 'classnames';

import * as S from './ToastContainer.css';

export type ToastContainerPlacement =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface ToastContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  placement?: ToastContainerPlacement;
  className?: string;
}

const ToastContainer: React.FC<
  ToastContainerProps & React.RefAttributes<HTMLDivElement>
> = React.forwardRef(
  ({ children, className, placement = 'top-right', ...props }, ref) => (
    <div
      className={cn(S.root, S.rootPlacement[placement], className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  ),
);

ToastContainer.displayName = 'ToastContainer';

export default ToastContainer;
