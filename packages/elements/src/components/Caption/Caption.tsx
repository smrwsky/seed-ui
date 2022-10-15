import React from 'react';
import cn from 'classnames';
import { Atoms, atoms } from '@seed-ui/styles';

import { textNowrapStyle, textVariantStyle } from '../../styles';

import * as S from './Caption.css';

export type CaptionVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface CaptionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  nowrap?: boolean;
  textAlign?: Atoms['textAlign'];
  variant?: CaptionVariant;
}

const Caption: React.FC<CaptionProps & React.RefAttributes<HTMLElement>> =
  React.forwardRef(
    (
      {
        as: As = 'div',
        className,
        nowrap,
        textAlign,
        variant = 'dark',
        children,
        ...elemProps
      },
      ref,
    ) => (
      <As
        className={cn(
          S.root,
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

Caption.displayName = 'Caption';

export default Caption;
