import React, { forwardRef } from 'react';
import cn from 'classnames';

import * as S from './MenuList.css';

export type MenuListProps = React.HTMLAttributes<HTMLUListElement>;

function MenuList(
  {
    children,
    className,
    role = 'menu',
    tabIndex = -1,
    ...elemProps
  }: MenuListProps,
  ref: React.Ref<HTMLUListElement>,
): JSX.Element {
  return (
    <ul
      className={cn(S.root, className)}
      ref={ref}
      role={role}
      tabIndex={tabIndex}
      {...elemProps}
    >
      {children}
    </ul>
  );
}

export default forwardRef(MenuList);
