import {
  atoms,
  Atoms,
  textBreakStyle,
  textTruncateStyle,
} from '@seed-ui/styles';
import cn from 'classnames';
import {
  ElementType,
  FC,
  forwardRef,
  HTMLAttributes,
  RefAttributes,
} from 'react';

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

export interface OverlineProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  breakWord?: boolean;
  textAlign?: Atoms['textAlign'];
  textOverflow?: Atoms['textOverflow'];
  truncate?: boolean;
  variant?: OverlineVariant;
  whiteSpace?: Atoms['whiteSpace'];
}

const Overline: FC<OverlineProps & RefAttributes<HTMLElement>> = forwardRef(
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
