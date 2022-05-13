import React from 'react';
import cn from 'classnames';
import { atoms, MarginProps, Atoms } from '@seed-ui/styles';

import {
  textNowrapStyle,
  textSerifSizeStyle,
  textSizeStyle,
  textBoldStyle,
  textVariantStyle,
} from '../../styles';

export type TextSize = 'sm' | 'md';

export type TextVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface TextProps
  extends MarginProps,
    React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  bold?: boolean;
  nowrap?: boolean;
  serif?: boolean;
  size?: TextSize;
  textAlign?: Atoms['textAlign'];
  variant?: TextVariant;
}

function Text(
  {
    as: As = 'p',
    bold,
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    nowrap,
    serif,
    size = 'md',
    textAlign,
    variant = 'dark',
    className,
    children,
    ...elemProps
  }: TextProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element {
  return (
    <As
      className={cn(
        bold && textBoldStyle,
        nowrap && textNowrapStyle,
        serif ? textSerifSizeStyle[size] : textSizeStyle[size],
        textVariantStyle[variant],
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

export default React.forwardRef(Text);
