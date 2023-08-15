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

import * as S from './IconButton.css';

export type IconButtonSize = 'sm' | 'md' | 'lg';

export type IconButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-tertiary'
  | 'outline-info'
  | 'outline-success'
  | 'outline-warning'
  | 'outline-danger'
  | 'outline-light'
  | 'outline-dark';

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
   * If true, the IconButton has rounded edges.
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
}

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
      rounded = false,
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
        S.root,
        S.rootSize[size],
        S.rootVariant[variant],
        (avatar || rounded) && S.rootRounded,
        className,
      )}
      ref={ref}
      type={As === 'button' && type == null ? 'button' : type}
    >
      {!avatar &&
        isValidElement<IconProps>(children) &&
        cloneElement(children, {
          className: cn(iconSizeStyle[size], children.props.className),
        })}

      {avatar &&
        isValidElement<AvatarProps>(children) &&
        cloneElement(children, {
          size: avatarSize[size],
        })}
    </As>
  ),
);

IconButton.displayName = 'IconButton';

export { IconButton };
