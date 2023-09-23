import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import React, { Children, ForwardedRef } from 'react';

import { Box } from '../Box';

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
      mobile: 'translateMiddle',
      mobileLg: 'none',
    },
  }),
  'top-center': atoms({
    top: 0,
    left: '1/2',
    transform: 'translateMiddle',
  }),
  'top-right': atoms({
    top: 0,
    right: {
      mobile: '1/2',
      mobileLg: 0,
    },
    transform: {
      mobile: 'translateMiddle',
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
      mobile: 'translateMiddle',
      mobileLg: 'none',
    },
  }),
  'bottom-center': atoms({
    bottom: 0,
    left: '1/2',
    transform: 'translateMiddle',
  }),
  'bottom-right': atoms({
    bottom: 0,
    right: {
      mobile: '1/2',
      mobileLg: 0,
    },
    transform: {
      mobile: 'translateMiddle',
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
      className={cn(
        atoms({
          position: 'absolute',
          width: 'max',
          maxWidth: 'full',
          zIndex: 50,
          pointerEvents: 'none',
        }),
        placementStyles[placement],
        className,
      )}
      ref={ref}
      {...props}
    >
      {Children.map(children, (child, index) => (
        <Box mt={index ? 2 : 0}>{child}</Box>
      ))}
    </div>
  ),
);

ToastContainer.displayName = 'ToastContainer';

export default ToastContainer;
