import {
  Atoms,
  textBreakStyle,
  textTruncateStyle,
  atoms,
} from '@seed-ui/styles';
import cn from 'classnames';
import { ElementType, forwardRef, LabelHTMLAttributes } from 'react';

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
  | 'light'
  | 'dark'
  | 'default';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  as?: ElementType;
  breakWord?: boolean;
  size?: LabelSize;
  textAlign?: Atoms['textAlign'];
  textOverflow?: Atoms['textOverflow'];
  truncate?: boolean;
  variant?: LabelVariant;
  whiteSpace?: Atoms['whiteSpace'];
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      as: As = 'label',
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
