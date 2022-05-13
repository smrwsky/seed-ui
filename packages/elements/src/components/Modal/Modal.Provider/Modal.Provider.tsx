import React from 'react';

import ModalContext, { ModalContextType } from './Modal.Context';

export type ModalProviderProps = ModalContextType & {
  children?: React.ReactNode;
};

function ModalProvider({
  children,
  ...providerProps
}: ModalProviderProps): JSX.Element {
  return (
    <ModalContext.Provider value={providerProps}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
