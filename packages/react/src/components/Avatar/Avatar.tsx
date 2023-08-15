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
  backgroundColor?: Atoms['backgroundColor'];

  /**
   * Image element to be rendered within the avatar.
   */
  children?: ReactElement;

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
   * Size of the avatar.
   */
  size?: AvatarSize;
}

const rootSizeStyle: Record<AvatarSize, string> = {
  xs: atoms({ size: 5 }),
  sm: atoms({ size: 6 }),
  md: atoms({ size: 8 }),
  lg: atoms({ size: 12 }),
  xl: atoms({ size: 16 }),
};

const iconSizeStyle: Record<AvatarSize, string> = {
  xs: atoms({ fontSize: 'sm' }),
  sm: atoms({ fontSize: 'md' }),
  md: atoms({ fontSize: '2xl' }),
  lg: atoms({ fontSize: '4xl' }),
  xl: atoms({ fontSize: '6xl' }),
};

const textSizeStyle: Record<AvatarSize, string> = {
  xs: atoms({ fontSize: 'xs' }),
  sm: atoms({ fontSize: 'xs' }),
  md: atoms({ fontSize: 'md' }),
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
      backgroundColor = 'primary400',
      icon,
      placeholder,
      size = 'md',
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <span
      className={cn(
        atoms({
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 'full',
          overflow: 'hidden',
          backgroundColor,
        }),
        rootSizeStyle[size],
        className,
      )}
      ref={ref}
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

export { Avatar };
