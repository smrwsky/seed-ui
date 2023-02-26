import { Icon, IconType } from '@seed-ui/icons';
import cx from 'classnames';
import {
  FC,
  forwardRef,
  HTMLAttributes,
  memo,
  RefAttributes,
  useContext,
} from 'react';

import { MenuContext } from '../context';

import * as S from './MenuIcon.css';

export interface MenuIconProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  type?: IconType;
}

const MenuIcon: FC<MenuIconProps & RefAttributes<HTMLAnchorElement>> =
  forwardRef(({ className, name, type, ...props }, ref) => {
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
        ref={ref}
        size="sm"
        type={type}
        {...props}
      />
    );
  });

MenuIcon.displayName = 'MenuIcon';

export default memo(MenuIcon);
