import cn from 'classnames';
import { FC, HTMLAttributes, memo, useContext } from 'react';

import { MenuContext } from '../context';

import * as S from './MenuLabel.css';

export type MenuLabelProps = HTMLAttributes<HTMLSpanElement>;

const MenuLabel: FC<MenuLabelProps> = ({ children, className, ...props }) => {
  const { collapsed } = useContext(MenuContext);

  return (
    <span
      className={cn(S.root, collapsed && S.rootCollapsed, className)}
      {...props}
    >
      {children}
    </span>
  );
};

MenuLabel.displayName = 'MenuLabel';

export default memo(MenuLabel);
