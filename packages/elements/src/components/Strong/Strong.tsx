import React from 'react';
import cn from 'classnames';

import { textVariantStyle, textBoldStyle } from '../../styles';

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

const Strong: React.FC<StrongProps & React.RefAttributes<HTMLElement>> =
  React.forwardRef(
    (
      { bold = true, variant = 'dark', className, children, ...elemProps },
      ref,
    ) => (
      <strong
        className={cn(
          S.root,
          bold && textBoldStyle,
          textVariantStyle[variant],
          className,
        )}
        ref={ref}
        {...elemProps}
      >
        {children}
      </strong>
    ),
  );

Strong.displayName = 'Strong';

export default Strong;
