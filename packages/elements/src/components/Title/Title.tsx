import React from 'react';
import cn from 'classnames';
import {
  Atoms,
  atoms,
  textBreakStyle,
  textTruncateStyle,
} from '@seed-ui/styles';

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

export interface TitleProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  breakWord?: boolean;
  fontFamily?: TitleFontFamily;
  size?: TitleSize;
  textAlign?: Atoms['textAlign'];
  textOverflow?: Atoms['textOverflow'];
  truncate?: boolean;
  variant?: TitleVariant;
  whiteSpace?: Atoms['whiteSpace'];
}

const Title: React.FC<TitleProps & React.RefAttributes<HTMLElement>> =
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

Title.displayName = 'Title';

export default Title;
