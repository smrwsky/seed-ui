import cn from 'classnames';
import {
  FC,
  forwardRef,
  HTMLAttributes,
  RefAttributes,
  useContext,
} from 'react';

import { MenuContext } from '../context';

import * as S from './MenuAction.css';

export type MenuActionProps = HTMLAttributes<HTMLSpanElement>;

const MenuAction: FC<MenuActionProps & RefAttributes<HTMLSpanElement>> =
  forwardRef(({ children, className, ...props }, ref) => {
    const { collapsed } = useContext(MenuContext);

    return !collapsed ? (
      <span className={cn(S.root, className)} ref={ref} {...props}>
        {children}
      </span>
    ) : null;
  });

MenuAction.displayName = 'MenuAction';

export default MenuAction;
