import React from 'react';
import cn from 'classnames';
import { Atoms, atoms, BorderProps } from '@seed-ui/styles';

export interface BoxProps
  extends BorderProps,
    React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  backgroundColor?: Atoms['backgroundColor'];
  borderColor?: Atoms['borderColor'];
  borderRadius?: Atoms['borderRadius'];
  boxShadow?: Atoms['boxShadow'];
}

function Box(
  {
    as: As = 'div',
    border,
    borderBottom,
    borderLeft,
    borderRight,
    borderTop,
    borderX,
    borderY,
    borderColor,
    boxShadow,
    backgroundColor,
    borderRadius,
    className,
    children,
    ...elemProps
  }: BoxProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element {
  return (
    <As
      {...elemProps}
      className={cn(
        atoms({
          border,
          borderBottom,
          borderLeft,
          borderRight,
          borderTop,
          borderX,
          borderY,
          borderColor,
          borderRadius,
          boxShadow,
          backgroundColor,
        }),
        className,
      )}
      ref={ref}
    >
      {children}
    </As>
  );
}

export default React.forwardRef(Box);
