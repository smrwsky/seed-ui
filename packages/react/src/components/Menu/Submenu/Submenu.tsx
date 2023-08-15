/* eslint-disable jsx-a11y/no-autofocus */
import {
  flip,
  shift,
  useFloating,
  offset as offsetMiddleware,
} from '@floating-ui/react-dom';
import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import {
  CSSProperties,
  FC,
  KeyboardEvent,
  MouseEvent as ReactMouseEvent,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Transition } from 'react-transition-group';

import { Icon } from '../../Icon';
import { Menu, MenuAutoFocus } from '../Menu';
import { MenuContext } from '../Menu.context';
import { MenuLink, MenuLinkProps } from '../MenuLink';
import { MenuListItem } from '../MenuListItem';

export interface SubMenuProps extends MenuLinkProps {
  icon?: ReactElement;
  label?: string;
  children?: ReactNode;
}

const INLINE_TRANSITION_TIMEOUT = {
  appear: 0,
  enter: 0,
  exit: 200,
};

const FLYOUT_TRANSITION_TIMEOUT = {
  appear: 0,
  enter: 200,
  exit: 200,
};

const MOUSEMOVE_HANDLER_DELAY = 20;

const Submenu: FC<SubMenuProps> = ({
  disabled,
  icon,
  label,
  onClick,
  onKeyDown,
  children,
  ...props
}) => {
  const { collapsed, indent, size, type, variant } = useContext(MenuContext);

  const { floating, reference, refs, x, y, update } = useFloating({
    strategy: 'absolute',
    placement: type === 'vertical' ? 'right-start' : 'bottom-start',
    middleware: [
      flip(),
      shift(),
      offsetMiddleware(
        type === 'vertical'
          ? {
              mainAxis: 8,
              alignmentAxis: -5,
            }
          : {
              mainAxis: 4,
            },
      ),
    ],
  });

  const [submenuOpened, setSubmenuOpened] = useState(false);
  const [autoFocus, setAutoFocus] = useState<MenuAutoFocus>('off');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const [anchorElement, setAnchorElement] = useState<HTMLAnchorElement | null>(
    null,
  );

  const popupMenuStyle: CSSProperties = useMemo(
    () =>
      type === 'horizontal'
        ? {
            top: y ? `${y}px` : 0,
            left: x ? `${x}px` : 0,
            minWidth: anchorElement?.offsetWidth,
          }
        : {
            top: y ? `${y}px` : 0,
            left: x ? `${x}px` : 0,
          },
    [anchorElement?.offsetWidth, type, x, y],
  );

  const renderAction = useCallback(() => {
    return type === 'vertical' ? (
      <Icon
        color={variant === 'dark' ? 'white' : 'neutral900'}
        fontSize="lg"
        name="chevron-right"
      />
    ) : (
      <Icon
        color={variant === 'dark' ? 'white' : 'neutral900'}
        flip={type === 'horizontal' || !submenuOpened ? 'vertical' : 'none'}
        fontSize="lg"
        name="chevron-up"
      />
    );
  }, [submenuOpened, type, variant]);

  const handleAutoFocusChange = useCallback((value: MenuAutoFocus) => {
    setAutoFocus(value);
  }, []);

  const handleHighlightedIndexChange = useCallback((value: number) => {
    setHighlightedIndex(value);
  }, []);

  const handleMenuItemClick = useCallback(
    (e: ReactMouseEvent<HTMLAnchorElement>) => {
      if (e.currentTarget.dataset.autofocus === 'true') {
        e.currentTarget.removeAttribute('data-autofocus');
        setAutoFocus('on');
      }

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

          if (type === 'inline') {
            setSubmenuOpened((prevState) => !prevState);
          } else {
            setSubmenuOpened((prevState) => {
              if ((prevState && highlightedIndex === -1) || !prevState) {
                setAutoFocus('on');
                return true;
              }

              return !prevState;
            });
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
    [highlightedIndex, onKeyDown, type],
  );

  useEffect(() => {
    reference(anchorElement);
  }, [anchorElement, reference]);

  useEffect(() => {
    if (submenuOpened) {
      update();
      return;
    }

    return () => {
      setHighlightedIndex(-1);
    };
  }, [submenuOpened, update]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    function handler(e: MouseEvent) {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        if (
          !anchorElement?.contains(e.target as Node) &&
          !refs.floating.current?.contains(e.target as Node)
        ) {
          setSubmenuOpened(false);
        }
      }, MOUSEMOVE_HANDLER_DELAY);
    }

    if (submenuOpened && type !== 'inline' && !disabled) {
      document.addEventListener('click', handler);
      document.addEventListener('mousemove', handler);
    }

    return () => {
      clearTimeout(timeout);
      document.removeEventListener('click', handler);
      document.removeEventListener('mousemove', handler);
    };
  }, [anchorElement, disabled, refs.floating, submenuOpened, type]);

  if (collapsed) {
    return null;
  }

  return (
    <MenuListItem>
      <MenuLink
        ActionComponent={renderAction}
        aria-expanded={submenuOpened}
        aria-haspopup
        disabled={disabled}
        icon={icon}
        ref={setAnchorElement}
        onClick={handleMenuItemClick}
        onKeyDown={handleMenuItemKeyDown}
        {...props}
      >
        {label}
      </MenuLink>

      {type === 'inline' ? (
        <Transition
          in={submenuOpened}
          mountOnEnter
          timeout={INLINE_TRANSITION_TIMEOUT}
          unmountOnExit
        >
          {(status) => (
            <Menu
              anchorElement={anchorElement}
              autoFocus={autoFocus}
              className={cn(
                atoms({
                  transition: 'collapse',
                  maxHeight: 0,
                  overflow: 'hidden',
                }),
                status === 'entered' &&
                  atoms({
                    maxHeight: 96,
                  }),
                status === 'exited' &&
                  atoms({
                    display: 'none',
                  }),
              )}
              indent={indent + 1}
              size={size}
              type="inline"
              variant={variant}
              onAutoFocusChange={handleAutoFocusChange}
            >
              {children}
            </Menu>
          )}
        </Transition>
      ) : (
        <Transition
          in={submenuOpened}
          mountOnEnter
          timeout={FLYOUT_TRANSITION_TIMEOUT}
          unmountOnExit
        >
          {(status) => (
            <Menu
              anchorElement={anchorElement}
              autoFocus={autoFocus}
              className={cn(
                atoms({
                  position: 'absolute',
                  maxWidth: 'xs',
                  maxHeight: 80,
                  borderRadius: 'md',
                  border: 'thin',
                  boxShadow: 'lg',
                  opacity: 0,
                  transition: 'fade',
                  zIndex: 'popover',
                }),
                variant === 'dark'
                  ? atoms({ borderColor: 'dark100' })
                  : atoms({ borderColor: 'neutral50' }),
                status === 'entered' &&
                  atoms({
                    opacity: 1,
                  }),
                status === 'exited' &&
                  atoms({
                    display: 'none',
                  }),
              )}
              highlightedIndex={highlightedIndex}
              ref={floating}
              size="sm"
              style={popupMenuStyle}
              variant={variant}
              onAutoFocusChange={handleAutoFocusChange}
              onHighlightedIndexChange={handleHighlightedIndexChange}
            >
              {children}
            </Menu>
          )}
        </Transition>
      )}
    </MenuListItem>
  );
};

Submenu.displayName = 'Submenu';

export { Submenu };
