import {
  Children,
  cloneElement,
  FocusEvent,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  KeyboardEvent,
  MouseEvent as ReactMouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { mergeRefs } from '../../utils/merge-refs';

import { MenuContext, MenuContextType } from './Menu.context';
import { MenuSize, MenuType, MenuVariant } from './Menu.types';
import { MenuList } from './MenuList';

export type MenuAutoFocus = 'on' | 'reversed' | 'off';

export interface MenuProps extends HTMLAttributes<HTMLUListElement> {
  highlightedIndex?: number;
  anchorElement?: HTMLElement | null;
  autoFocus?: MenuAutoFocus;
  collapsed?: boolean;
  defaultHighlightedIndex?: number;
  indent?: number;
  type?: MenuType;
  size?: MenuSize;
  variant?: MenuVariant;
  onHighlightedIndexChange?: (index: number) => void;
  onAutoFocusChange?: (autoFocus: MenuAutoFocus) => void;
}

const Menu = forwardRef<HTMLUListElement, MenuProps>(
  (
    {
      highlightedIndex,
      anchorElement,
      autoFocus,
      collapsed = false,
      defaultHighlightedIndex = -1,
      indent = 0,
      type = 'vertical',
      size = 'md',
      variant = 'primary',
      onHighlightedIndexChange,
      onAutoFocusChange,
      children,
      ...props
    },
    ref,
  ) => {
    const [highlightedIndexState, setHighlightedIndexState] = useState(
      defaultHighlightedIndex,
    );

    const [autoFocusState, setAutoFocusState] = useState<MenuAutoFocus>('off');
    const [numberOfItems] = useState(() => Children.count(children));

    const context: MenuContextType = useMemo(
      () => ({ collapsed, type, size, variant, indent }),
      [collapsed, type, size, variant, indent],
    );

    const menuListRef = useRef<HTMLUListElement>(null);
    const mergedRef = mergeRefs(menuListRef, ref);

    const isHighlightedIndexUncontrolled =
      typeof highlightedIndex === 'undefined' && !onHighlightedIndexChange;

    const isAutoFocusUncontrolled =
      typeof autoFocus === 'undefined' && !onAutoFocusChange;

    const changeHighlightedIndex = useCallback(
      (nextVal: number) => {
        if (isHighlightedIndexUncontrolled) {
          setHighlightedIndexState(nextVal);
        } else {
          onHighlightedIndexChange?.(nextVal);
        }
      },
      [isHighlightedIndexUncontrolled, onHighlightedIndexChange],
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
      changeHighlightedIndex(-1);
    }, [changeHighlightedIndex]);

    const handleMenuItemFocus = useCallback(
      (e: FocusEvent<HTMLUListElement>) => {
        const idx = Number(e.currentTarget.dataset.index);

        if (!Number.isNaN(idx)) {
          changeHighlightedIndex(idx);
        }
      },
      [changeHighlightedIndex],
    );

    const moveToItem = useCallback(
      (index: number, focus = true) => {
        const menuItem = menuListRef.current?.querySelector<HTMLElement>(
          `[data-index="${index}"]`,
        );

        if (focus) {
          menuItem?.scrollIntoView({ block: 'nearest' });
          menuItem?.focus();
        }

        if (
          type !== 'inline' &&
          menuItem?.getAttribute('aria-haspopup') === 'true' &&
          menuItem?.getAttribute('aria-expanded') !== 'true'
        ) {
          menuItem?.click();
        }
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
        !(!Number.isNaN(index) && parentEl?.getAttribute('role') === 'menubar')
      ) {
        return;
      }

      const numOfChildren = parentEl?.children.length ?? 0;
      const nextIdx = index >= numOfChildren - 1 ? 0 : index + 1;

      const nextEl =
        parentEl.children[nextIdx].querySelector<HTMLElement>(
          `[role="menuitem"]`,
        );

      changeHighlightedIndex(-1);
      anchorElement?.click();

      if (nextEl?.getAttribute('aria-haspopup') === 'true') {
        nextEl.setAttribute('data-autofocus', 'true');
        nextEl?.click();
      } else {
        nextEl?.focus();
      }
    }, [anchorElement, changeHighlightedIndex]);

    const moveToNextItem = useCallback(
      (e: KeyboardEvent<HTMLAnchorElement>) => {
        const nextIdx =
          highlightedIndexState >= numberOfItems - 1
            ? 0
            : highlightedIndexState + 1;

        closePopup(e);
        moveToItem(nextIdx);
      },
      [highlightedIndexState, closePopup, moveToItem, numberOfItems],
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

        const nextEl =
          parentEl.children[nextIdx].querySelector<HTMLElement>(
            `[role="menuitem"]`,
          );

        anchorElement?.click();

        if (nextEl?.getAttribute('aria-haspopup') === 'true') {
          nextEl.setAttribute('data-autofocus', 'true');
          nextEl?.click();
        } else {
          nextEl?.focus();
        }
      } else {
        anchorElement?.click();
        anchorElement?.focus();
      }

      changeHighlightedIndex(-1);
    }, [anchorElement, changeHighlightedIndex]);

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
        anchorElement?.click();
        anchorElement?.focus();
      },
      [anchorElement, closePopup],
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

          nextItem = submenu?.querySelector('[data-index="0"]');
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
                '[role="menuitem"]',
              );

            menuEl = menuEl.parentElement.parentElement;
            numOfItems = menuEl.children.length;
            currIdx = Number(currEl?.dataset.index);
          }

          if (Number.isNaN(currIdx)) {
            return;
          }

          const nextIdx = currIdx >= numOfItems - 1 ? 0 : currIdx + 1;

          nextItem =
            menuEl?.children[nextIdx]?.querySelector<HTMLAnchorElement>(
              `[role="menuitem"]`,
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

          let nextItem =
            menuListRef.current?.children[
              nextIdx
            ].querySelector<HTMLAnchorElement>(`[role="menuitem"]`);

          while (nextItem?.getAttribute('aria-expanded') === 'true') {
            const menuEl =
              nextItem.parentElement?.querySelector('[role="menu"]');

            const numOfItems = menuEl?.children.length ?? 0;

            nextItem =
              menuEl?.children[numOfItems - 1].querySelector(
                `[role="menuitem"]`,
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
          highlightedIndexState <= 0
            ? numberOfItems - 1
            : highlightedIndexState - 1;

        closePopup(e);
        moveToItem(nextIdx);
      },
      [highlightedIndexState, closePopup, moveToItem, numberOfItems],
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
            if (type !== 'inline') {
              e.preventDefault();
              moveToParentItem(e);
            }

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
      (e: ReactMouseEvent<HTMLAnchorElement>) => {
        const idx = Number(e.currentTarget.dataset.index);

        if (Number.isNaN(idx)) {
          return;
        }

        changeHighlightedIndex(idx);
        moveToItem(idx, false);
      },
      [changeHighlightedIndex, moveToItem],
    );

    const handleMenuItemMouseLeave = useCallback(() => {
      changeHighlightedIndex(-1);
    }, [changeHighlightedIndex]);

    useEffect(() => {
      if (typeof highlightedIndex !== 'undefined') {
        setHighlightedIndexState(highlightedIndex);
      }
    }, [highlightedIndex]);

    useEffect(() => {
      if (typeof autoFocus !== 'undefined') {
        setAutoFocusState(autoFocus);
      }
    }, [autoFocus]);

    useEffect(() => {
      if (autoFocusState !== 'off') {
        const index = autoFocusState === 'reversed' ? numberOfItems - 1 : 0;
        moveToItem(index);
        changeAutoFocus('off');
      }
    }, [autoFocusState, changeAutoFocus, moveToItem, numberOfItems]);

    return (
      <MenuContext.Provider value={context}>
        <MenuList isSubmenu={indent > 0} ref={mergedRef} {...props}>
          {Children.map(
            children,
            (node, idx) =>
              isValidElement(node) &&
              cloneElement(node, {
                'highlighted': idx === highlightedIndexState,
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

export { Menu };
