import cn from 'classnames';
import { ReactNode, useContext } from 'react';

import { ModalContext } from '../context';

import * as S from './ModalHeader.css';

export type ModalHeaderProps = {
  children: ReactNode;
};

function ModalHeader({ children }: ModalHeaderProps): JSX.Element {
  const { size } = useContext(ModalContext);
  return <div className={cn(S.root, S.rootSize[size])}>{children}</div>;
}

export default ModalHeader;
