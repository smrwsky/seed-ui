import React from 'react';
import cn from 'classnames';

import MenuContext from '../context';

import * as S from './MenuAction.css';

export type MenuActionProps = React.HTMLAttributes<HTMLSpanElement>;

const MenuAction: React.FC<
  MenuActionProps & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef(({ children, className, ...props }, ref) => {
  const { collapsed } = React.useContext(MenuContext);

  return !collapsed ? (
    <span className={cn(S.root, className)} ref={ref} {...props}>
      {children}
    </span>
  ) : null;
});

MenuAction.displayName = 'MenuAction';

export default MenuAction;
