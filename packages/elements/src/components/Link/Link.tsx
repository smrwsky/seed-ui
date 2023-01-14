import React, { FC, forwardRef, memo, RefAttributes } from 'react';
import cn from 'classnames';

import * as S from './Link.css';

export type LinkVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'alt'
  | 'default';

export interface LinkProps
  extends Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>,
    React.AnchorHTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  bold?: boolean;
  variant?: LinkVariant;
}

const Link: FC<LinkProps & RefAttributes<HTMLElement>> = forwardRef(
  (
    {
      as: As = 'a',
      bold,
      variant = 'secondary',
      className,
      children,
      ...elemProps
    }: LinkProps,
    ref: React.Ref<HTMLElement>,
  ) => (
    <As
      className={cn(S.root({ bold, variant }), className)}
      ref={ref}
      {...elemProps}
    >
      {children}
    </As>
  ),
);

Link.displayName = 'Link';

export default memo(Link);
