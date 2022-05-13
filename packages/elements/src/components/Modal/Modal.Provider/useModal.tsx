import React from 'react';

import ModalContext, { ModalContextType } from './Modal.Context';

function useModal(): ModalContextType {
  return React.useContext(ModalContext);
}

export default useModal;
