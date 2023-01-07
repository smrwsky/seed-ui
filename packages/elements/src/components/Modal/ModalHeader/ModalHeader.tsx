import React, { useContext } from 'react';
import cn from 'classnames';

import ModalContext from '../context';

import * as S from './ModalHeader.css';

export type ModalHeaderProps = {
  children: React.ReactNode;
};

function ModalHeader({ children }: ModalHeaderProps): JSX.Element {
  const { size } = useContext(ModalContext);
  return <div className={cn(S.root, S.rootSize[size])}>{children}</div>;
}

export default ModalHeader;
