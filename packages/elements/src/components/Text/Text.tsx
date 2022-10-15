import React from 'react';
import cn from 'classnames';
import { atoms, Atoms } from '@seed-ui/styles';

import {
  textNowrapStyle,
  textSerifSizeStyle,
  textSizeStyle,
  textBoldStyle,
  textVariantStyle,
} from '../../styles';

export type TextSize = 'sm' | 'md';

export type TextVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  bold?: boolean;
  nowrap?: boolean;
  serif?: boolean;
  size?: TextSize;
  textAlign?: Atoms['textAlign'];
  variant?: TextVariant;
}

const Text: React.FC<TextProps & React.RefAttributes<HTMLElement>> =
  React.forwardRef(
    (
      {
        as: As = 'p',
        bold,
        nowrap,
        serif,
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
          bold && textBoldStyle,
          nowrap && textNowrapStyle,
          serif ? textSerifSizeStyle[size] : textSizeStyle[size],
          textVariantStyle[variant],
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

Text.displayName = 'Text';

export default Text;
