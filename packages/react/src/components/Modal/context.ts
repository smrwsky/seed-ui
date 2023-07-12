import React from 'react';

export type ModalSize = 'sm' | 'md' | 'lg';

export type ModalContextType = {
  size: ModalSize;
};

export const ModalContext = React.createContext<ModalContextType>({
  size: 'md',
});
