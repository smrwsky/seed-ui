import React from 'react';
import cn from 'classnames';

import * as S from './InputContainer.css';

export type InputContainerSize = 'sm' | 'md' | 'lg';

export interface InputContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  disabled?: boolean;
  focused?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
  rounded?: boolean;
  size?: InputContainerSize;
}

function InputContainer(
  {
    rounded,
    size = 'md',
    disabled,
    focused,
    invalid,
    readOnly,
    className,
    children,
    ...elementProps
  }: InputContainerProps,
  ref: React.Ref<HTMLDivElement>,
): JSX.Element {
  return (
    <div
      className={cn(
        S.root,
        S.rootSize[size],
        rounded && S.rootRounded,
        focused && !disabled && !readOnly && S.rootFocused,
        invalid && [
          S.rootInvalid,
          focused && !disabled && !readOnly && S.rootInvalidFocused,
        ],
        disabled && S.rootDisabled,
        readOnly && S.rootReadOnly,
        className,
      )}
      ref={ref}
      {...elementProps}
    >
      {children}
    </div>
  );
}

export default React.forwardRef(InputContainer);
