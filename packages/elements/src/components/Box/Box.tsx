import React from 'react';
import cx from 'classnames';

import { atoms, Atoms } from '../../styles/atoms.css';

import * as S from './Box.css';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  borderColor?: Atoms['borderColor'];
  borderRadius?: Atoms['borderRadius'];
  boxShadow?: Atoms['boxShadow'];
  backgroundColor?: Atoms['backgroundColor'];
}
function Box(
  {
    as: As = 'div',
    borderColor,
    borderRadius,
    boxShadow,
    backgroundColor,
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
        borderColor != null && S.rootBorder,
        atoms({
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
