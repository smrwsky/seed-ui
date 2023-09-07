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
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'dark'
  | 'light'
  | 'secondary-outline'
  | 'primary-outline'
  | 'tertiary-outline'
  | 'success-outline'
  | 'warning-outline'
  | 'danger-outline'
  | 'dark-outline'
  | 'light-outline'
  | 'secondary-overlay'
  | 'primary-overlay'
  | 'tertiary-overlay'
  | 'success-overlay'
  | 'warning-overlay'
  | 'danger-overlay'
  | 'dark-overlay'
  | 'light-overlay';

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
    px: 2.5,
  }),
  md: atoms({
    minWidth: 28,
    height: 9,
    px: 3,
  }),
  lg: atoms({
    minWidth: 32,
    height: 11,
    px: 3.5,
  }),
};

const buttonVariantStyles = {
  'primary': atoms({
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
  'secondary': atoms({
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
  'tertiary': atoms({
    borderColor: 'transparent',
    color: { default: 'white', visited: 'white' },
    backgroundColor: {
      default: 'neutral500',
      hover: 'neutral400',
      active: 'neutral600',
      disabled: 'neutral200',
    },
    boxShadow: 'sm',
  }),
  'success': atoms({
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
  'warning': atoms({
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
  'danger': atoms({
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
  'dark': atoms({
    borderColor: 'transparent',
    color: { default: 'white', visited: 'white' },
    backgroundColor: {
      default: 'neutral900',
      hover: 'neutral600',
      active: 'neutral800',
      disabled: 'neutral200',
    },
    boxShadow: 'sm',
  }),
  'light': atoms({
    borderColor: 'transparent',
    color: { default: 'primary500', visited: 'primary500', disabled: 'white' },
    backgroundColor: {
      default: 'white',
      hover: 'light900',
      active: 'light700',
      disabled: 'neutral200',
    },
    boxShadow: { default: 'light', disabled: 'sm' },
  }),
  'primary-outline': atoms({
    borderColor: { default: 'primary200', disabled: 'neutral200' },
    color: {
      default: 'primary500',
      visited: 'primary500',
      disabled: 'neutral200',
    },
    backgroundColor: {
      default: 'transparent',
      hover: 'primary50',
      active: 'primary100',
      disabled: 'transparent',
    },
  }),
  'secondary-outline': atoms({
    borderColor: { default: 'secondary200', disabled: 'neutral200' },
    color: {
      default: 'secondary500',
      visited: 'secondary500',
      disabled: 'neutral200',
    },
    backgroundColor: {
      default: 'transparent',
      hover: 'secondary50',
      active: 'secondary100',
      disabled: 'transparent',
    },
  }),
  'tertiary-outline': atoms({
    borderColor: 'neutral200',
    color: {
      default: 'neutral500',
      visited: 'neutral500',
      disabled: 'neutral200',
    },
    backgroundColor: {
      default: 'transparent',
      hover: 'neutral50',
      active: 'neutral100',
      disabled: 'transparent',
    },
  }),
  'success-outline': atoms({
    borderColor: { default: 'success200', disabled: 'neutral200' },
    color: {
      default: 'success500',
      visited: 'success500',
      disabled: 'neutral200',
    },
    backgroundColor: {
      default: 'transparent',
      hover: 'success50',
      active: 'success100',
      disabled: 'transparent',
    },
  }),
  'warning-outline': atoms({
    borderColor: { default: 'warning200', disabled: 'neutral200' },
    color: {
      default: 'warning500',
      visited: 'warning500',
      disabled: 'neutral200',
    },
    backgroundColor: {
      default: 'transparent',
      hover: 'warning50',
      active: 'warning100',
      disabled: 'transparent',
    },
  }),
  'danger-outline': atoms({
    borderColor: { default: 'danger200', disabled: 'neutral200' },
    color: {
      default: 'danger500',
      visited: 'danger500',
      disabled: 'neutral200',
    },
    backgroundColor: {
      default: 'transparent',
      hover: 'danger50',
      active: 'danger100',
      disabled: 'transparent',
    },
  }),
  'dark-outline': atoms({
    borderColor: { default: 'neutral400', disabled: 'neutral200' },
    color: {
      default: 'neutral900',
      visited: 'neutral900',
      disabled: 'neutral200',
    },
    backgroundColor: {
      default: 'transparent',
      hover: 'neutral100',
      active: 'neutral200',
      disabled: 'transparent',
    },
  }),
  'light-outline': atoms({
    borderColor: { default: 'light600', disabled: 'neutral200' },
    color: {
      default: 'white',
      visited: 'white',
      disabled: 'neutral200',
    },
    backgroundColor: {
      default: 'transparent',
      hover: 'light200',
      active: 'light300',
      disabled: 'transparent',
    },
  }),
  'primary-overlay': atoms({
    borderColor: 'transparent',
    color: {
      default: 'primary500',
      visited: 'primary500',
      disabled: 'neutral200',
    },
    backgroundColor: {
      default: 'transparent',
      hover: 'primary50',
      active: 'primary100',
      disabled: 'transparent',
    },
  }),
  'secondary-overlay': atoms({
    borderColor: 'transparent',
    color: {
      default: 'secondary500',
      visited: 'secondary500',
      disabled: 'neutral200',
    },
    backgroundColor: {
      default: 'transparent',
      hover: 'secondary50',
      active: 'secondary100',
      disabled: 'transparent',
    },
  }),
  'tertiary-overlay': atoms({
    borderColor: 'transparent',
    color: {
      default: 'neutral500',
      visited: 'neutral500',
      disabled: 'neutral200',
    },
    backgroundColor: {
      default: 'transparent',
      hover: 'neutral50',
      active: 'neutral100',
      disabled: 'transparent',
    },
  }),
  'success-overlay': atoms({
    borderColor: 'transparent',
    color: {
      default: 'success500',
      visited: 'success500',
      disabled: 'neutral200',
    },
    backgroundColor: {
      default: 'transparent',
      hover: 'success50',
      active: 'success100',
      disabled: 'transparent',
    },
  }),
  'warning-overlay': atoms({
    borderColor: 'transparent',
    color: {
      default: 'warning500',
      visited: 'warning500',
      disabled: 'neutral200',
    },
    backgroundColor: {
      default: 'transparent',
      hover: 'warning50',
      active: 'warning100',
      disabled: 'transparent',
    },
  }),
  'danger-overlay': atoms({
    borderColor: 'transparent',
    color: {
      default: 'danger500',
      visited: 'danger500',
      disabled: 'neutral200',
    },
    backgroundColor: {
      default: 'transparent',
      hover: 'danger50',
      active: 'danger100',
      disabled: 'transparent',
    },
  }),
  'dark-overlay': atoms({
    borderColor: 'transparent',
    color: {
      default: 'neutral900',
      visited: 'neutral900',
      disabled: 'neutral200',
    },
    backgroundColor: {
      default: 'transparent',
      hover: 'neutral100',
      active: 'neutral200',
      disabled: 'transparent',
    },
  }),
  'light-overlay': atoms({
    borderColor: 'transparent',
    color: { default: 'white', visited: 'white', disabled: 'neutral200' },
    backgroundColor: {
      default: 'transparent',
      hover: 'light200',
      active: 'light300',
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
          cursor: {
            default: 'pointer',
            disabled: 'not-allowed',
          },
        }),
        buttonSizeStyles[size],
        buttonVariantStyles[variant],
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
          fontSize: 'lg',
        })}
    </As>
  ),
);

Button.displayName = 'Button';

export default Button;
