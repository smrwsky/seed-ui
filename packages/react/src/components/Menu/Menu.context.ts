import { ExtendedRefs, FloatingContext } from '@floating-ui/react';
import {
  createContext,
  CSSProperties,
  Dispatch,
  HTMLProps,
  MutableRefObject,
  SetStateAction,
} from 'react';

import { MenuSize, MenuType, MenuVariant } from './types';

export type MenuContextType = {
  activeIndex: number | null;
  collapsed: boolean;
  context: FloatingContext<HTMLButtonElement>;
  elementsRef: MutableRefObject<Array<HTMLButtonElement | null>>;
  floatingStyles: CSSProperties;
  getFloatingProps: (
    userProps?: HTMLProps<HTMLElement>,
  ) => Record<string, unknown>;
  getItemProps: (
    userProps?: HTMLProps<HTMLButtonElement>,
  ) => Record<string, unknown>;
  getReferenceProps: (
    userProps?: HTMLProps<HTMLElement>,
  ) => Record<string, unknown>;
  hasFocusInside: boolean;
  indent: number;
  isOpen: boolean;
  labelsRef: MutableRefObject<Array<string>>;
  refs: ExtendedRefs<HTMLButtonElement>;
  setActiveIndex: Dispatch<SetStateAction<number | null>>;
  setHasFocusInside: Dispatch<SetStateAction<boolean>>;
  size: MenuSize;
  type: MenuType;
  variant: MenuVariant;
};

export const MenuContext = createContext<MenuContextType>({
  activeIndex: null,
  collapsed: false,
  context: {} as FloatingContext<HTMLButtonElement>,
  elementsRef: {} as MutableRefObject<Array<HTMLButtonElement>>,
  floatingStyles: {},
  getFloatingProps: () => ({}),
  getItemProps: () => ({}),
  getReferenceProps: () => ({}),
  hasFocusInside: false,
  indent: 0,
  isOpen: false,
  labelsRef: {} as MutableRefObject<Array<string>>,
  refs: {} as ExtendedRefs<HTMLButtonElement>,
  setActiveIndex: () => {
    // Do nothing
  },
  setHasFocusInside: () => {
    // Do nothing
  },
  size: 'md',
  type: 'vertical',
  variant: 'secondary',
});
