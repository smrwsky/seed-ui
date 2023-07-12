import { Atoms, textBreak, textTruncate } from '@seed-ui/styles';
import cn from 'classnames';
import { ElementType, forwardRef, HTMLAttributes } from 'react';

import * as S from './Subtitle.css';

export type SubtitleFontFamily = 'primary' | 'secondary';

export type SubtitleSize = 'sm' | 'md';

export type SubtitleVariant =
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

export interface SubtitleProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  breakWord?: boolean;
  fontFamily?: SubtitleFontFamily;
  size?: SubtitleSize;
  textAlign?: Atoms['textAlign'];
  textOverflow?: Atoms['textOverflow'];
  truncate?: boolean;
  variant?: SubtitleVariant;
  whiteSpace?: Atoms['whiteSpace'];
}

const Subtitle = forwardRef<HTMLElement, SubtitleProps>(
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

Subtitle.displayName = 'Subtitle';

export default Subtitle;
