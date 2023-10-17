import { useFloatingTree, useListItem } from '@floating-ui/react';
import {
  FocusEvent,
  MouseEvent,
  ReactElement,
  useCallback,
  useContext,
  FC,
  ButtonHTMLAttributes,
} from 'react';

import { MenuContext } from '../Menu.context';
import { MenuButton } from '../MenuButton';

export interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  label: string;
  selected?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

const MenuItem: FC<MenuItemProps> = ({
  disabled,
  label,
  children,
  onClick,
  onFocus,
  ...props
}) => {
  const {
    activeIndex,
    collapsed,
    getItemProps,
    indent,
    size,
    setHasFocusInside,
    type,
    variant,
  } = useContext(MenuContext);

  const item = useListItem({ label: disabled ? null : label });
  const tree = useFloatingTree();
  const isActive = item.index === activeIndex;

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      tree?.events.emit('click');
    },
    [onClick, tree?.events],
  );

  const handleFocus = useCallback(
    (e: FocusEvent<HTMLButtonElement>) => {
      onFocus?.(e);
      setHasFocusInside(true);
    },
    [onFocus, setHasFocusInside],
  );

  return (
    <MenuButton
      {...props}
      active={isActive}
      collapsed={collapsed}
      indent={indent}
      ref={item.ref}
      size={size}
      tabIndex={isActive ? 0 : -1}
      type={type}
      variant={variant}
      {...getItemProps({
        disabled,
        onClick: handleClick,
        onFocus: handleFocus,
      })}
    >
      {children ?? label}
    </MenuButton>
  );
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
