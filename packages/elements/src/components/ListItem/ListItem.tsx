import { textBreak, textTruncate } from '@seed-ui/styles';
import cn from 'classnames';
import { forwardRef, LiHTMLAttributes, Ref } from 'react';

import * as S from './ListItem.css';

export type ListItemVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
  | 'default';

export interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  bold?: boolean;
  breakWord?: boolean;
  truncate?: boolean;
  variant?: ListItemVariant;
}

function ListItem(
  {
    bold,
    breakWord,
    className,
    truncate,
    variant = 'default',
    children,
    ...elemProps
  }: ListItemProps,
  ref: Ref<HTMLLIElement>,
): JSX.Element {
  return (
    <li
      className={cn(
        S.root,
        bold && S.rootVariant[variant],
        bold && S.rootBold,
        breakWord && textBreak,
        truncate && textTruncate,
        className,
      )}
      ref={ref}
      {...elemProps}
    >
      {children}
    </li>
  );
}

export default forwardRef(ListItem);
