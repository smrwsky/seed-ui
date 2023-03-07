import cn from 'classnames';
import { FC, HTMLAttributes, useContext } from 'react';

import { MenuContext } from '../context';

import * as S from './MenuAction.css';

export type MenuActionProps = HTMLAttributes<HTMLSpanElement>;

const MenuAction: FC<MenuActionProps> = ({ children, className, ...props }) => {
  const { collapsed } = useContext(MenuContext);

  return !collapsed ? (
    <span className={cn(S.root, className)} {...props}>
      {children}
    </span>
  ) : null;
};

MenuAction.displayName = 'MenuAction';

export default MenuAction;
