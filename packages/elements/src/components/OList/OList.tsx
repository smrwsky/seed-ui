import React from 'react';
import cn from 'classnames';

import * as S from './OList.css';

export type OListFontFamily = 'primary' | 'secondary';

export type OListSize = 'sm' | 'md';

export type OListVariant =
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

export interface OListProps
  extends React.HTMLAttributes<HTMLOListElement>,
    React.RefAttributes<HTMLOListElement> {
  fontFamily?: OListFontFamily;
  size?: OListSize;
  bold?: boolean;
  variant?: OListVariant;
}

const OList: React.FC<OListProps> = React.forwardRef(
  (
    {
      fontFamily = 'secondary',
      size = 'md',
      bold,
      variant = 'default',
      className,
      children,
      ...elemProps
    },
    ref,
  ) => (
    <ol
      className={cn(
        S.root({
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
    </ol>
  ),
);

OList.displayName = 'OList';

export default OList;
