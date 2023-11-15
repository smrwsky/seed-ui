import { Atoms, atoms, textTruncate } from '@seed-ui/styles';
import cn from 'classnames';
import React, { forwardRef, memo, useCallback } from 'react';

import { ClearIcon } from '../ClearIcon';

export type TagSize = 'sm' | 'md';

export interface TagProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> {
  bg?: Atoms['bg'];
  borderColor?: Atoms['borderColor'];
  color?: Atoms['color'];
  disabled?: boolean;
  removable?: boolean;
  rounded?: boolean;
  size?: TagSize;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
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

const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      bg = 'primary100',
      borderColor = 'transparent',
      color = 'primary700',
      className,
      disabled,
      removable,
      rounded,
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
    const isInteractive = (removable || Boolean(onClick)) && !disabled;

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (disabled) {
          return;
        }

        if (
          (e.code === 'Delete' && removable) ||
          ((e.code === 'Enter' || e.code === 'Space') && !removable)
        ) {
          e.currentTarget.click();
        }

        onKeyDown?.(e);
      },
      [disabled, removable, onKeyDown],
    );

    return (
      <span
        className={cn(
          atoms({
            display: 'inline-flex',
            alignItems: 'center',
            maxWidth: 'full',
            borderRadius: rounded ? 'full' : 'sm',
            border: 'thin',
            borderColor,
            color,
            fontFamily: 'primary',
            fontSize: 'xs',
            fontWeight: 'regular',
            letterSpacing: 'widest',
            lineHeight: 'snug',
            bg,
            transition: 'base',
            overflow: 'hidden',
            pointerEvents: removable ? 'none' : 'auto',

            ...(onClick && { cursor: 'pointer' }),

            ...(disabled && {
              cursor: 'not-allowed',
            }),
          }),
          sizeStyles[size],
          className,
        )}
        ref={ref}
        role={isInteractive && !role ? 'button' : role}
        tabIndex={
          isInteractive && typeof tabIndex === 'undefined' ? 0 : tabIndex
        }
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

        {removable && !disabled && (
          <ClearIcon
            className={atoms({
              ml: 1,
              pointerEvents: 'auto',
            })}
            data-testid="clear-icon"
            fontSize="sm"
          />
        )}
      </span>
    );
  },
);

Tag.displayName = 'Tag';

export default memo(Tag);
