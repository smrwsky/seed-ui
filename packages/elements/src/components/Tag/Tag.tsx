import React, { FC, forwardRef, RefAttributes } from 'react';
import cn from 'classnames';
import { Icon } from '@seed-ui/icons';

import * as S from './Tag.css';

export type TagVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'alt'
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-tertiary'
  | 'outline-info'
  | 'outline-success'
  | 'outline-warning'
  | 'outline-danger'
  | 'outline-alt';

export type TagSize = 'sm' | 'md';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  deletable?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  size?: TagSize;
  variant?: TagVariant;
  children?: React.ReactNode;
}

const Tag: FC<TagProps & RefAttributes<HTMLDivElement>> = forwardRef<
  HTMLDivElement,
  TagProps
>(
  (
    {
      disabled,
      deletable,
      rounded,
      size = 'md',
      variant = 'secondary',
      role,
      tabIndex,
      onClick,
      onKeyDown,
      children,
      ...props
    },
    ref,
  ): JSX.Element => {
    function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
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
        onClick={onClick}
        onKeyDown={handleKeyDown}
        ref={ref}
        role={onClick && !role ? 'button' : role}
        tabIndex={onClick && typeof tabIndex === 'undefined' ? 0 : tabIndex}
        {...props}
      >
        <div className={S.text}>{children}</div>

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
