import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

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

export interface StrongProps extends HTMLAttributes<HTMLElement> {
  bold?: boolean;
  variant?: StrongVariant;
}

const Strong = forwardRef<HTMLElement, StrongProps>(
  (
    { bold = true, variant = 'default', className, children, ...elemProps },
    ref,
  ) => (
    <strong
      className={cn(
        S.root,
        S.rootVariant[variant],
        bold && S.rootBold,
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
