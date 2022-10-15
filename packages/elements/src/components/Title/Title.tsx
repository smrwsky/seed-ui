import React from 'react';
import cn from 'classnames';
import { Atoms, atoms } from '@seed-ui/styles';

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

export interface TitleProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  serif?: boolean;
  size?: TitleSize;
  textAlign?: Atoms['textAlign'];
  variant?: TitleVariant;
}

const Title: React.FC<TitleProps & React.RefAttributes<HTMLElement>> =
  React.forwardRef(
    (
      {
        as: As = 'h1',
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

Title.displayName = 'Title';

export default Title;
