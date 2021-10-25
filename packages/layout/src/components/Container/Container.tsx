import React, { HTMLAttributes } from 'react';
import cx from 'classnames';

import {
  Atoms,
  atoms,
  OffsetProps,
  SizingProps,
  SpacingProps,
} from '../../styles/atoms.css';

export interface ContainerProps
  extends SizingProps,
    OffsetProps,
    SpacingProps,
    HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  position?: Atoms['position'];
}

function Container({
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
}: ContainerProps): JSX.Element {
  return (
    <As
      className={cx(
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
      {...elemProps}
    >
      {children}
    </As>
  );
}

Container.displayName = 'ContainerProps';

export default Container;
