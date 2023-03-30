import { textBreakStyle, textTruncateStyle } from '@seed-ui/styles';
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
  truncate?: boolean;
  variant?: LabelVariant;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      as: As = 'label',
      breakWord,
      className,
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
        S.root,
        S.rootSize[size],
        S.rootVariant[variant],
        breakWord && textBreakStyle,
        truncate && textTruncateStyle,
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
