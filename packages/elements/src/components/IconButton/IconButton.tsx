import React from 'react';
import cx from 'classnames';

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
  | 'primary-outline'
  | 'accent-outline'
  | 'secondary-outline'
  | 'info-outline'
  | 'success-outline'
  | 'warning-outline'
  | 'danger-outline'
  | 'light-outline';

export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>,
    React.AnchorHTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
  type?: string;
  children?: React.ReactElement;
}

function IconButton(
  {
    as: As = 'button',
    size = 'md',
    variant = 'primary',
    type,
    children,
    ...elemProps
  }: IconButtonProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element {
  return (
    <As
      {...elemProps}
      ref={ref}
      className={cx(S.root, S.rootSize[size], S.rootVariant[variant])}
      type={As === 'button' && type == null ? 'button' : type}
    >
      {children}
    </As>
  );
}

IconButton.displayName = 'IconButton';

export default React.forwardRef(IconButton);
