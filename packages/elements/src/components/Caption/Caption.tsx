import { textBreakStyle, textTruncateStyle } from '@seed-ui/styles';
import cn from 'classnames';
import { ElementType, forwardRef, HTMLAttributes } from 'react';

import * as S from './Caption.css';

export type CaptionVariant =
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

export interface CaptionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  breakWord?: boolean;
  truncate?: boolean;
  variant?: CaptionVariant;
}

const Caption = forwardRef<HTMLElement, CaptionProps>(
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

Caption.displayName = 'Caption';

export default Caption;
