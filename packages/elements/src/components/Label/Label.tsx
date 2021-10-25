import React from 'react';
import cx from 'classnames';

import { atoms, MarginProps } from '../../styles/atoms.css';

import * as S from './Label.css';

export type LabelSize = 'sm' | 'md';

export interface LabelProps
  extends MarginProps,
    React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  size?: LabelSize;
}

function Label(
  {
    as: As = 'div',
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    size = 'md',
    className,
    children,
    ...elemProps
  }: LabelProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element {
  return (
    <As
      ref={ref}
      className={cx(
        S.rootSize[size],
        atoms({
          m,
          mb,
          ml,
          mr,
          mt,
          mx,
          my,
        }),
        className,
      )}
      {...elemProps}
    >
      {children}
    </As>
  );
}

Label.displayName = 'Label';

export default React.forwardRef(Label);
