import React from 'react';
import cn from 'classnames';
import { Icon } from '@seed-ui/icons';

import * as S from './Tag.css';

export type TagVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'primary-outline'
  | 'accent-outline'
  | 'secondary-outline'
  | 'info-outline'
  | 'success-outline'
  | 'warning-outline'
  | 'danger-outline';

export type TagSize = 'sm' | 'md';

export type TagShape = 'rectangle' | 'stadium';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  disabled?: boolean;
  onDelete?: () => void;
  shape?: TagShape;
  size?: TagSize;
  variant?: TagVariant;
}

function Tag({
  disabled,
  shape = 'rectangle',
  size = 'md',
  variant = 'primary',
  role,
  tabIndex,
  onDelete,
  onClick,
  children,
  ...elementProps
}: TagProps): JSX.Element {
  function handleClickDelete(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    e.stopPropagation();

    if (!disabled) {
      onDelete?.();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLElement>) {
    if (e.key === 'Delete') {
      onDelete?.();
    }
  }

  return (
    <div
      {...elementProps}
      aria-disabled={disabled}
      className={cn(
        S.root,
        S.rootSize[size],
        S.rootShape[shape],
        S.rootVariant[variant],
      )}
      data-clickable={Boolean(onClick)}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={(onClick || onDelete) && !role ? 'button' : role}
      tabIndex={
        (onClick || onDelete) && typeof tabIndex === 'undefined' ? 0 : tabIndex
      }
    >
      <div className={S.text}>{children}</div>

      {onDelete && (
        <Icon
          className={cn(
            S.icon,
            S.iconSize[size],
            S.iconVariant[variant],
            disabled && S.iconDisabled,
          )}
          name="x"
          onClick={(e) => e.stopPropagation()}
          onMouseDown={handleClickDelete}
        />
      )}
    </div>
  );
}

export default Tag;
