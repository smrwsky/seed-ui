import React, { memo } from 'react';
import cx from 'classnames';
import { Icon, IconType } from '@seed-ui/icons';

import MenuContext from '../context';

import * as S from './MenuIcon.css';

export interface MenuIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  type?: IconType;
}

const MenuIcon: React.FC<
  MenuIconProps & React.RefAttributes<HTMLAnchorElement>
> = React.forwardRef(({ className, name, type, ...props }, ref) => {
  const { collapsed, variant } = React.useContext(MenuContext);

  return (
    <Icon
      className={cx(
        S.root,
        S.rootVariant[variant],
        collapsed && S.rootCollapsed,
        className,
      )}
      name={name}
      ref={ref}
      size="sm"
      type={type}
      {...props}
    />
  );
});

MenuIcon.displayName = 'MenuIcon';

export default memo(MenuIcon);
