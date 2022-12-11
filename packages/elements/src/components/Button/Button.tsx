import React from 'react';
import cn from 'classnames';
import { Icon } from '@seed-ui/icons';

import * as S from './Button.css';

export type ButtonShape = 'stadium' | 'rectangle';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export type ButtonVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
  | 'primary-outline'
  | 'accent-outline'
  | 'secondary-outline'
  | 'info-outline'
  | 'success-outline'
  | 'warning-outline'
  | 'danger-outline'
  | 'light-outline'
  | 'dark-outline'
  | 'primary-overlay'
  | 'accent-overlay'
  | 'secondary-overlay'
  | 'info-overlay'
  | 'success-overlay'
  | 'warning-overlay'
  | 'danger-overlay'
  | 'light-overlay'
  | 'dark-overlay';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>,
    React.AnchorHTMLAttributes<HTMLElement>,
    React.RefAttributes<HTMLElement> {
  as?: React.ElementType;
  endIcon?: React.ReactElement;
  loading?: boolean;
  shape?: ButtonShape;
  size?: ButtonSize;
  startIcon?: React.ReactElement;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps &
  React.RefAttributes<HTMLElement>> = React.forwardRef(
  (
    {
      as: As = 'button',
      shape = 'rectangle',
      size = 'md',
      startIcon,
      endIcon,
      variant = 'primary',
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
        S.rootShape[shape],
        S.rootSize[size],
        S.rootVariant[variant],
        className,
      )}
      ref={ref}
      {...props}
    >
      {loading && (
        <Icon animation="spin" className={S.icon} name="loader-alt" />
      )}

      {!loading &&
        startIcon &&
        React.cloneElement(startIcon, {
          className: cn(S.icon, S.startIconSize[size]),
        })}

      {!loading && <span className={S.label}>{children}</span>}

      {!loading &&
        endIcon &&
        React.cloneElement(endIcon, {
          className: cn(S.icon, S.endIconSize[size]),
        })}
    </As>
  ),
);

Button.displayName = 'Button';

export default Button;
