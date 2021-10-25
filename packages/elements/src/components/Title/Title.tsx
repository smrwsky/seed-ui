import React from 'react';
import cx from 'classnames';

import { atoms, MarginProps } from '../../styles/atoms.css';

import * as S from './Title.css';

export type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TitleVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface TitleProps
  extends MarginProps,
    React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  serif?: boolean;
  size?: TitleSize;
  variant?: TitleVariant;
}

function Title(
  {
    as: As = 'h1',
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
  }: TitleProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element {
  return (
    <As
      ref={ref}
      className={cx(
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
      {...elemProps}
    >
      {children}
    </As>
  );
}

Title.displayName = 'Title';

export default React.forwardRef(Title);
