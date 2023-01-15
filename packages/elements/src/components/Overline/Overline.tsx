import React from 'react';
import cn from 'classnames';
import {
  atoms,
  Atoms,
  textBreakStyle,
  textTruncateStyle,
} from '@seed-ui/styles';

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

export interface OverlineProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  breakWord?: boolean;
  textAlign?: Atoms['textAlign'];
  textOverflow?: Atoms['textOverflow'];
  truncate?: boolean;
  variant?: OverlineVariant;
  whiteSpace?: Atoms['whiteSpace'];
}

const Overline: React.FC<OverlineProps & React.RefAttributes<HTMLElement>> =
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
          S.root({ variant }),
          breakWord && textBreakStyle,
          truncate && textTruncateStyle,
          atoms({ textAlign, textOverflow, whiteSpace }),
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
