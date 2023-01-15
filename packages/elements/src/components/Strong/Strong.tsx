import React from 'react';
import cn from 'classnames';

import * as S from './Strong.css';

export type StrongVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
  | 'default';

export interface StrongProps extends React.HTMLAttributes<HTMLElement> {
  bold?: boolean;
  variant?: StrongVariant;
}

const Strong: React.FC<StrongProps & React.RefAttributes<HTMLElement>> =
  React.forwardRef(
    (
      { bold = true, variant = 'default', className, children, ...elemProps },
      ref,
    ) => (
      <strong
        className={cn(S.root({ bold, variant }), className)}
        ref={ref}
        {...elemProps}
      >
        {children}
      </strong>
    ),
  );

Strong.displayName = 'Strong';

export default Strong;
