import React from 'react';

export type ListItemProps = React.LiHTMLAttributes<HTMLLIElement>;

function ListItem(
  { children, ...elemProps }: ListItemProps,
  ref: React.Ref<HTMLLIElement>,
): JSX.Element {
  return (
    <li ref={ref} {...elemProps}>
      {children}
    </li>
  );
}

export default React.forwardRef(ListItem);
