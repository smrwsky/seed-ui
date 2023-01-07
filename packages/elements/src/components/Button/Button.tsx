import React from 'react';
import cn from 'classnames';
import { Icon, IconType } from '@seed-ui/icons';

import * as S from './Button.css';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export type ButtonVariant =
  | 'secondary'
  | 'primary'
  | 'tertiary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'alt'
  | 'outline-secondary'
  | 'outline-primary'
  | 'outline-tertiary'
  | 'outline-info'
  | 'outline-success'
  | 'outline-warning'
  | 'outline-danger'
  | 'outline-alt'
  | 'overlay-secondary'
  | 'overlay-primary'
  | 'overlay-tertiary'
  | 'overlay-info'
  | 'overlay-success'
  | 'overlay-warning'
  | 'overlay-danger'
  | 'overlay-alt';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>,
    React.AnchorHTMLAttributes<HTMLElement>,
    React.RefAttributes<HTMLElement> {
  as?: React.ElementType;
  loading?: boolean;
  rounded?: boolean;
  size?: ButtonSize;
  startIcon?: string;
  startIconType?: IconType;
  endIcon?: string;
  endIconType?: IconType;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps & React.RefAttributes<HTMLElement>> =
  React.forwardRef(
    (
      {
        as: As = 'button',
        rounded,
        size = 'md',
        startIcon,
        startIconType,
        endIcon,
        endIconType,
        variant = 'secondary',
        loading,
        className,
        children,
        ...props
      },
      ref,
    ) => (
      <As
        className={cn(
          S.root,
          S.rootSize[size],
          S.rootVariant[variant],
          rounded && S.rootRounded,
          className,
        )}
        ref={ref}
        {...props}
      >
        {loading && (
          <Icon
            animation="spin"
            className={cn(S.icon, S.iconSize[size])}
            name="loader-alt"
          />
        )}

        {!loading && startIcon && (
          <Icon
            className={cn(S.icon, S.iconSize[size])}
            name={startIcon}
            type={startIconType}
          />
        )}

        {!loading && <span className={S.label}>{children}</span>}

        {!loading && endIcon && (
          <Icon
            className={cn(S.icon, S.iconSize[size])}
            name={endIcon}
            type={endIconType}
          />
        )}
      </As>
    ),
  );

Button.displayName = 'Button';

export default Button;
