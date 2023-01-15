import React from 'react';
import cn from 'classnames';
import {
  atoms,
  Atoms,
  textBreakStyle,
  textTruncateStyle,
} from '@seed-ui/styles';

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

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  bold?: boolean;
  breakWord?: boolean;
  fontFamily?: TextFontFamily;
  size?: TextSize;
  textAlign?: Atoms['textAlign'];
  textOverflow?: Atoms['textOverflow'];
  truncate?: boolean;
  variant?: TextVariant;
  whiteSpace?: Atoms['whiteSpace'];
}

const Text: React.FC<TextProps & React.RefAttributes<HTMLElement>> =
  React.forwardRef(
    (
      {
        as: As = 'p',
        bold,
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
          S.root({ bold, fontFamily, size, variant }),
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

Text.displayName = 'Text';

export default Text;
