import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  FC,
  forwardRef,
  ReactElement,
  RefAttributes,
} from 'react';
import cn from 'classnames';
import { Icon, IconType } from '@seed-ui/icons';

import * as S from './IconButton.css';

export type IconButtonSize = 'sm' | 'md' | 'lg';

export type IconButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'alt'
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-tertiary'
  | 'outline-info'
  | 'outline-success'
  | 'outline-warning'
  | 'outline-danger'
  | 'outline-alt';

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLElement>, 'type'>,
    AnchorHTMLAttributes<HTMLElement> {
  as?: ElementType;
  icon?: string;
  iconType?: IconType;
  children?: ReactElement;
  rounded?: boolean;
  size?: IconButtonSize;
  type?: string;
  variant?: IconButtonVariant;
}

const IconButton: FC<IconButtonProps & RefAttributes<HTMLElement>> = forwardRef(
  (
    {
      as: As = 'button',
      icon,
      iconType,
      rounded,
      size = 'md',
      type,
      variant = 'secondary',
      className,
      children,
      ...elemProps
    }: IconButtonProps,
    ref,
  ) => (
    <As
      {...elemProps}
      className={cn(
        S.root,
        S.rootSize[size],
        S.rootVariant[variant],
        rounded && S.rootRounded,
        className,
      )}
      ref={ref}
      type={As === 'button' && type == null ? 'button' : type}
    >
      {children}
      {!children && icon && <Icon name={icon} type={iconType} />}
    </As>
  ),
);

IconButton.displayName = 'IconButton';

export default IconButton;
