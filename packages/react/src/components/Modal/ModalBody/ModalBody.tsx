import { ReactNode, useContext } from 'react';

import { ModalContext } from '../context';

import * as S from './ModalBody.css';

export interface ModalBodyProps {
  children: ReactNode;
}

function ModalBody({ children }: ModalBodyProps): JSX.Element {
  const { size } = useContext(ModalContext);
  return <div className={S.rootSize[size]}>{children}</div>;
}

export default ModalBody;
