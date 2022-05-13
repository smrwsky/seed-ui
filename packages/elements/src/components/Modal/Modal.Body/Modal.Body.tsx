import React from 'react';

import { useModal } from '../Modal.Provider';

import * as S from './Modal.Body.css';

export type ModalBodyProps = {
  children: React.ReactNode;
};

function ModalBody({ children }: ModalBodyProps): JSX.Element {
  const { size } = useModal();
  return <div className={S.rootSize[size]}>{children}</div>;
}

export default ModalBody;
