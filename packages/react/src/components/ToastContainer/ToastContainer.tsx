import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import React, { ForwardedRef } from 'react';

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

const placementStyles = {
  'top-left': atoms({
    top: 0,
    left: {
      mobile: '1/2',
      mobileLg: 0,
    },
    transform: {
      mobile: 'translateXMiddle',
      mobileLg: 'none',
    },
  }),
  'top-center': atoms({
    top: 0,
    left: '1/2',
    transform: 'translateXMiddle',
  }),
  'top-right': atoms({
    top: 0,
    right: {
      mobile: '1/2',
      mobileLg: 0,
    },
    transform: {
      mobile: 'translateXMiddle',
      mobileLg: 'none',
    },
  }),
  'bottom-left': atoms({
    bottom: 0,
    left: {
      mobile: '1/2',
      mobileLg: 0,
    },
    transform: {
      mobile: 'translateXMiddle',
      mobileLg: 'none',
    },
  }),
  'bottom-center': atoms({
    bottom: 0,
    left: '1/2',
    transform: 'translateXMiddle',
  }),
  'bottom-right': atoms({
    bottom: 0,
    right: {
      mobile: '1/2',
      mobileLg: 0,
    },
    transform: {
      mobile: 'translateXMiddle',
      mobileLg: 'none',
    },
  }),
};

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
      ref={ref}
      className={cn(
        atoms({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'fixed',
          width: 'max',
          maxWidth: 'full',
          zIndex: 50,
          pointerEvents: 'none',
        }),
        placementStyles[placement],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);

ToastContainer.displayName = 'ToastContainer';

export default ToastContainer;
