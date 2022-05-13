import React from 'react';
import cn from 'classnames';

import * as S from './InputContainer.css';

export type InputContainerShape = 'rectangle' | 'stadium';

export type InputContainerSize = 'sm' | 'md' | 'lg';

export interface InputContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  disabled?: boolean;
  focused?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
  shape?: InputContainerShape;
  size?: InputContainerSize;
}

function InputContainer(
  {
    shape = 'rectangle',
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
        S.rootShape[shape],
        S.rootSize[size],
        focused && !disabled && !readOnly && S.rootFocused,
        invalid && [
          S.rootInvalid,
          focused && !disabled && !readOnly && S.rootInvalidFocused,
        ],
        disabled && S.rootDisabled,
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
