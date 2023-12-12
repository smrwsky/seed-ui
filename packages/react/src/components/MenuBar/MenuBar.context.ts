'use client';

import { ExtendedRefs, FloatingContext } from '@floating-ui/react';
import {
  createContext,
  CSSProperties,
  Dispatch,
  HTMLProps,
  MutableRefObject,
  SetStateAction,
} from 'react';

import { MenuBarSize, MenuBarVariant } from './types';

export interface MenuBarContextType {
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
  hasFocusInside: boolean;
  isOpen: boolean;
  isNested: boolean;
  labelsRef: MutableRefObject<Array<string>>;
  refs: ExtendedRefs<HTMLButtonElement>;
  setActiveIndex: Dispatch<SetStateAction<number | null>>;
  setHasFocusInside: Dispatch<SetStateAction<boolean>>;
  size: MenuBarSize;
  variant: MenuBarVariant;
}

export const MenuBarContext = createContext<MenuBarContextType>({
  activeIndex: null,
  collapsed: false,
  context: {} as FloatingContext<HTMLButtonElement>,
  elementsRef: {} as MutableRefObject<Array<HTMLButtonElement>>,
  floatingStyles: {},
  getFloatingProps: () => ({}),
  getItemProps: () => ({}),
  hasFocusInside: false,
  isOpen: false,
  isNested: false,
  labelsRef: {} as MutableRefObject<Array<string>>,
  refs: {} as ExtendedRefs<HTMLButtonElement>,
  setActiveIndex: () => {
    // Do nothing
  },
  setHasFocusInside: () => {
    // Do nothing
  },
  size: 'md',
  variant: 'secondary',
});
