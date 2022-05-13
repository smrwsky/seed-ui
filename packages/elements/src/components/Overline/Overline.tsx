import React from 'react';
import cn from 'classnames';
import { atoms, MarginProps } from '@seed-ui/styles';

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

export interface OverlineProps
  extends MarginProps,
    React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  variant?: CaptionVariant;
}

function Overline(
  {
    as: As = 'div',
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    variant = 'dark',
    className,
    children,
    ...elemProps
  }: OverlineProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element {
  return (
    <As
      className={cn(
        S.root,
        textVariantStyle[variant],
        atoms({
          m,
          mb,
          ml,
          mr,
          mt,
          mx,
          my,
        }),
        className,
      )}
      ref={ref}
      {...elemProps}
    >
      {children}
    </As>
  );
}

export default React.forwardRef(Overline);
