import React from 'react';
import cn from 'classnames';
import { atoms, MarginProps } from '@seed-ui/styles';

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

export interface SubtitleProps
  extends MarginProps,
    React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  serif?: boolean;
  size?: SubtitleSize;
  variant?: SubtitleVariant;
}

function Subtitle(
  {
    as: As = 'h6',
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    serif,
    size = 'md',
    variant = 'dark',
    className,
    children,
    ...elemProps
  }: SubtitleProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element {
  return (
    <As
      className={cn(
        serif ? S.rootSerifSize[size] : S.rootSize[size],
        S.rootVariant[variant],
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

export default React.forwardRef(Subtitle);
