import React from 'react';

import * as S from './InputTags.css';

export type InputTagsProps = {
  children?: React.ReactNode;
};

function InputTags({ children }: InputTagsProps): JSX.Element {
  return <div className={S.root}>{children}</div>;
}

export default InputTags;
