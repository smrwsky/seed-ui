import cn from 'classnames';
import { forwardRef, HTMLAttributes, KeyboardEvent, ReactNode } from 'react';

import { Icon } from '../Icon';

import * as S from './Tag.css';

export type TagVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-tertiary'
  | 'outline-info'
  | 'outline-success'
  | 'outline-warning'
  | 'outline-danger'
  | 'outline-light';

export type TagSize = 'sm' | 'md';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  deletable?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  size?: TagSize;
  variant?: TagVariant;
  children?: ReactNode;
}

const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      disabled,
      deletable,
      rounded,
      size = 'md',
      variant = 'primary',
      role,
      tabIndex,
      onClick,
      onKeyDown,
      children,
      ...props
    },
    ref,
  ): JSX.Element => {
    function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
      if (deletable && e.code === 'Delete') {
        e.currentTarget.click();
      }

      onKeyDown?.(e);
    }

    return (
      <div
        aria-disabled={disabled}
        className={cn(
          S.root,
          S.rootSize[size],
          S.rootVariant[variant],
          rounded && S.rootRounded,
        )}
        data-deletable={deletable}
        ref={ref}
        role={onClick && !role ? 'button' : role}
        tabIndex={onClick && typeof tabIndex === 'undefined' ? 0 : tabIndex}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <span className={S.text}>{children}</span>

        {deletable && (
          <Icon
            className={cn(
              S.icon,
              S.iconSize[size],
              S.iconVariant[variant],
              disabled && S.iconDisabled,
            )}
            name="x"
          />
        )}
      </div>
    );
  },
);

Tag.displayName = 'Tag';

export default Tag;
