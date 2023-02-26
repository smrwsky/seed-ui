import cn from 'classnames';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  FC,
  forwardRef,
  memo,
  Ref,
  RefAttributes,
} from 'react';

import * as S from './Link.css';

export type LinkVariant =
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

export interface LinkProps
  extends Omit<ButtonHTMLAttributes<HTMLElement>, 'type'>,
    AnchorHTMLAttributes<HTMLElement> {
  as?: ElementType;
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
    ref: Ref<HTMLElement>,
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
