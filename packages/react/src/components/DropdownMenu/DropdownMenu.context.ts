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

export interface DropdownMenuContextType {
  activeIndex: number | null;
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
  isOpen: boolean;
  labelsRef: MutableRefObject<Array<string>>;
  refs: ExtendedRefs<HTMLButtonElement>;
  setActiveIndex: Dispatch<SetStateAction<number | null>>;
  setHasFocusInside: Dispatch<SetStateAction<boolean>>;
}

export const DropdownMenuContext = createContext<DropdownMenuContextType>({
  activeIndex: null,
  context: {} as FloatingContext<HTMLButtonElement>,
  elementsRef: {} as MutableRefObject<Array<HTMLButtonElement>>,
  floatingStyles: {},
  getFloatingProps: () => ({}),
  getItemProps: () => ({}),
  getReferenceProps: () => ({}),
  hasFocusInside: false,
  isOpen: false,
  labelsRef: {} as MutableRefObject<Array<string>>,
  refs: {} as ExtendedRefs<HTMLButtonElement>,
  setActiveIndex: () => {
    // Do nothing
  },
  setHasFocusInside: () => {
    // Do nothing
  },
});
