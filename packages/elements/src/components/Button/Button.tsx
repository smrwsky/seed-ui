import React from 'react';
import cn from 'classnames';
import { Icon } from '@seed-ui/icons';

import { assignStyleVariables, formatSizing, SizingValue } from '../../styles';

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
  maxWidth?: SizingValue;
  minWidth?: SizingValue;
  shape?: ButtonShape;
  size?: ButtonSize;
  startIcon?: React.ReactElement;
  variant?: ButtonVariant;
  width?: SizingValue;
}

const Button = React.forwardRef(
  (
    {
      as: As = 'button',
      shape = 'rectangle',
      size = 'md',
      startIcon,
      style,
      endIcon,
      maxWidth,
      minWidth,
      variant = 'primary',
      width,
      loading,
      className,
      children,
      ...props
    }: ButtonProps,
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
      style={{
        ...assignStyleVariables({
          [S.buttonMaxWidthVar]: formatSizing(maxWidth),
          [S.buttonMinWidthVar]: formatSizing(minWidth),
          [S.buttonWidthVar]: formatSizing(width),
        }),
        ...style,
      }}
      {...props}
    >
      {loading && (
        <Icon animation="spin" className={S.icon} name="loader-alt" />
      )}

      {!loading &&
        startIcon &&
        React.cloneElement(startIcon, {
          className: cn(S.icon, S.startIcon),
        })}

      {!loading && <span className={S.label}>{children}</span>}

      {!loading &&
        endIcon &&
        React.cloneElement(endIcon, {
          className: cn(S.icon, S.endIcon),
        })}
    </As>
  ),
);

Button.displayName = 'Button';

export default Button;
