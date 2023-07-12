import { textBreak, textTruncate } from '@seed-ui/styles';
import cn from 'classnames';
import { ElementType, forwardRef, HTMLAttributes } from 'react';

import * as S from './Title.css';

export type TitleFontFamily = 'primary' | 'secondary';

export type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TitleVariant =
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

export interface TitleProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  breakWord?: boolean;
  fontFamily?: TitleFontFamily;
  size?: TitleSize;
  truncate?: boolean;
  variant?: TitleVariant;
}

const Title = forwardRef<HTMLElement, TitleProps>(
  (
    {
      as: As = 'h6',
      breakWord,
      className,
      fontFamily = 'primary',
      size = 'md',
      truncate,
      variant = 'default',
      children,
      ...elemProps
    },
    ref,
  ) => (
    <As
      className={cn(
        fontFamily === 'primary'
          ? S.rootPrimarySize[size]
          : S.rootSecondarySize[size],
        S.rootVariant[variant],
        breakWord && textBreak,
        truncate && textTruncate,
        className,
      )}
      ref={ref}
      {...elemProps}
    >
      {children}
    </As>
  ),
);

Title.displayName = 'Title';

export default Title;
