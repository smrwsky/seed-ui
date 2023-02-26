import cn from 'classnames';
import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

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

const ToastContainer: FC<ToastContainerProps & RefAttributes<HTMLDivElement>> =
  forwardRef(
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
