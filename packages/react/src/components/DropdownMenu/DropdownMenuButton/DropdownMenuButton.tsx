'use client';

import { IconProps } from '../../Icon';
import { atoms, textTruncate } from '@seed-ui/styles';
import cn from 'classnames';
import React, { cloneElement, forwardRef, isValidElement, memo } from 'react';

export interface DropdownMenuButtonButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'children' | 'type'
  > {
  disabled?: boolean;
  selected?: boolean;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  children: string;
}

const DropdownMenuButton = forwardRef<
  HTMLButtonElement,
  DropdownMenuButtonButtonProps
>(({ children, disabled, selected, startIcon, endIcon, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      atoms({
        position: 'relative',
        flex: 1,
        display: 'flex',
        minWidth: 36,
        borderRadius: 'md',
        alignItems: 'center',
        transition: 'base',
        textAlign: 'start',
        color: { default: 'neutral900', disabled: 'neutral300' },
        bg: {
          hover: 'neutral100',
          active: 'neutral200',
          disabled: 'transparent',
        },
        px: 1,
        py: 0.5,
        mx: 1,
        my: 0.5,

        ...(selected && {
          color: { default: 'primary500', disabled: 'neutral300' },
          bg: {
            default: 'primary100',
            hover: 'primary200',
            active: 'primary300',
            disabled: 'transparent',
          },
        }),
      }),
    )}
    disabled={disabled}
    role="menuitem"
    {...props}
  >
    {isValidElement<IconProps>(startIcon) &&
      cloneElement(startIcon, {
        className: cn(
          atoms({
            color: 'neutral500',
            fontSize: 'xl',
            mx: 1,

            ...(selected && {
              color: 'primary500',
            }),

            ...(disabled && {
              color: 'inherit',
            }),
          }),
          startIcon.props.className,
        ),
      })}

    <span
      className={cn(
        atoms({
          display: 'block',
          flex: 1,
          fontSize: 'md',
          lineHeight: 'normal',
          mx: 1,

          ...(selected && {
            fontWeight: 'semiBold',
          }),
        }),
        textTruncate,
      )}
    >
      {children}
    </span>

    {isValidElement<IconProps>(endIcon) &&
      cloneElement(endIcon, {
        className: cn(
          atoms({
            fontSize: 'xl',
            mx: 1,
          }),
          endIcon.props.className,
        ),
      })}
  </button>
));

DropdownMenuButton.displayName = 'DropdownMenuButton';

export default memo(DropdownMenuButton);
