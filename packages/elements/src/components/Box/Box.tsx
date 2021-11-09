import React from 'react';
import cx from 'classnames';

import { atoms, Atoms, BorderProps } from '../../styles/atoms.css';

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
      ref={ref}
      className={cx(
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
    >
      {children}
    </As>
  );
}

Box.displayName = 'Box';

export default React.forwardRef(Box);
