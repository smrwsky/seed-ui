import React from 'react';
import cn from 'classnames';

import { useModal } from '../Modal.Provider';

import * as S from './Modal.Footer.css';

export type ModalFooterProps = {
  children: React.ReactNode;
};

function ModalFooter({ children }: ModalFooterProps): JSX.Element {
  const { size } = useModal();
  return <div className={cn(S.root, S.rootSize[size])}>{children}</div>;
}

export default ModalFooter;
