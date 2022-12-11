import React, { memo } from 'react';
import cn from 'classnames';

import MenuContext from '../context';

import * as S from './MenuLabel.css';

export type MenuLabelProps = React.HTMLAttributes<HTMLSpanElement>;

const MenuLabel: React.FC<
  MenuLabelProps & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef(({ children, className, ...props }, ref) => {
  const { collapsed, size } = React.useContext(MenuContext);

  return (
    <span
      className={cn(
        S.root,
        S.rootSize[size],
        collapsed && S.rootCollapsed,
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  );
});

MenuLabel.displayName = 'MenuLabel';

export default memo(MenuLabel);
