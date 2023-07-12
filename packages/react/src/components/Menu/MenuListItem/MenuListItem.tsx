import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { FC, LiHTMLAttributes, useContext } from 'react';

import { MenuContext } from '../Menu.context';

export type MenuListItemProps = LiHTMLAttributes<HTMLLIElement>;

const MenuListItem: FC<MenuListItemProps> = ({
  children,
  className,
  role = 'none',
  ...props
}) => {
  const { collapsed } = useContext(MenuContext);

  return (
    <li
      className={cn(
        atoms({
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          m: 0,
        }),
        collapsed && atoms({ flex: 1 }),
        className,
      )}
      role={role}
      {...props}
    >
      {children}
    </li>
  );
};

MenuListItem.displayName = 'MenuListItem';

export { MenuListItem };
