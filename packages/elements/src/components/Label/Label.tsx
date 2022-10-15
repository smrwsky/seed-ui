import React from 'react';
import cn from 'classnames';
import { atoms, Atoms } from '@seed-ui/styles';

import { textNowrapStyle, textVariantStyle } from '../../styles';

import * as S from './Label.css';

export type LabelSize = 'sm' | 'md';

export type LabelVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface LabelProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  nowrap?: boolean;
  size?: LabelSize;
  textAlign?: Atoms['textAlign'];
  variant?: LabelVariant;
}

const Label: React.FC<LabelProps & React.RefAttributes<HTMLElement>> =
  React.forwardRef(
    (
      {
        as: As = 'div',
        nowrap,
        size = 'md',
        textAlign,
        variant = 'dark',
        className,
        children,
        ...elemProps
      },
      ref,
    ) => (
      <As
        className={cn(
          S.rootSize[size],
          textVariantStyle[variant],
          nowrap && textNowrapStyle,
          atoms({
            textAlign,
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
