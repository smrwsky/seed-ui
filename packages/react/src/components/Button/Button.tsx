import cn from 'classnames';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  cloneElement,
  ElementType,
  forwardRef,
  isValidElement,
  ReactNode,
} from 'react';

import { Icon, IconProps } from '../Icon';

import * as S from './Button.css';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonVariant =
  | 'secondary'
  | 'primary'
  | 'tertiary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
  | 'outline-secondary'
  | 'outline-primary'
  | 'outline-tertiary'
  | 'outline-info'
  | 'outline-success'
  | 'outline-warning'
  | 'outline-danger'
  | 'outline-light'
  | 'outline-dark'
  | 'overlay-secondary'
  | 'overlay-primary'
  | 'overlay-tertiary'
  | 'overlay-info'
  | 'overlay-success'
  | 'overlay-warning'
  | 'overlay-danger'
  | 'overlay-light'
  | 'overlay-dark';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLElement>, 'type'>,
    AnchorHTMLAttributes<HTMLElement> {
  as?: ElementType;
  loading?: boolean;
  rounded?: boolean;
  size?: ButtonSize;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: ButtonVariant;
}

const Button = forwardRef<HTMLElement, ButtonProps>(
  (
    {
      as: As = 'button',
      rounded,
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
          color="currentColor"
          fontSize="lg"
          name="loader-alt"
        />
      )}

      {!loading &&
        isValidElement<IconProps>(startIcon) &&
        cloneElement(startIcon, {
          color: 'currentColor',
          fontSize: 'lg',
        })}

      {!loading && <span className={S.label}>{children}</span>}

      {!loading &&
        isValidElement<IconProps>(endIcon) &&
        cloneElement(endIcon, {
          color: 'currentColor',
          fontSize: 'lg',
        })}
    </As>
  ),
);

Button.displayName = 'Button';

export default Button;
