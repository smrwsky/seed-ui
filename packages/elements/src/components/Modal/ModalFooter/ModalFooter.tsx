import cn from 'classnames';
import { ReactNode, useContext } from 'react';

import { ModalContext } from '../context';

import * as S from './ModalFooter.css';

export interface ModalFooterProps {
  children: ReactNode;
}

function ModalFooter({ children }: ModalFooterProps): JSX.Element {
  const { size } = useContext(ModalContext);
  return <div className={cn(S.root, S.rootSize[size])}>{children}</div>;
}

export default ModalFooter;
