import React from 'react';
import cn from 'classnames';

import * as S from './InputTags.css';

export type InputTagsProps = {
  children?: React.ReactNode;
};

function InputTags({ children }: InputTagsProps): JSX.Element {
  return (
    <div className={S.root}>
      {React.Children.map(
        children,
        (child) =>
          React.isValidElement(child) && (
            <div className={cn(S.inner)}>{child}</div>
          ),
      )}
    </div>
  );
}

export default InputTags;
