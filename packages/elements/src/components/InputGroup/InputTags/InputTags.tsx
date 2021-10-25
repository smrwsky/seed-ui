import React from 'react';
import cx from 'classnames';

import * as S from './InputTags.css';

export type InputTagsSize = 'sm' | 'md' | 'lg';

export type InputTagsProps = {
  size?: InputTagsSize;
  children?: React.ReactNode;
};

function InputTags({ size = 'md', children }: InputTagsProps): JSX.Element {
  return (
    <div className={cx(S.root, S.rootSize[size])}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              className: cx(S.rootInnerSize[size], child.props.className),
            })
          : child,
      )}
    </div>
  );
}

InputTags.displayName = 'InputTags';

export default InputTags;
