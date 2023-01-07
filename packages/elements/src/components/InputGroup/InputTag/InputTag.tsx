import React from 'react';

import * as S from './InputTag.css';

export type InputTagProps = {
  children?: React.ReactNode;
};

function InputTag({ children }: InputTagProps): JSX.Element {
  return <div className={S.root}>{children}</div>;
}

export default InputTag;
