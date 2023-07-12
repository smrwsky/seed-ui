import { textBreak, textTruncate } from '@seed-ui/styles';
import cn from 'classnames';
import { ElementType, forwardRef, HTMLAttributes } from 'react';

import * as S from './Text.css';

export type TextFontFamily = 'primary' | 'secondary';

export type TextSize = 'sm' | 'md';

export type TextVariant =
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

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  bold?: boolean;
  breakWord?: boolean;
  fontFamily?: TextFontFamily;
  size?: TextSize;
  truncate?: boolean;
  variant?: TextVariant;
}

const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      as: As = 'p',
      bold,
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
        bold && S.rootBold,
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

Text.displayName = 'Text';

export default Text;
