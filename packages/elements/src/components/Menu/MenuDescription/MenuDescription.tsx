import React, { memo } from 'react';
import cn from 'classnames';

import MenuContext from '../context';

import * as S from './MenuDescription.css';

export type MenuDescriptionProps = React.HTMLAttributes<HTMLSpanElement>;

const MenuDescription: React.FC<
  MenuDescriptionProps & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef(({ children, className, ...props }, ref) => {
  const { collapsed, variant } = React.useContext(MenuContext);

  return !collapsed ? (
    <span
      className={cn(S.root, S.rootVariant[variant], className)}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  ) : null;
});

MenuDescription.displayName = 'MenuDescription';

export default memo(MenuDescription);
