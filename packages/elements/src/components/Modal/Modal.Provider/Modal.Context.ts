import React from 'react';

export type ModalSize = 'sm' | 'md' | 'lg';

export type ModalContextType = {
  size: ModalSize;
};

const ModalContext = React.createContext<ModalContextType>({
  size: 'md',
});

export default ModalContext;
