import React from 'react';
import cx from 'classnames';

import { textBoldStyle, textNowrapStyle } from '../../styles/helpers';

import * as S from './Link.css';

export type LinkVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light';

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
      ref={ref}
      className={cx(
        S.root,
        S.rootVariant[variant],
        bold && textBoldStyle,
        nowrap && textNowrapStyle,
        className,
      )}
      {...elemProps}
    >
      {children}
    </As>
  );
}

Link.displayName = 'Link';

export default React.forwardRef(Link);
