import React from 'react';
import cn from 'classnames';

import { useModal } from '../Modal.Provider';

import * as S from './Modal.Header.css';

export type ModalHeaderProps = {
  children: React.ReactNode;
};

function ModalHeader({ children }: ModalHeaderProps): JSX.Element {
  const { size } = useModal();
  return <div className={cn(S.root, S.rootSize[size])}>{children}</div>;
}

export default ModalHeader;
