import cn from 'classnames';
import {
  FC,
  forwardRef,
  HTMLAttributes,
  memo,
  RefAttributes,
  useContext,
} from 'react';

import { MenuContext } from '../context';

import * as S from './MenuLabel.css';

export type MenuLabelProps = HTMLAttributes<HTMLSpanElement>;

const MenuLabel: FC<MenuLabelProps & RefAttributes<HTMLSpanElement>> =
  forwardRef(({ children, className, ...props }, ref) => {
    const { collapsed } = useContext(MenuContext);

    return (
      <span
        className={cn(S.root, collapsed && S.rootCollapsed, className)}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    );
  });

MenuLabel.displayName = 'MenuLabel';

export default memo(MenuLabel);
