import React from 'react';
import cn from 'classnames';
import { atoms, Atoms, MarginProps } from '@seed-ui/styles';

import { textNowrapStyle, textVariantStyle } from '../../styles';

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
      className={cn(
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
      ref={ref}
      {...elemProps}
    >
      {children}
    </As>
  );
}

export default React.forwardRef(Label);
