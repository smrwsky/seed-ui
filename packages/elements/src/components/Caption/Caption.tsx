import React from 'react';
import cn from 'classnames';
import {
  Atoms,
  atoms,
  textBreakStyle,
  textTruncateStyle,
} from '@seed-ui/styles';

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

export interface CaptionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  breakWord?: boolean;
  textAlign?: Atoms['textAlign'];
  textOverflow?: Atoms['textOverflow'];
  truncate?: boolean;
  variant?: CaptionVariant;
  whiteSpace?: Atoms['whiteSpace'];
}

const Caption: React.FC<CaptionProps & React.RefAttributes<HTMLElement>> =
  React.forwardRef(
    (
      {
        as: As = 'div',
        breakWord,
        className,
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

Caption.displayName = 'Caption';

export default Caption;
