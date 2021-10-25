import React from 'react';
import cx from 'classnames';

import { listItemStyle } from '../../styles/helpers';

export type ListItemProps = React.LiHTMLAttributes<HTMLLIElement>;

function ListItem(
  { className, children, ...elemProps }: ListItemProps,
  ref: React.Ref<HTMLLIElement>,
): JSX.Element {
  return (
    <li ref={ref} {...elemProps}>
      {React.Children.map(children, (child, idx) =>
        idx < React.Children.count(children) - 1 && React.isValidElement(child)
          ? React.cloneElement(child, {
              className: cx(listItemStyle, child.props.className),
            })
          : child,
      )}
    </li>
  );
}

export default React.forwardRef(ListItem);
