import cn from 'classnames';
import React, { ForwardedRef } from 'react';

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
  children?: React.ReactNode;
}

const ToastContainer = React.forwardRef(
  (
    {
      children,
      className,
      placement = 'top-right',
      ...props
    }: ToastContainerProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
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
