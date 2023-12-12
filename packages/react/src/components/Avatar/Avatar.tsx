import { atoms, Atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { startCase } from 'lodash';
import {
  cloneElement,
  FC,
  forwardRef,
  HTMLAttributes,
  ImgHTMLAttributes,
  isValidElement,
  ReactElement,
} from 'react';

import { IconProps } from '../Icon';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Background color for the avatar.
   */
  bg?: Atoms['backgroundColor'];

  /**
   * Image element to be rendered within the avatar.
   */
  children?: ReactElement | null;

  /**
   * Additional class name(s) to apply to the avatar component.
   */
  className?: string;

  /**
   * Icon to be rendered within the avatar.
   */
  icon?: ReactElement;

  /**
   * Placeholder text to display in case the avatar content is not available.
   */
  placeholder?: string;

  /**
   * Sets the border-radius of the avatar to round.
   */
  rounded?: boolean;

  /**
   * Size of the avatar.
   */
  size?: AvatarSize;
}

const rootSizeStyle: Record<AvatarSize, Atoms> = {
  xs: { size: 5, borderRadius: 'sm' },
  sm: { size: 6, borderRadius: 'sm' },
  md: { size: 8, borderRadius: 'sm' },
  lg: { size: 12, borderRadius: 'md' },
  xl: { size: 16, borderRadius: 'lg' },
};

const iconSizeStyle: Record<AvatarSize, string> = {
  xs: atoms({ fontSize: 'sm' }),
  sm: atoms({ fontSize: 'md' }),
  md: atoms({ fontSize: 'xl' }),
  lg: atoms({ fontSize: '3xl' }),
  xl: atoms({ fontSize: '5xl' }),
};

const textSizeStyle: Record<AvatarSize, string> = {
  xs: atoms({ fontSize: 'xs' }),
  sm: atoms({ fontSize: 'xs' }),
  md: atoms({ fontSize: 'sm' }),
  lg: atoms({ fontSize: '2xl' }),
  xl: atoms({ fontSize: '4xl' }),
};

function formatText(str = ''): string {
  return startCase(str)
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
}

const Avatar: FC<AvatarProps> = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      bg = 'primary400',
      icon,
      placeholder,
      rounded = false,
      size = 'md',
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <span
      ref={ref}
      className={cn(
        atoms({
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          bg,
          ...rootSizeStyle[size],
          ...(rounded && { borderRadius: 'full' }),
        }),
        className,
      )}
      {...props}
    >
      {!children && !icon && (
        <span
          className={cn(
            atoms({
              position: 'absolute',
              color: 'white',
              fontFamily: 'primary',
              fontWeight: 'semiBold',
              lineHeight: 'none',
              whiteSpace: 'nowrap',
            }),
            textSizeStyle[size],
          )}
        >
          {formatText(placeholder)}
        </span>
      )}

      {!children &&
        icon &&
        isValidElement<IconProps>(icon) &&
        cloneElement(icon, {
          className: cn(
            atoms({ position: 'absolute', color: 'white' }),
            iconSizeStyle[size],
            icon.props.className,
          ),
        })}

      {children &&
        isValidElement<ImgHTMLAttributes<HTMLImageElement>>(children) &&
        cloneElement(children, {
          className: cn(
            atoms({
              position: 'absolute',
              width: 'full',
              height: 'full',
              objectFit: 'cover',
            }),
            children.props.className,
          ),
        })}
    </span>
  ),
);

Avatar.displayName = 'Avatar';

export default Avatar;
