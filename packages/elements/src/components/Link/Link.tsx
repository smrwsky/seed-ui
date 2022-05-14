import React from 'react';
import cn from 'classnames';

import { textBoldStyle } from '../../styles';

import * as S from './Link.css';

export type LinkDisplay = 'block' | 'inline' | 'inline-block';

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
  display?: LinkDisplay;
  variant?: LinkVariant;
}

function Link(
  {
    as: As = 'a',
    bold,
    display = 'inline',
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
        S.rootDisplay[display],
        S.rootVariant[variant],
        bold && textBoldStyle,
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
