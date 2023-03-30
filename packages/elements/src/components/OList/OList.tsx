import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

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

export interface OListProps extends HTMLAttributes<HTMLOListElement> {
  fontFamily?: OListFontFamily;
  size?: OListSize;
  bold?: boolean;
  variant?: OListVariant;
}

const OList = forwardRef<HTMLOListElement, OListProps>(
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
        S.root,
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
    </ol>
  ),
);

OList.displayName = 'OList';

export default OList;
