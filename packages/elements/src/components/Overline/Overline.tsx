import React from 'react';
import cn from 'classnames';
import { atoms, Atoms } from '@seed-ui/styles';

import { CaptionVariant } from '../Caption';
import { textVariantStyle } from '../../styles';

import * as S from './Overline.css';

export type OverlineVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface OverlineProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  textAlign?: Atoms['textAlign'];
  variant?: CaptionVariant;
}

const Overline: React.FC<OverlineProps &
  React.RefAttributes<HTMLElement>> = React.forwardRef(
  (
    {
      as: As = 'div',
      variant = 'dark',
      textAlign,
      className,
      children,
      ...elemProps
    },
    ref,
  ) => (
    <As
      className={cn(
        S.root,
        textVariantStyle[variant],
        atoms({ textAlign }),
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
