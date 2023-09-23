import { atoms } from '@seed-ui/styles';
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
import { Text } from '../Text';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonVariant =
  | 'secondary'
  | 'primary'
  | 'outline'
  | 'plain'
  | 'success'
  | 'warning'
  | 'danger'
  | 'ghost';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLElement>, 'type'>,
    AnchorHTMLAttributes<HTMLElement> {
  as?: ElementType;
  loading?: boolean;
  size?: ButtonSize;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: ButtonVariant;
}

const buttonSizeStyles = {
  sm: atoms({
    minWidth: 24,
    height: 7,
    py: 0.5,
    px: 3,
  }),
  md: atoms({
    minWidth: 28,
    height: 9,
    py: 1,
    px: 4,
  }),
  lg: atoms({
    minWidth: 32,
    height: 11,
    py: 3,
    px: 6,
  }),
};

const buttonVariantStyles = {
  primary: atoms({
    borderColor: 'transparent',
    color: { default: 'white', visited: 'white' },
    backgroundColor: {
      default: 'primary500',
      hover: 'primary400',
      active: 'primary600',
      disabled: 'neutral200',
    },
    boxShadow: { default: 'primary', disabled: 'sm' },
  }),
  secondary: atoms({
    borderColor: 'transparent',
    color: { default: 'white', visited: 'white' },
    backgroundColor: {
      default: 'secondary500',
      hover: 'secondary400',
      active: 'secondary600',
      disabled: 'neutral200',
    },
    boxShadow: { default: 'secondary', disabled: 'sm' },
  }),
  outline: atoms({
    borderColor: { default: 'primary200', disabled: 'neutral200' },
    color: {
      default: 'primary500',
      visited: 'primary500',
      disabled: 'neutral200',
    },
    backgroundColor: {
      default: 'transparent',
      hover: 'primary100',
      active: 'primary200',
      disabled: 'transparent',
    },
  }),
  plain: atoms({
    borderColor: 'transparent',
    color: {
      default: 'neutral500',
      visited: 'neutral500',
      disabled: 'neutral200',
    },
    backgroundColor: {
      default: 'transparent',
      hover: 'neutral100',
      active: 'neutral200',
      disabled: 'transparent',
    },
  }),
  success: atoms({
    borderColor: 'transparent',
    color: { default: 'white', visited: 'white' },
    backgroundColor: {
      default: 'success500',
      hover: 'success400',
      active: 'success600',
      disabled: 'neutral200',
    },
    boxShadow: { default: 'success', disabled: 'sm' },
  }),
  warning: atoms({
    borderColor: 'transparent',
    color: { default: 'white', visited: 'white' },
    backgroundColor: {
      default: 'warning500',
      hover: 'warning400',
      active: 'warning600',
      disabled: 'neutral200',
    },
    boxShadow: { default: 'warning', disabled: 'sm' },
  }),
  danger: atoms({
    borderColor: 'transparent',
    color: { default: 'white', visited: 'white' },
    backgroundColor: {
      default: 'danger500',
      hover: 'danger400',
      active: 'danger600',
      disabled: 'neutral200',
    },
    boxShadow: { default: 'danger', disabled: 'sm' },
  }),
  ghost: atoms({
    borderColor: { default: 'light600', disabled: 'light400' },
    color: {
      default: 'white',
      visited: 'white',
      disabled: 'light400',
    },
    backgroundColor: {
      default: 'transparent',
      hover: 'light300',
      active: 'light400',
      disabled: 'transparent',
    },
  }),
};

const Button = forwardRef<HTMLElement, ButtonProps>(
  (
    {
      as: As = 'button',
      size = 'md',
      startIcon,
      endIcon,
      type,
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
        atoms({
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 'button',
          border: 'thin',
          fontFamily: 'primary',
          fontSize: 'sm',
          fontWeight: 'regular',
          letterSpacing: 'widest',
          lineHeight: 'snug',
          textAlign: 'center',
          textDecoration: { default: 'none', hover: 'none' },
          textTransform: 'uppercase',
          transition: { default: 'base', active: 'none' },
        }),
        buttonSizeStyles[size],
        buttonVariantStyles[variant],
        className,
      )}
      ref={ref}
      type={As === 'button' && type == null ? 'button' : type}
      {...props}
    >
      {loading && (
        <Icon
          animation="spin"
          className={atoms({
            mr: 2,
          })}
          color="currentColor"
          fontSize="lg"
          name="loader-alt"
        />
      )}

      {!loading &&
        isValidElement<IconProps>(startIcon) &&
        cloneElement(startIcon, {
          color: 'currentColor',
          className: cn(
            startIcon.props.className,
            atoms({
              mr: 2,
            }),
          ),
          fontSize: 'lg',
        })}

      {!loading && (
        <Text
          as="span"
          className={atoms({
            display: 'inline-block',
            maxWidth: 'full',
            pt: 0.5,
          })}
          truncate
        >
          {children}
        </Text>
      )}

      {!loading &&
        isValidElement<IconProps>(endIcon) &&
        cloneElement(endIcon, {
          color: 'currentColor',
          className: cn(
            endIcon.props.className,
            atoms({
              ml: 2,
            }),
          ),
          fontSize: 'lg',
        })}
    </As>
  ),
);

Button.displayName = 'Button';

export default Button;
