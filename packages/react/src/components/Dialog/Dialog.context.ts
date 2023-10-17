import { ExtendedRefs, FloatingContext } from '@floating-ui/react';
import React, { HTMLAttributes } from 'react';

export type DialogSize = 'sm' | 'md' | 'lg';

export type DialogContextType = {
  context: FloatingContext;
  getFloatingProps: (
    userProps?: HTMLAttributes<Element>,
  ) => Record<string, unknown>;
  getReferenceProps: (
    userProps?: HTMLAttributes<Element>,
  ) => Record<string, unknown>;
  handleClose: () => void;
  open: boolean;
  refs: ExtendedRefs<Element>;
  setTitleId: (titleId: string | undefined) => void;
  setDescriptionId: (descriptionId: string | undefined) => void;
  size: DialogSize;
  titleId: string | undefined;
  descriptionId: string | undefined;
};

export const DialogContext = React.createContext<DialogContextType>({
  context: {} as FloatingContext,
  getFloatingProps: () => ({}),
  getReferenceProps: () => ({}),
  handleClose: () => {
    // Do nothing
  },
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
