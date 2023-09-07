import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  cloneElement,
  ElementType,
  forwardRef,
  isValidElement,
  ReactElement,
} from 'react';

import { AvatarProps } from '../Avatar';
import { IconProps } from '../Icon';

export type IconButtonSize = 'sm' | 'md' | 'lg';

export type IconButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
  | 'primary-outline'
  | 'secondary-outline'
  | 'tertiary-outline'
  | 'success-outline'
  | 'warning-outline'
  | 'danger-outline'
  | 'light-outline'
  | 'dark-outline';

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLElement>, 'type'>,
    AnchorHTMLAttributes<HTMLElement> {
  /**
   * Specifies the element type to be used for rendering the IconButton.
   */
  as?: ElementType;

  /**
   * If true, the IconButton is displayed as an avatar.
   */
  avatar?: boolean;

  /**
   * The content to be rendered inside the IconButton.
   */
  children?: ReactElement;

  /**
   * The size of the IconButton.
   */
  size?: IconButtonSize;

  /**
   * The visual variant of the IconButton.
   */
  variant?: IconButtonVariant;
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
  'primary': atoms({
    borderColor: 'transparent',
    color: {
      default: 'primary500',
      visited: 'primary500',
      disabled: 'neutral200',
    },
    bg: {
      default: 'transparent',
      hover: 'primary50',
      active: 'primary100',
      disabled: 'transparent',
    },
  }),
  'secondary': atoms({
    borderColor: 'transparent',
    color: {
      default: 'secondary500',
      visited: 'secondary500',
      disabled: 'neutral200',
    },
    bg: {
      default: 'transparent',
      hover: 'secondary50',
      active: 'secondary100',
      disabled: 'transparent',
    },
  }),
  'tertiary': atoms({
    borderColor: 'transparent',
    color: {
      default: 'neutral500',
      visited: 'neutral500',
      disabled: 'neutral200',
    },
    bg: {
      default: 'transparent',
      hover: 'neutral50',
      active: 'neutral100',
      disabled: 'transparent',
    },
  }),
  'success': atoms({
    borderColor: 'transparent',
    color: {
      default: 'success500',
      visited: 'success500',
      disabled: 'neutral200',
    },
    bg: {
      default: 'transparent',
      hover: 'success50',
      active: 'success100',
      disabled: 'transparent',
    },
  }),
  'warning': atoms({
    borderColor: 'transparent',
    color: {
      default: 'warning500',
      visited: 'warning500',
      disabled: 'neutral200',
    },
    bg: {
      default: 'transparent',
      hover: 'warning50',
      active: 'warning100',
      disabled: 'transparent',
    },
  }),
  'danger': atoms({
    borderColor: 'transparent',
    color: {
      default: 'danger500',
      visited: 'danger500',
      disabled: 'neutral200',
    },
    bg: {
      default: 'transparent',
      hover: 'danger50',
      active: 'danger100',
      disabled: 'transparent',
    },
  }),
  'dark': atoms({
    borderColor: 'transparent',
    color: {
      default: 'neutral900',
      visited: 'neutral900',
      disabled: 'neutral200',
    },
    bg: {
      default: 'transparent',
      hover: 'neutral100',
      active: 'neutral200',
      disabled: 'transparent',
    },
  }),
  'light': atoms({
    borderColor: 'transparent',
    color: {
      default: 'white',
      visited: 'white',
      disabled: 'neutral200',
    },
    bg: {
      default: 'transparent',
      hover: 'light200',
      active: 'light300',
      disabled: 'transparent',
    },
  }),
  'primary-outline': atoms({
    borderColor: {
      default: 'primary200',
      disabled: 'neutral200',
    },
    color: {
      default: 'primary500',
      visited: 'primary500',
      disabled: 'neutral200',
    },
    bg: {
      default: 'transparent',
      hover: 'primary50',
      active: 'primary100',
      disabled: 'transparent',
    },
  }),
  'secondary-outline': atoms({
    borderColor: {
      default: 'secondary200',
      disabled: 'neutral200',
    },
    color: {
      default: 'secondary500',
      visited: 'secondary500',
      disabled: 'neutral200',
    },
    bg: {
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
    bg: {
      default: 'transparent',
      hover: 'neutral50',
      active: 'neutral100',
      disabled: 'transparent',
    },
  }),
  'success-outline': atoms({
    borderColor: {
      default: 'success200',
      disabled: 'neutral200',
    },
    color: {
      default: 'success500',
      visited: 'success500',
      disabled: 'neutral200',
    },
    bg: {
      default: 'transparent',
      hover: 'success50',
      active: 'success100',
      disabled: 'transparent',
    },
  }),
  'warning-outline': atoms({
    borderColor: {
      default: 'warning200',
      disabled: 'neutral200',
    },
    color: {
      default: 'warning500',
      visited: 'warning500',
      disabled: 'neutral200',
    },
    bg: {
      default: 'transparent',
      hover: 'warning50',
      active: 'warning100',
      disabled: 'transparent',
    },
  }),
  'danger-outline': atoms({
    borderColor: {
      default: 'danger200',
      disabled: 'neutral200',
    },
    color: {
      default: 'danger500',
      visited: 'danger500',
      disabled: 'neutral200',
    },
    bg: {
      default: 'transparent',
      hover: 'danger50',
      active: 'danger100',
      disabled: 'transparent',
    },
  }),
  'dark-outline': atoms({
    borderColor: {
      default: 'neutral400',
      disabled: 'neutral200',
    },
    color: {
      default: 'neutral900',
      visited: 'neutral900',
      disabled: 'neutral200',
    },
    bg: {
      default: 'transparent',
      hover: 'neutral100',
      active: 'neutral200',
      disabled: 'transparent',
    },
  }),
  'light-outline': atoms({
    borderColor: {
      default: 'light600',
      disabled: 'neutral200',
    },
    color: {
      default: 'white',
      visited: 'white',
      disabled: 'neutral200',
    },
    bg: {
      default: 'transparent',
      hover: 'light200',
      active: 'light300',
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
      avatar = false,
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
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'thin',
          borderRadius: 'full',
          lineHeight: 'none',
          transition: { default: 'base', active: 'none' },
          p: 0,
          cursor: { default: 'pointer', disabled: 'not-allowed' },
        }),
        buttonSizeStyle[size],
        buttonVariantStyle[variant],
        className,
      )}
      ref={ref}
      type={As === 'button' && type == null ? 'button' : type}
    >
      {avatar &&
        isValidElement<AvatarProps>(children) &&
        cloneElement(children, {
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

export { IconButton };
