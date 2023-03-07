/* eslint-disable jsx-a11y/no-autofocus */
import { Icon, IconType } from '@seed-ui/icons';
import cn from 'classnames';
import {
  FC,
  KeyboardEvent,
  MouseEvent as ReactMouseEvent,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Animation } from '../../Animation';
import Menu, { MenuAutoFocus } from '../Menu';
import { MenuAction } from '../MenuAction';
import { MenuIcon } from '../MenuIcon';
import { MenuLabel } from '../MenuLabel';
import { MenuLink, MenuLinkProps } from '../MenuLink';
import { MenuListItem } from '../MenuListItem';
import { PopupMenu } from '../PopupMenu';
import { MenuContext } from '../context';

import * as S from './SubMenu.css';

export interface SubMenuProps extends MenuLinkProps {
  icon?: string;
  iconType?: IconType;
  label?: string;
  children?: ReactNode;
}

const SubMenu: FC<SubMenuProps> = ({
  disabled,
  icon,
  iconType,
  label,
  onClick,
  onKeyDown,
  children,
  ...props
}) => {
  const [submenuOpened, setSubmenuOpened] = useState(false);
  const [autoFocus, setAutoFocus] = useState<MenuAutoFocus>('off');
  const [activeIndex, setActiveIndex] = useState(-1);

  const [anchorElement, setAnchorElement] = useState<HTMLAnchorElement | null>(
    null,
  );

  const menuRef = useRef<HTMLUListElement>(null);
  const { collapsed, indent, size, type, variant } = useContext(MenuContext);

  const handleAutoFocusChange = useCallback((value: MenuAutoFocus) => {
    setAutoFocus(value);
  }, []);

  const handleActiveIndexChange = useCallback((value: number) => {
    setActiveIndex(value);
  }, []);

  const handleMenuItemClick = useCallback(
    (e: ReactMouseEvent<HTMLAnchorElement>) => {
      setSubmenuOpened((prevState) => !prevState);
      onClick?.(e);
    },
    [onClick],
  );

  const handleMenuItemKeyDown = useCallback(
    (e: KeyboardEvent<HTMLAnchorElement>) => {
      switch (e.code) {
        case 'Enter':
        case 'Space': {
          e.preventDefault();

          if (type === 'horizontal') {
            setSubmenuOpened((prevState) => {
              if (prevState && activeIndex === -1) {
                setAutoFocus('on');
                return prevState;
              }

              return !prevState;
            });
          }

          if (type === 'horizontal' && submenuOpened && activeIndex !== -1) {
            setSubmenuOpened(true);
            setAutoFocus('on');
          }

          if (type === 'inline') {
            setSubmenuOpened((prevState) => !prevState);
          }

          if (type === 'vertical') {
            setSubmenuOpened((prevState) => !prevState);
            setAutoFocus('on');
          }

          break;
        }

        case 'ArrowRight': {
          if (type === 'vertical') {
            e.preventDefault();
            setSubmenuOpened(true);
            setAutoFocus('on');
          }

          break;
        }

        case 'ArrowDown': {
          if (type === 'horizontal') {
            e.preventDefault();
            setSubmenuOpened(true);
            setAutoFocus('on');
          }

          break;
        }

        case 'ArrowUp': {
          if (type === 'horizontal') {
            e.preventDefault();
            setSubmenuOpened(true);
            setAutoFocus('reversed');
          }

          break;
        }

        default: {
          break;
        }
      }

      onKeyDown?.(e);
    },
    [activeIndex, onKeyDown, submenuOpened, type],
  );

  const handleOpenChange = useCallback((nextOpen: boolean) => {
    setSubmenuOpened(nextOpen);
  }, []);

  useEffect(() => {
    if (!submenuOpened) {
      setActiveIndex(-1);
    }
  }, [submenuOpened]);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (
        !anchorElement?.contains(e.target as Node) &&
        !menuRef.current?.contains(e.target as Node)
      ) {
        setSubmenuOpened(false);
      }
    }

    if (type !== 'inline' && submenuOpened && !disabled) {
      document.addEventListener('click', handler);
    }

    return () => {
      document.removeEventListener('click', handler);
    };
  }, [anchorElement, disabled, submenuOpened, type]);

  if (collapsed) {
    return null;
  }

  return (
    <MenuListItem>
      <MenuLink
        aria-expanded={submenuOpened}
        aria-haspopup
        disabled={disabled}
        ref={setAnchorElement}
        onClick={handleMenuItemClick}
        onKeyDown={handleMenuItemKeyDown}
        {...props}
      >
        {icon && <MenuIcon name={icon} type={iconType} />}

        <MenuLabel>{label}</MenuLabel>

        <MenuAction>
          {type === 'vertical' ? (
            <Icon name="chevron-right" size="sm" />
          ) : (
            <Icon
              flip={
                type === 'horizontal' || !submenuOpened ? 'vertical' : 'none'
              }
              name="chevron-up"
              size="sm"
            />
          )}
        </MenuAction>
      </MenuLink>

      {type === 'inline' ? (
        <Animation in={submenuOpened} type="slide">
          <Menu
            anchorElement={anchorElement}
            autoFocus={autoFocus}
            className={cn(S.menu, S.menuVariant[variant])}
            indent={indent + 1}
            ref={menuRef}
            size={size}
            type="inline"
            variant={variant === 'dark' ? 'dark' : 'secondary'}
            onAutoFocusChange={handleAutoFocusChange}
          >
            {children}
          </Menu>
        </Animation>
      ) : (
        <PopupMenu
          activeIndex={activeIndex}
          anchorElement={anchorElement}
          autoFocus={autoFocus}
          open={submenuOpened}
          placement={type === 'vertical' ? 'right-start' : 'bottom-start'}
          ref={menuRef}
          trigger="manual"
          onActiveIndexChange={handleActiveIndexChange}
          onAutoFocusChange={handleAutoFocusChange}
          onOpenChange={handleOpenChange}
        >
          {children}
        </PopupMenu>
      )}
    </MenuListItem>
  );
};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
