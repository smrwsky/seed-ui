import React from 'react';
import cn from 'classnames';

import {
  textSerifSizeStyle,
  textSizeStyle,
  textVariantStyle,
  oListStyle,
} from '../../styles';

export type OListSize = 'sm' | 'md';

export type OListVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface OListProps extends React.OlHTMLAttributes<HTMLOListElement> {
  serif?: boolean;
  size?: OListSize;
  variant?: OListVariant;
}

const OList: React.FC<OListProps & React.RefAttributes<HTMLOListElement>> =
  React.forwardRef(
    (
      {
        serif,
        size = 'md',
        variant = 'dark',
        className,
        children,
        ...elemProps
      },
      ref,
    ) => (
      <ol
        className={cn(
          oListStyle,
          serif ? textSerifSizeStyle[size] : textSizeStyle[size],
          textVariantStyle[variant],
          className,
        )}
        ref={ref}
        {...elemProps}
      >
        {children}
      </ol>
    ),
  );

OList.displayName = 'OList';

export default OList;
