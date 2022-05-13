import React from 'react';
import cn from 'classnames';
import { atoms, MarginProps } from '@seed-ui/styles';

import { textNowrapStyle, textVariantStyle } from '../../styles';

import * as S from './Caption.css';

export type CaptionVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface CaptionProps
  extends MarginProps,
    React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  nowrap?: boolean;
  variant?: CaptionVariant;
}

function Caption(
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
    className,
    variant = 'dark',
    children,
    ...elemProps
  }: CaptionProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element {
  return (
    <As
      className={cn(
        S.root,
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

export default React.forwardRef(Caption);
