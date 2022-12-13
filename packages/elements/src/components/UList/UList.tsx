import React from 'react';
import cn from 'classnames';

import {
  uListStyle,
  uListTypeStyle,
  textSerifSizeStyle,
  textSizeStyle,
  textVariantStyle,
} from '../../styles';

export type UListSize = 'sm' | 'md';

export type UListType = 'disc' | 'dash' | 'none';

export type UListVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface UListProps extends React.HTMLAttributes<HTMLUListElement> {
  serif?: boolean;
  size?: UListSize;
  type?: UListType;
  variant?: UListVariant;
}

const UList: React.FC<UListProps & React.RefAttributes<HTMLUListElement>> =
  React.forwardRef(
    (
      {
        serif,
        size = 'md',
        type = 'disc',
        variant = 'dark',
        className,
        children,
        ...elemProps
      },
      ref,
    ) => (
      <ul
        className={cn(
          uListStyle,
          uListTypeStyle[type],
          serif ? textSerifSizeStyle[size] : textSizeStyle[size],
          textVariantStyle[variant],
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
