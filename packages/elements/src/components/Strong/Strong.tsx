import React from 'react';
import cx from 'classnames';

import { textVariantStyle, textBoldStyle } from '../../styles/helpers';

import * as S from './Strong.css';

export type StrongVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface StrongProps extends React.HTMLAttributes<HTMLElement> {
  bold?: boolean;
  variant?: StrongVariant;
}

function Strong(
  {
    bold = true,
    variant = 'dark',
    className,
    children,
    ...elemProps
  }: StrongProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element {
  return (
    <strong
      ref={ref}
      className={cx(
        S.root,
        bold && textBoldStyle,
        textVariantStyle[variant],
        className,
      )}
      {...elemProps}
    >
      {children}
    </strong>
  );
}

Strong.displayName = 'Strong';

export default React.forwardRef(Strong);
