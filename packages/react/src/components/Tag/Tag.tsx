import { Atoms, atoms, textTruncate } from '@seed-ui/styles';
import cn from 'classnames';
import {
  cloneElement,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  KeyboardEvent,
  ReactElement,
  ReactNode,
  useCallback,
} from 'react';

import { Icon } from '../Icon';

export type TagSize = 'sm' | 'md';

export interface TagProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  bg?: Atoms['bg'];
  borderColor?: Atoms['borderColor'];
  color?: Atoms['color'];
  removable?: boolean;
  removeIcon?: ReactElement;
  size?: TagSize;
  children?: ReactNode;
  onRemove?: () => void;
}

const sizeStyles = {
  sm: atoms({
    py: 0.5,
    px: 1,
  }),
  md: atoms({
    py: 1,
    px: 2,
  }),
};

const iconStyles = atoms({
  fontSize: 'sm',
  transition: 'fade',
  ml: 1,
  cursor: 'pointer',
  opacity: {
    default: 45,
    hover: 100,
  },
});

const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      bg = 'primary100',
      borderColor,
      color = 'primary700',
      className,
      removable = false,
      removeIcon,
      role,
      size = 'md',
      tabIndex,
      onClick,
      onKeyDown,
      children,
      ...props
    },
    ref,
  ): JSX.Element => {
    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLDivElement>) => {
        if (removable && e.code === 'Delete') {
          e.currentTarget.click();
        }

        onKeyDown?.(e);
      },
      [removable, onKeyDown],
    );

    return (
      <span
        className={cn(
          atoms({
            display: 'inline-flex',
            alignItems: 'center',
            maxWidth: 'full',
            borderRadius: 'tag',
            border: 'thin',
            borderColor: borderColor || bg,
            color,
            fontFamily: 'primary',
            fontSize: 'xs',
            fontWeight: 'regular',
            letterSpacing: 'widest',
            lineHeight: 'snug',
            bg,
            transition: 'base',
            overflow: 'hidden',
            cursor: onClick ? 'pointer' : 'default',
          }),
          sizeStyles[size],
          className,
        )}
        ref={ref}
        role={onClick && !role ? 'button' : role}
        tabIndex={onClick && typeof tabIndex === 'undefined' ? 0 : tabIndex}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <span
          className={cn(
            atoms({
              display: 'inline-block',
            }),
            textTruncate,
          )}
        >
          {children}
        </span>

        {removable &&
          isValidElement<HTMLAttributes<HTMLElement>>(removeIcon) &&
          cloneElement(removeIcon, {
            className: cn(iconStyles, removeIcon.props.className),
          })}

        {removable && !removeIcon && <Icon className={iconStyles} name="x" />}
      </span>
    );
  },
);

Tag.displayName = 'Tag';

export default Tag;
