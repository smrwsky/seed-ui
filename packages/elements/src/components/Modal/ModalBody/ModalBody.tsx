import React, { useContext } from 'react';

import ModalContext from '../context';

import * as S from './ModalBody.css';

export type ModalBodyProps = {
  children: React.ReactNode;
};

function ModalBody({ children }: ModalBodyProps): JSX.Element {
  const { size } = useContext(ModalContext);
  return <div className={S.rootSize[size]}>{children}</div>;
}

export default ModalBody;
