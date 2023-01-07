import React, {
  Children,
  FC,
  KeyboardEvent,
  RefAttributes,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import mergeRefs from '../../utils/merge-refs';

import MenuContext, {
  MenuContextType,
  MenuSize,
  MenuType,
  MenuVariant,
} from './context';
import MenuList from './MenuList';

export type MenuAutoFocus = 'on' | 'reversed' | 'off';

export interface MenuProps
  extends React.HTMLAttributes<HTMLUListElement>,
    RefAttributes<HTMLUListElement> {
  activeIndex?: number;
  anchorElement?: HTMLElement | null;
  autoFocus?: MenuAutoFocus;
  collapsed?: boolean;
  defaultActiveIndex?: number;
  indent?: number;
  type?: MenuType;
  size?: MenuSize;
  variant?: MenuVariant;
  onActiveIndexChange?: (index: number) => void;
  onAutoFocusChange?: (autoFocus: MenuAutoFocus) => void;
}

const Menu: FC<MenuProps> = React.forwardRef(
  (
    {
      activeIndex,
      anchorElement,
      autoFocus,
      collapsed = false,
      defaultActiveIndex,
      indent = 0,
      type = 'vertical',
      size = 'md',
      variant = 'secondary',
      onActiveIndexChange,
      onAutoFocusChange,
      children,
      ...props
    },
    ref,
  ) => {
    const [activeIndexState, setActiveIndexState] = useState(-1);

    const [autoFocusState, setAutoFocusState] = useState<MenuAutoFocus>('off');

    const [focused, setFocused] = useState(false);
    const [numberOfItems] = useState(() => Children.count(children));

    const context: MenuContextType = useMemo(
      () => ({ collapsed, type, size, variant, indent }),
      [collapsed, type, size, variant, indent],
    );

    const menuListRef = useRef<HTMLUListElement>(null);
    const mergedRef = mergeRefs(menuListRef, ref);

    const isActiveIndexUncontrolled =
      typeof activeIndex === 'undefined' && !onActiveIndexChange;

    const isAutoFocusUncontrolled =
      typeof autoFocus === 'undefined' && !onAutoFocusChange;

    const changeActiveIndex = useCallback(
      (nextVal: number) => {
        if (isActiveIndexUncontrolled) {
          setActiveIndexState(nextVal);
        } else {
          onActiveIndexChange?.(nextVal);
        }
      },
      [isActiveIndexUncontrolled, onActiveIndexChange],
    );

    const changeAutoFocus = useCallback(
      (nextVal: MenuAutoFocus) => {
        if (isAutoFocusUncontrolled) {
          setAutoFocusState(nextVal);
        } else {
          onAutoFocusChange?.(nextVal);
        }
      },
      [isAutoFocusUncontrolled, onAutoFocusChange],
    );

    const handleMenuItemBlur = useCallback(() => {
      setFocused(false);
      changeActiveIndex(-1);
    }, [changeActiveIndex]);

    const handleMenuItemFocus = useCallback(
      (e: React.FocusEvent<HTMLUListElement>) => {
        const idx = Number(e.currentTarget.dataset.index);
        if (!Number.isNaN(idx)) {
          changeActiveIndex(idx);
        }

        setFocused(true);
      },
      [changeActiveIndex],
    );

    const moveToItem = useCallback(
      (index: number, scrollIntoView = true) => {
        const menuItem = menuListRef.current?.querySelector<HTMLElement>(
          `[data-index="${index}"]`,
        );

        if (scrollIntoView) {
          menuItem?.scrollIntoView({ block: 'nearest' });
        }

        if (
          type === 'horizontal' &&
          menuItem?.getAttribute('aria-haspopup') === 'true' &&
          menuItem?.getAttribute('aria-expanded') !== 'true'
        ) {
          menuItem?.click();
        }

        menuItem?.focus();
      },
      [type],
    );

    const closePopup = useCallback(
      (e: KeyboardEvent<HTMLAnchorElement>) => {
        if (
          e.currentTarget.getAttribute('aria-expanded') === 'true' &&
          type !== 'inline'
        ) {
          e.currentTarget.click();
        }
      },
      [type],
    );

    const moveToNextParentItem = useCallback(() => {
      const index = Number(anchorElement?.dataset.index);
      const parentEl = anchorElement?.parentElement?.parentElement;

      if (
        !Number.isNaN(index) &&
        parentEl?.getAttribute('role') === 'menubar'
      ) {
        const numOfChildren = parentEl?.children.length ?? 0;
        const nextIdx = index >= numOfChildren - 1 ? 0 : index + 1;

        const nextEl = parentEl?.querySelector<HTMLElement>(
          `[role="menuitem"][data-index="${nextIdx}"]`,
        );

        changeActiveIndex(-1);

        if (type !== 'inline') {
          anchorElement?.click();
          nextEl?.click();
        }

        nextEl?.focus();
      }
    }, [anchorElement, changeActiveIndex, type]);

    const moveToNextItem = useCallback(
      (e: KeyboardEvent<HTMLAnchorElement>) => {
        const nextIdx =
          activeIndexState >= numberOfItems - 1 ? 0 : activeIndexState + 1;

        closePopup(e);
        moveToItem(nextIdx);
      },
      [activeIndexState, closePopup, moveToItem, numberOfItems],
    );

    const moveToPreviousParentItem = useCallback(() => {
      const parentEl = anchorElement?.parentElement?.parentElement;
      const index = Number(anchorElement?.dataset.index);

      if (Number.isNaN(index)) {
        return;
      }

      if (parentEl?.getAttribute('role') === 'menubar') {
        const numOfChildren = parentEl.children.length;
        const nextIdx = index <= 0 ? numOfChildren - 1 : index - 1;

        const nextEl = parentEl.querySelector<HTMLElement>(
          `[data-index="${nextIdx}"]`,
        );

        anchorElement?.click();
        nextEl?.click();
        nextEl?.focus();
      } else {
        anchorElement?.click();
        anchorElement?.focus();
      }

      changeActiveIndex(-1);
    }, [anchorElement, changeActiveIndex]);

    const moveToFirstItem = useCallback(
      (e: KeyboardEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        closePopup(e);
        moveToItem(0);
      },
      [closePopup, moveToItem],
    );

    const moveToLastItem = useCallback(
      (e: KeyboardEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        closePopup(e);
        moveToItem(numberOfItems - 1);
      },
      [closePopup, moveToItem, numberOfItems],
    );

    const moveToParentItem = useCallback(
      (e: KeyboardEvent<HTMLAnchorElement>) => {
        closePopup(e);

        if (
          anchorElement?.getAttribute('aria-expanded') === 'true' &&
          type !== 'inline'
        ) {
          anchorElement.click();
        }

        anchorElement?.focus();
      },
      [anchorElement, closePopup, type],
    );

    const moveToNextInlineItem = useCallback(
      (e: KeyboardEvent<HTMLAnchorElement>) => {
        const index = Number(e.currentTarget?.dataset.index);

        if (Number.isNaN(index)) {
          return;
        }

        let nextItem: HTMLAnchorElement | null | undefined;

        if (e.currentTarget.getAttribute('aria-expanded') === 'true') {
          const submenu =
            e.currentTarget.parentElement?.querySelector('[role="menu"]');

          nextItem = submenu?.querySelector(`[data-index="0"]`);
        } else if (index >= numberOfItems - 1) {
          let menuEl: HTMLElement | null | undefined = menuListRef.current;
          let numOfItems = numberOfItems;
          let currIdx = index;

          while (
            !Number.isNaN(currIdx) &&
            currIdx >= numOfItems - 1 &&
            menuEl?.parentElement?.parentElement?.getAttribute('role') ===
              'menu'
          ) {
            const currEl =
              menuEl.parentElement?.querySelector<HTMLAnchorElement>(
                `[role="menuitem"]`,
              );

            menuEl = menuEl.parentElement.parentElement;
            numOfItems = menuEl.children.length;
            currIdx = Number(currEl?.dataset.index);
          }

          if (Number.isNaN(currIdx)) {
            return;
          }

          const nextIdx = currIdx >= numOfItems - 1 ? 0 : currIdx + 1;

          nextItem = menuEl?.querySelector<HTMLAnchorElement>(
            `[data-index="${nextIdx}"]`,
          );
        } else {
          nextItem = menuListRef.current?.querySelector<HTMLAnchorElement>(
            `[data-index="${index + 1}"]`,
          );
        }

        nextItem?.focus();
      },
      [numberOfItems],
    );

    const moveToPreviousInlineItem = useCallback(
      (e: KeyboardEvent<HTMLAnchorElement>) => {
        const index = Number(e.currentTarget?.dataset.index);

        if (Number.isNaN(index)) {
          return;
        }

        if (anchorElement && index <= 0) {
          anchorElement?.focus();
        } else {
          const nextIdx = index <= 0 ? numberOfItems - 1 : index - 1;

          let nextItem = menuListRef.current?.querySelector<HTMLAnchorElement>(
            `[data-index="${nextIdx}"]`,
          );

          while (nextItem?.getAttribute('aria-expanded') === 'true') {
            const menuEl =
              nextItem.parentElement?.querySelector('[role="menu"]');

            const numOfItems = menuEl?.children.length ?? 0;

            nextItem = menuEl?.querySelector(
              `[data-index="${numOfItems - 1}"]`,
            );
          }

          nextItem?.focus();
        }
      },
      [anchorElement, numberOfItems],
    );

    const moveToPreviousItem = useCallback(
      (e: KeyboardEvent<HTMLAnchorElement>) => {
        const nextIdx =
          activeIndexState <= 0 ? numberOfItems - 1 : activeIndexState - 1;

        closePopup(e);
        moveToItem(nextIdx);
      },
      [activeIndexState, closePopup, moveToItem, numberOfItems],
    );

    const handleMenuItemKeyDown = useCallback(
      (e: KeyboardEvent<HTMLAnchorElement>) => {
        switch (e.code) {
          case 'Enter':
          case 'Space': {
            if (e.currentTarget.getAttribute('aria-haspopup') !== 'true') {
              e.preventDefault();
              e.currentTarget.click();
            }

            break;
          }

          case 'ArrowRight': {
            if (type === 'horizontal') {
              e.preventDefault();
              moveToNextItem(e);
            }

            if (
              type === 'vertical' &&
              e.currentTarget.getAttribute('aria-haspopup') !== 'true'
            ) {
              e.preventDefault();
              moveToNextParentItem();
            }

            break;
          }

          case 'ArrowLeft': {
            if (type === 'horizontal') {
              e.preventDefault();
              moveToPreviousItem(e);
            }

            if (type === 'vertical') {
              e.preventDefault();
              moveToPreviousParentItem();
            }

            break;
          }

          case 'ArrowDown': {
            if (type === 'inline') {
              e.preventDefault();
              moveToNextInlineItem(e);
            }

            if (type === 'vertical') {
              e.preventDefault();
              moveToNextItem(e);
            }

            break;
          }

          case 'ArrowUp': {
            if (type === 'inline') {
              e.preventDefault();
              moveToPreviousInlineItem(e);
            }

            if (type === 'vertical') {
              e.preventDefault();
              moveToPreviousItem(e);
            }

            break;
          }

          case 'Home': {
            e.preventDefault();
            moveToFirstItem(e);
            break;
          }

          case 'End': {
            e.preventDefault();
            moveToLastItem(e);
            break;
          }

          case 'Escape': {
            e.preventDefault();
            moveToParentItem(e);
            break;
          }

          default:
            break;
        }
      },
      [
        type,
        moveToNextItem,
        moveToNextParentItem,
        moveToPreviousItem,
        moveToPreviousParentItem,
        moveToNextInlineItem,
        moveToPreviousInlineItem,
        moveToFirstItem,
        moveToLastItem,
        moveToParentItem,
      ],
    );

    const handleMenuItemMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLAnchorElement>) => {
        const idx = Number(e.currentTarget.dataset.index);

        if (Number.isNaN(idx)) {
          return;
        }

        changeActiveIndex(idx);

        if (focused) {
          moveToItem(idx, false);
        }
      },
      [changeActiveIndex, focused, moveToItem],
    );

    const handleMenuItemMouseLeave = useCallback(() => {
      changeActiveIndex(-1);
    }, [changeActiveIndex]);

    useEffect(() => {
      if (typeof activeIndex !== 'undefined') {
        setActiveIndexState(activeIndex);
      }
    }, [activeIndex]);

    useEffect(() => {
      if (typeof autoFocus !== 'undefined') {
        setAutoFocusState(autoFocus);
      }
    }, [autoFocus]);

    useEffect(() => {
      if (autoFocusState !== 'off') {
        const index = autoFocusState === 'reversed' ? numberOfItems - 1 : 0;

        moveToItem(index, false);
        changeAutoFocus('off');
      }
    }, [autoFocusState, changeAutoFocus, moveToItem, numberOfItems]);

    useEffect(() => {
      function handler(e: MouseEvent) {
        if (
          menuListRef.current &&
          !menuListRef.current?.contains(e.target as Node)
        ) {
          changeActiveIndex(-1);
        }
      }

      if (!focused) {
        document.addEventListener('mousemove', handler);
      }

      return () => {
        document.removeEventListener('mousemove', handler);
      };
    }, [changeActiveIndex, focused]);

    return (
      <MenuContext.Provider value={context}>
        <MenuList ref={mergedRef} {...props}>
          {React.Children.map(
            children,
            (node, idx) =>
              React.isValidElement(node) &&
              React.cloneElement(node, {
                'active': idx === activeIndexState,
                'data-index': idx,
                'indent': indent,
                'tabIndex': idx && -1,
                'onFocus': handleMenuItemFocus,
                'onBlur': handleMenuItemBlur,
                'onKeyDown': handleMenuItemKeyDown,
                'onMouseEnter': handleMenuItemMouseEnter,
                'onMouseLeave': handleMenuItemMouseLeave,
              }),
          )}
        </MenuList>
      </MenuContext.Provider>
    );
  },
);

Menu.displayName = 'Menu';

export default Menu;
