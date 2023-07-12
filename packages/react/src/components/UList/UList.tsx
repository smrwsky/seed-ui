import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

import * as S from './UList.css';

export type UListType = 'disc' | 'dash' | 'none';

export type UListFontFamily = 'primary' | 'secondary';

export type UListSize = 'sm' | 'md';

export type UListVariant =
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

export interface UListProps extends HTMLAttributes<HTMLUListElement> {
  bold?: boolean;
  fontFamily?: UListFontFamily;
  size?: UListSize;
  type?: UListType;
  variant?: UListVariant;
}

const UList = forwardRef<HTMLUListElement, UListProps>(
  (
    {
      bold,
      className,
      fontFamily = 'primary',
      size = 'md',
      type = 'disc',
      variant = 'default',
      children,
      ...elemProps
    },
    ref,
  ) => (
    <ul
      className={cn(
        S.root,
        S.rootType[type],
        fontFamily === 'primary'
          ? S.rootPrimarySize[size]
          : S.rootSecondarySize[size],
        S.rootVariant[variant],
        bold && S.rootBold,
        className,
      )}
      ref={ref}
      {...elemProps}
    >
      {children}
    </ul>
  ),
);

UList.displayName = 'UList';

export default UList;