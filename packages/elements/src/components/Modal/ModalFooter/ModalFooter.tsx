import React, { useContext } from 'react';
import cn from 'classnames';

import ModalContext from '../context';

import * as S from './ModalFooter.css';

export type ModalFooterProps = {
  children: React.ReactNode;
};

function ModalFooter({ children }: ModalFooterProps): JSX.Element {
  const { size } = useContext(ModalContext);
  return <div className={cn(S.root, S.rootSize[size])}>{children}</div>;
}

export default ModalFooter;
