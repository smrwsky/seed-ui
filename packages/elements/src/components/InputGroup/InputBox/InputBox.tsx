import React from 'react';
import cn from 'classnames';

import * as S from './InputBox.css';

export type InputBoxSize = 'sm' | 'md' | 'lg';

export interface InputBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  disabled?: boolean;
  focused?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
  rounded?: boolean;
  size?: InputBoxSize;
}

const InputBox = React.forwardRef<HTMLDivElement, InputBoxProps>(
  (
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
    },
    ref,
  ) => (
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
  ),
);

InputBox.displayName = 'InputBox';

export default InputBox;
