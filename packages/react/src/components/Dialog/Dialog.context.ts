import { ExtendedRefs, FloatingContext } from '@floating-ui/react';
import React, { createContext } from 'react';

import { DialogSize } from './types';

export interface DialogContextType {
  context: FloatingContext;
  closeDialog: () => void;
  getFloatingProps: (
    userProps?: React.HTMLAttributes<Element>,
  ) => Record<string, unknown>;
  getReferenceProps: (
    userProps?: React.HTMLAttributes<Element>,
  ) => Record<string, unknown>;
  open: boolean;
  refs: ExtendedRefs<Element>;
  setTitleId: (titleId: string | undefined) => void;
  setDescriptionId: (descriptionId: string | undefined) => void;
  size: DialogSize;
  titleId: string | undefined;
  descriptionId: string | undefined;
}

export const DialogContext = createContext<DialogContextType>({
  context: {} as FloatingContext,
  closeDialog: () => {
    // Do nothing
  },
  getFloatingProps: () => ({}),
  getReferenceProps: () => ({}),
  open: false,
  refs: {} as ExtendedRefs<Element>,
  size: 'md',
  setTitleId: () => {
    // Do nothing
  },
  setDescriptionId: () => {
    // Do nothing
  },
  titleId: undefined,
  descriptionId: undefined,
});
