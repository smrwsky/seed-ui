import React from 'react';
import cn from 'classnames';
import { textBreakStyle, textTruncateStyle } from '@seed-ui/styles';

import * as S from './ListItem.css';

export type ListItemVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'alt'
  | 'default';

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
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
  ref: React.Ref<HTMLLIElement>,
): JSX.Element {
  return (
    <li
      className={cn(
        S.root({
          bold,
          variant,
        }),
        breakWord && textBreakStyle,
        truncate && textTruncateStyle,
        className,
      )}
      ref={ref}
      {...elemProps}
    >
      {children}
    </li>
  );
}

export default React.forwardRef(ListItem);
