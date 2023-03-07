import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

import * as S from './ToastContainer.css';

export type ToastContainerPlacement =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface ToastContainerProps extends HTMLAttributes<HTMLDivElement> {
  placement?: ToastContainerPlacement;
  className?: string;
}

const ToastContainer = forwardRef<HTMLDivElement, ToastContainerProps>(
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
