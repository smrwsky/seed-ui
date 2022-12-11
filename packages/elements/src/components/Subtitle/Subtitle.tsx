import React from 'react';
import cn from 'classnames';
import { atoms, Atoms } from '@seed-ui/styles';

import * as S from './Subtitle.css';

export type SubtitleSize = 'sm' | 'md';

export type SubtitleVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface SubtitleProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  serif?: boolean;
  size?: SubtitleSize;
  textAlign?: Atoms['textAlign'];
  variant?: SubtitleVariant;
}

const Subtitle: React.FC<SubtitleProps &
  React.RefAttributes<HTMLElement>> = React.forwardRef(
  (
    {
      as: As = 'h6',
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
        serif ? S.rootSerifSize[size] : S.rootSize[size],
        S.rootVariant[variant],
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

Subtitle.displayName = 'Subtitle';

export default Subtitle;
