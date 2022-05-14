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
  size?: IconButtonSize;
  type?: string;
  variant?: IconButtonVariant;
}

function IconButton(
  {
    as: As = 'button',
    className,
    size = 'md',
    type,
    variant = 'primary',
    children,
    ...elemProps
  }: IconButtonProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element {
  return (
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
      {React.cloneElement(children, {
        className: cn(S.icon, children.props.className),
      })}
    </As>
  );
}

export default React.forwardRef(IconButton);
