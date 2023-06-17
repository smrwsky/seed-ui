import { Icon, IconType } from '@seed-ui/icons';
import cn from 'classnames';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  forwardRef,
  ReactElement,
} from 'react';

import * as S from './IconButton.css';

export type IconButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export type IconButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-tertiary'
  | 'outline-info'
  | 'outline-success'
  | 'outline-warning'
  | 'outline-danger'
  | 'outline-light'
  | 'outline-dark';

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

const IconButton = forwardRef<HTMLElement, IconButtonProps>(
  (
    {
      as: As = 'button',
      icon,
      iconType,
      rounded,
      size = 'md',
      type,
      variant = 'primary',
      className,
      children,
      ...elemProps
    },
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
