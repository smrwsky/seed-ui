'use client';

import { ExtendedRefs, FloatingContext } from '@floating-ui/react';
import React from 'react';

export interface PopoverContextType {
  context: FloatingContext;
  descriptionId: string | undefined;
  floatingStyles: React.CSSProperties;
  open: boolean;
  labelId: string | undefined;
  modal: boolean;
  refs: ExtendedRefs<Element>;
  closePopover: () => void;
  getFloatingProps: (
    userProps?: React.HTMLAttributes<Element>,
  ) => Record<string, unknown>;
  getReferenceProps: (
    userProps?: React.HTMLAttributes<Element>,
  ) => Record<string, unknown>;
  setDescriptionId: (descriptionId: string | undefined) => void;
  setLabelId: (titleId: string | undefined) => void;
}

export const PopoverContext = React.createContext<PopoverContextType>({
  context: {} as FloatingContext,
  descriptionId: undefined,
  floatingStyles: {},
  open: false,
  refs: {} as ExtendedRefs<Element>,
  labelId: undefined,
  modal: false,
  closePopover: () => {
    // Do nothing
  },
  getFloatingProps: () => ({}),
  getReferenceProps: () => ({}),
  setDescriptionId: () => {
    // Do nothing
  },
  setLabelId: () => {
    // Do nothing
  },
});
