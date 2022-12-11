import React from 'react';
import cn from 'classnames';

import { listItemStyle } from '../../styles';

export type ListItemProps = React.LiHTMLAttributes<HTMLLIElement>;

function ListItem(
  { className, children, ...elemProps }: ListItemProps,
  ref: React.Ref<HTMLLIElement>,
): JSX.Element {
  return (
    <li className={cn(listItemStyle, className)} ref={ref} {...elemProps}>
      {children}
    </li>
  );
}

export default React.forwardRef(ListItem);
