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
  | 'outline'
  | 'plain'
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
  as?: ElementType;

  /**
   * If true, the IconButton will expect an Avatar as its child.
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
  primary: atoms({
    borderColor: 'transparent',
    color: {
      default: 'primary500',
      visited: 'primary500',
      disabled: 'neutral200',
    },
    bg: {
      default: 'primary50',
      hover: 'primary100',
      active: 'primary200',
      disabled: 'neutral50',
    },
  }),
  secondary: atoms({
    borderColor: 'transparent',
    color: {
      default: 'secondary500',
      visited: 'secondary500',
      disabled: 'neutral200',
    },
    bg: {
      default: 'secondary50',
      hover: 'secondary100',
      active: 'secondary200',
      disabled: 'neutral50',
    },
  }),
  outline: atoms({
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
      visited: 'success500',
      disabled: 'neutral200',
    },
    bg: {
      default: 'success50',
      hover: 'success100',
      active: 'success200',
      disabled: 'neutral50',
    },
  }),
  warning: atoms({
    borderColor: 'transparent',
    color: {
      default: 'warning500',
      visited: 'warning500',
      disabled: 'neutral200',
    },
    bg: {
      default: 'warning50',
      hover: 'warning100',
      active: 'warning200',
      disabled: 'neutral50',
    },
  }),
  danger: atoms({
    borderColor: 'transparent',
    color: {
      default: 'danger500',
      visited: 'danger500',
      disabled: 'neutral200',
    },
    bg: {
      default: 'danger50',
      hover: 'danger100',
      active: 'danger200',
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
      visited: 'white',
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
          borderRadius: 'iconButton',
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
