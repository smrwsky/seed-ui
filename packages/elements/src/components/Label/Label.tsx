import React from 'react';
import cx from 'classnames';

import { Atoms, atoms, MarginProps } from '../../styles/atoms.css';
import { textNowrapStyle, textVariantStyle } from '../../styles/helpers';

import * as S from './Label.css';

export type LabelSize = 'sm' | 'md';

export type LabelVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface LabelProps
  extends MarginProps,
    React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  nowrap?: boolean;
  size?: LabelSize;
  textAlign?: Atoms['textAlign'];
  variant?: LabelVariant;
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
    nowrap,
    size = 'md',
    textAlign,
    variant = 'dark',
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
        textVariantStyle[variant],
        nowrap && textNowrapStyle,
        atoms({
          m,
          mb,
          ml,
          mr,
          mt,
          mx,
          my,
          textAlign,
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
