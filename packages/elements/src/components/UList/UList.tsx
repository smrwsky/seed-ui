import React from 'react';
import cn from 'classnames';

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

export interface UListProps extends React.HTMLAttributes<HTMLUListElement> {
  bold?: boolean;
  fontFamily?: UListFontFamily;
  size?: UListSize;
  type?: UListType;
  variant?: UListVariant;
}

const UList: React.FC<UListProps & React.RefAttributes<HTMLUListElement>> =
  React.forwardRef(
    (
      {
        bold,
        className,
        fontFamily = 'secondary',
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
          S.root({
            type,
            fontFamily,
            size,
            variant,
            bold,
          }),
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
