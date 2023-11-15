import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  cloneElement,
  ElementType,
  forwardRef,
  isValidElement,
  memo,
  ReactNode,
} from 'react';

import { Icon, IconProps } from '../Icon';
import { Text } from '../Text';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'ghost';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLElement>, 'type'>,
    AnchorHTMLAttributes<HTMLElement> {
  as?: ElementType;
  disabled?: boolean;
  loading?: boolean;
  rounded?: boolean;
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
    px: 2,
  }),
  md: atoms({
    minWidth: 28,
    height: 9,
    py: 1,
    px: 3,
  }),
  lg: atoms({
    minWidth: 32,
    height: 11,
    py: 3,
    px: 4,
  }),
};

const buttonVariantStyles = {
  primary: atoms({
    borderColor: 'transparent',
    color: 'white',
    backgroundColor: {
      default: 'primary500',
      hover: 'primary400',
      active: 'primary600',
      disabled: 'neutral200',
    },
    boxShadow: { default: 'primary', disabled: 'sm' },
  }),
  accent: atoms({
    borderColor: 'transparent',
    color: 'white',
    backgroundColor: {
      default: 'accent500',
      hover: 'accent400',
      active: 'accent600',
      disabled: 'neutral200',
    },
    boxShadow: { default: 'accent', disabled: 'sm' },
  }),
  secondary: atoms({
    borderColor: 'transparent',
    color: {
      default: 'neutral900',
      disabled: 'neutral300',
    },
    backgroundColor: {
      default: 'neutral100',
      hover: 'neutral200',
      active: 'neutral300',
      disabled: 'neutral50',
    },
  }),
  tertiary: atoms({
    borderColor: 'transparent',
    color: {
      default: 'primary500',
      disabled: 'neutral300',
    },
    backgroundColor: {
      default: 'transparent',
      hover: 'primary100',
      active: 'primary200',
      disabled: 'transparent',
    },
  }),
  success: atoms({
    borderColor: 'transparent',
    color: {
      default: 'success600',
      disabled: 'neutral300',
    },
    backgroundColor: {
      default: 'success100',
      hover: 'success200',
      active: 'success300',
      disabled: 'neutral50',
    },
  }),
  warning: atoms({
    borderColor: 'transparent',
    color: {
      default: 'warning600',
      disabled: 'neutral300',
    },
    backgroundColor: {
      default: 'warning100',
      hover: 'warning200',
      active: 'warning300',
      disabled: 'neutral50',
    },
  }),
  danger: atoms({
    borderColor: 'transparent',
    color: {
      default: 'danger600',
      disabled: 'neutral300',
    },
    backgroundColor: {
      default: 'danger100',
      hover: 'danger200',
      active: 'danger300',
      disabled: 'neutral50',
    },
  }),
  ghost: atoms({
    borderColor: { default: 'light600', disabled: 'light400' },
    color: {
      default: 'white',
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
      rounded = false,
      size = 'md',
      startIcon,
      endIcon,
      type,
      variant = 'primary',
      loading = false,
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
          borderRadius: rounded ? 'full' : 'md',
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
          name="loader"
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

export default memo(Button);
