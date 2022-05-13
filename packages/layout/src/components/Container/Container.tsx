import React, { HTMLAttributes } from 'react';
import cn from 'classnames';
import {
  atoms,
  Atoms,
  OffsetProps,
  SizingProps,
  SpacingProps,
} from '@seed-ui/styles';

export interface ContainerProps
  extends SizingProps,
    OffsetProps,
    SpacingProps,
    HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  position?: Atoms['position'];
}

function Container(
  {
    as: As = 'div',
    bottom,
    height,
    left,
    m,
    mb,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    ml,
    mr,
    mt,
    mx,
    my,
    p,
    pb,
    pl,
    position,
    pr,
    pt,
    px,
    py,
    right,
    top,
    width,
    className,
    children,
    ...elemProps
  }: ContainerProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element {
  return (
    <As
      className={cn(
        atoms({
          bottom,
          height,
          left,
          m,
          mb,
          maxHeight,
          maxWidth,
          minHeight,
          minWidth,
          ml,
          mr,
          mt,
          mx,
          my,
          p,
          pb,
          pl,
          position,
          pr,
          pt,
          px,
          py,
          right,
          top,
          width,
        }),
        className,
      )}
      ref={ref}
      {...elemProps}
    >
      {children}
    </As>
  );
}

export default React.forwardRef(Container);
