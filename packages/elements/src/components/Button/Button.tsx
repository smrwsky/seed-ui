import React from 'react';
import cx from 'classnames';

import * as S from './Button.css';

export type ButtonShape = 'stadium' | 'rectangle';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'primary-outline'
  | 'accent-outline'
  | 'secondary-outline'
  | 'info-outline'
  | 'success-outline'
  | 'warning-outline'
  | 'danger-outline'
  | 'light-outline'
  | 'primary-overlay'
  | 'accent-overlay'
  | 'secondary-overlay'
  | 'info-overlay'
  | 'success-overlay'
  | 'warning-overlay'
  | 'danger-overlay'
  | 'light-overlay';

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>,
    React.AnchorHTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  shape?: ButtonShape;
  size?: ButtonSize;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  variant?: ButtonVariant;
}

function Button(
  {
    as: As = 'button',
    shape = 'rectangle',
    size = 'md',
    startIcon,
    endIcon,
    variant = 'primary',
    className,
    children,
    ...elemProps
  }: ButtonProps,
  ref: React.Ref<HTMLElement>,
) {
  return (
    <As
      {...elemProps}
      ref={ref}
      className={cx(
        S.root,
        S.rootShape[shape],
        S.rootSize[size],
        S.rootVariant[variant],
        className,
      )}
    >
      {startIcon &&
        React.cloneElement(startIcon, {
          className: S.startIcon,
        })}

      <span className={S.label}>{children}</span>

      {endIcon &&
        React.cloneElement(endIcon, {
          className: S.endIcon,
        })}
    </As>
  );
}

export default React.forwardRef(Button);
