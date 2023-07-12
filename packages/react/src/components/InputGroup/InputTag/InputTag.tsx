import { ReactNode } from 'react';

import * as S from './InputTag.css';

export interface InputTagProps {
  children?: ReactNode;
}

function InputTag({ children }: InputTagProps): JSX.Element {
  return <div className={S.root}>{children}</div>;
}

export default InputTag;
