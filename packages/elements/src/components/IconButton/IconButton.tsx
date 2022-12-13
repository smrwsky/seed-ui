import React from 'react';
import cn from 'classnames';

import * as S from './IconButton.css';

export type IconButtonSize = 'sm' | 'md' | 'lg';

export type IconButtonVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
  | 'primary-outline'
  | 'accent-outline'
  | 'secondary-outline'
  | 'info-outline'
  | 'success-outline'
  | 'warning-outline'
  | 'danger-outline'
  | 'light-outline'
  | 'dark-outline';

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>,
    React.AnchorHTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  children: React.ReactElement;
  rounded?: boolean;
  size?: IconButtonSize;
  type?: string;
  variant?: IconButtonVariant;
}

const IconButton: React.FC<IconButtonProps & React.RefAttributes<HTMLElement>> =
  React.forwardRef(
    (
      {
        as: As = 'button',
        rounded,
        size = 'md',
        type,
        variant = 'primary',
        className,
        children,
        ...elemProps
      }: IconButtonProps,
      ref,
    ) => (
      <As
        {...elemProps}
        className={cn(
          S.root,
          S.rootSize[size],
          S.rootVariant[variant],
          className,
        )}
        ref={ref}
        type={As === 'button' && type == null ? 'button' : type}
      >
        {children}
      </As>
    ),
  );

IconButton.displayName = 'IconButton';

export default IconButton;
