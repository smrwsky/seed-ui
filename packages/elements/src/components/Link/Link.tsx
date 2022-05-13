import React from 'react';
import cn from 'classnames';

import { textBoldStyle, textNowrapStyle } from '../../styles';

import * as S from './Link.css';

export type LinkVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface LinkProps
  extends Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>,
    React.AnchorHTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  bold?: boolean;
  nowrap?: boolean;
  variant?: LinkVariant;
}

function Link(
  {
    as: As = 'a',
    bold,
    nowrap,
    variant = 'primary',
    className,
    children,
    ...elemProps
  }: LinkProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element {
  return (
    <As
      className={cn(
        S.root,
        S.rootVariant[variant],
        bold && textBoldStyle,
        nowrap && textNowrapStyle,
        className,
      )}
      ref={ref}
      {...elemProps}
    >
      {children}
    </As>
  );
}

export default React.forwardRef(Link);
