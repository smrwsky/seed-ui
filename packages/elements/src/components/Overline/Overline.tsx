import { textBreakStyle, textTruncateStyle } from '@seed-ui/styles';
import cn from 'classnames';
import { ElementType, forwardRef, HTMLAttributes } from 'react';

import * as S from './Overline.css';

export type OverlineVariant =
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

export interface OverlineProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  breakWord?: boolean;
  truncate?: boolean;
  variant?: OverlineVariant;
}

const Overline = forwardRef<HTMLElement, OverlineProps>(
  (
    {
      as: As = 'div',
      breakWord,
      className,
      truncate,
      variant = 'default',
      children,
      ...elemProps
    },
    ref,
  ) => (
    <As
      className={cn(
        S.root,
        S.rootVariant[variant],
        breakWord && textBreakStyle,
        truncate && textTruncateStyle,
        className,
      )}
      ref={ref}
      {...elemProps}
    >
      {children}
    </As>
  ),
);

Overline.displayName = 'Overline';

export default Overline;
