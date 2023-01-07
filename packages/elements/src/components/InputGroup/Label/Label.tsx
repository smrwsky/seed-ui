import React from 'react';
import cn from 'classnames';
import {
  Atoms,
  textBreakStyle,
  textTruncateStyle,
  atoms,
} from '@seed-ui/styles';

import * as S from './Label.css';

export type LabelSize = 'sm' | 'md';

export type LabelVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'alt'
  | 'default';

export interface LabelProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  breakWord?: boolean;
  size?: LabelSize;
  textAlign?: Atoms['textAlign'];
  textOverflow?: Atoms['textOverflow'];
  truncate?: boolean;
  variant?: LabelVariant;
  whiteSpace?: Atoms['whiteSpace'];
}

const Label: React.FC<LabelProps & React.RefAttributes<HTMLElement>> =
  React.forwardRef(
    (
      {
        as: As = 'div',
        breakWord,
        className,
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
          S.root({ size, variant }),
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

Label.displayName = 'Label';

export default Label;
