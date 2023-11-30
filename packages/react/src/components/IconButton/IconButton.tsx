import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  cloneElement,
  forwardRef,
  isValidElement,
} from 'react';

import { AvatarProps } from '../Avatar';
import { IconProps } from '../Icon';

export type IconButtonSize = 'sm' | 'md' | 'lg';

export type IconButtonVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'ghost';

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLElement>, 'type'>,
    AnchorHTMLAttributes<HTMLElement> {
  /**
   * Specifies the element type to be used for rendering the IconButton.
   */
  as?: React.ElementType;

  /**
   * Specifies the avatar element to be rendered within the IconButton.
   */
  avatar?: React.ReactElement;

  /**
   * If true, the IconButton will be disabled.
   */
  disabled?: boolean;

  /**
   * If true, the IconButton will have a circle shape.
   */
  rounded?: boolean;

  /**
   * The size of the IconButton.
   */
  size?: IconButtonSize;

  /**
   * The visual variant of the IconButton.
   */
  variant?: IconButtonVariant;

  /**
   * The content to be rendered inside the IconButton.
   */
  children?: React.ReactElement;
}

const buttonSizeStyle: Record<IconButtonSize, string> = {
  sm: atoms({
    size: 7,
  }),
  md: atoms({
    size: 9,
  }),
  lg: atoms({
    size: 11,
  }),
};

const buttonVariantStyle: Record<IconButtonVariant, string> = {
  primary: atoms({
    borderColor: 'transparent',
    color: {
      default: 'primary500',
      disabled: 'neutral300',
    },
    bg: {
      default: 'primary100',
      hover: 'primary200',
      active: 'primary300',
      disabled: 'neutral50',
    },
  }),
  accent: atoms({
    borderColor: 'transparent',
    color: {
      default: 'accent500',
      disabled: 'neutral300',
    },
    bg: {
      default: 'accent100',
      hover: 'accent200',
      active: 'accent300',
      disabled: 'neutral50',
    },
  }),
  secondary: atoms({
    borderColor: 'transparent',
    color: {
      default: 'neutral900',
      disabled: 'neutral300',
    },
    bg: {
      default: 'neutral100',
      hover: 'neutral200',
      active: 'neutral300',
      disabled: 'neutral50',
    },
  }),
  tertiary: atoms({
    borderColor: 'transparent',
    color: {
      default: 'neutral900',
      disabled: 'neutral300',
    },
    bg: {
      default: 'transparent',
      hover: 'neutral100',
      active: 'neutral200',
      disabled: 'transparent',
    },
  }),
  success: atoms({
    borderColor: 'transparent',
    color: {
      default: 'success500',
      disabled: 'neutral300',
    },
    bg: {
      default: 'success100',
      hover: 'success200',
      active: 'success300',
      disabled: 'neutral50',
    },
  }),
  warning: atoms({
    borderColor: 'transparent',
    color: {
      default: 'warning500',
      disabled: 'neutral300',
    },
    bg: {
      default: 'warning100',
      hover: 'warning200',
      active: 'warning300',
      disabled: 'neutral50',
    },
  }),
  danger: atoms({
    borderColor: 'transparent',
    color: {
      default: 'danger500',
      disabled: 'neutral300',
    },
    bg: {
      default: 'danger100',
      hover: 'danger200',
      active: 'danger300',
      disabled: 'neutral50',
    },
  }),
  ghost: atoms({
    borderColor: {
      default: 'light600',
      disabled: 'light400',
    },
    color: {
      default: 'white',
      disabled: 'light400',
    },
    bg: {
      default: 'transparent',
      hover: 'light300',
      active: 'light400',
      disabled: 'transparent',
    },
  }),
};

const avatarSize: Record<IconButtonSize, AvatarProps['size']> = {
  sm: 'xs',
  md: 'sm',
  lg: 'md',
};

const iconSizeStyle: Record<IconButtonSize, string> = {
  sm: atoms({ fontSize: 'md' }),
  md: atoms({ fontSize: 'xl' }),
  lg: atoms({ fontSize: '2xl' }),
};

const IconButton = forwardRef<HTMLElement, IconButtonProps>(
  (
    {
      as: As = 'button',
      avatar,
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
        atoms({
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'thin',
          borderRadius: rounded ? 'full' : 'md',
          lineHeight: 'none',
          transition: { default: 'base', active: 'none' },
        }),
        buttonSizeStyle[size],
        buttonVariantStyle[variant],
        className,
      )}
      ref={ref}
      type={As === 'button' && type == null ? 'button' : type}
    >
      {avatar &&
        isValidElement<AvatarProps>(avatar) &&
        cloneElement(avatar, {
          rounded,
          size: avatarSize[size],
        })}

      {!avatar &&
        isValidElement<IconProps>(children) &&
        cloneElement(children, {
          className: cn(iconSizeStyle[size], children.props.className),
        })}
    </As>
  ),
);

IconButton.displayName = 'IconButton';

export default IconButton;
