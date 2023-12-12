'use client';

import { ExtendedRefs, FloatingContext } from '@floating-ui/react';
import React, { createContext } from 'react';

import { DialogSize } from './types';

export interface DialogContextType {
  context: FloatingContext;
  descriptionId: string | undefined;
  labelId: string | undefined;
  open: boolean;
  refs: ExtendedRefs<Element>;
  size: DialogSize;
  closeDialog: () => void;
  getFloatingProps: (
    userProps?: React.HTMLAttributes<Element>,
  ) => Record<string, unknown>;
  getReferenceProps: (
    userProps?: React.HTMLAttributes<Element>,
  ) => Record<string, unknown>;
  setDescriptionId: (descriptionId: string | undefined) => void;
  setLabelId: (titleId: string | undefined) => void;
}

export const DialogContext = createContext<DialogContextType>({
  context: {} as FloatingContext,
  descriptionId: undefined,
  labelId: undefined,
  open: false,
  refs: {} as ExtendedRefs<Element>,
  size: 'md',
  closeDialog: () => {
    // Do nothing
  },
  getFloatingProps: () => ({}),
  getReferenceProps: () => ({}),
  setLabelId: () => {
    // Do nothing
  },
  setDescriptionId: () => {
    // Do nothing
  },
});
