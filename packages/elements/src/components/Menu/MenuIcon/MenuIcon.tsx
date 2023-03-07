import { Icon, IconType } from '@seed-ui/icons';
import cx from 'classnames';
import { FC, HTMLAttributes, memo, useContext } from 'react';

import { MenuContext } from '../context';

import * as S from './MenuIcon.css';

export interface MenuIconProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  type?: IconType;
}

const MenuIcon: FC<MenuIconProps> = ({ className, name, type, ...props }) => {
  const { collapsed, variant } = useContext(MenuContext);

  return (
    <Icon
      className={cx(
        S.root,
        S.rootVariant[variant],
        collapsed && S.rootCollapsed,
        className,
      )}
      name={name}
      size="sm"
      type={type}
      {...props}
    />
  );
};

MenuIcon.displayName = 'MenuIcon';

export default memo(MenuIcon);
