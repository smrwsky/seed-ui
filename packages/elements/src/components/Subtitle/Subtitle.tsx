import React from 'react';
import cn from 'classnames';
import {
  Atoms,
  atoms,
  textBreakStyle,
  textTruncateStyle,
} from '@seed-ui/styles';

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
  | 'alt'
  | 'default';

export interface SubtitleProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  breakWord?: boolean;
  fontFamily?: SubtitleFontFamily;
  size?: SubtitleSize;
  textAlign?: Atoms['textAlign'];
  textOverflow?: Atoms['textOverflow'];
  truncate?: boolean;
  variant?: SubtitleVariant;
  whiteSpace?: Atoms['whiteSpace'];
}

const Subtitle: React.FC<SubtitleProps & React.RefAttributes<HTMLElement>> =
  React.forwardRef(
    (
      {
        as: As = 'h6',
        breakWord,
        className,
        fontFamily = 'secondary',
        size = 'md',
        textAlign,
        textOverflow,
        truncate,
        variant = 'default',
        whiteSpace,
        children,
        ...elemProps
      },
      ref,
    ) => (
      <As
        className={cn(
          S.root({
            fontFamily,
            size,
            variant,
          }),
          breakWord && textBreakStyle,
          truncate && textTruncateStyle,
          atoms({
            textAlign,
            textOverflow,
            whiteSpace,
          }),
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
