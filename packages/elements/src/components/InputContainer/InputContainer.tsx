import React from 'react';
import cx from 'classnames';

import * as S from './InputContainer.css';

export type InputContainerShape = 'rectangle' | 'stadium';

export type InputContainerSize = 'sm' | 'md' | 'lg';

export interface InputContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  shape?: InputContainerShape;
  size?: InputContainerSize;
  disabled?: boolean;
  focused?: boolean;
  readOnly?: boolean;
  invalid?: boolean;
  children?: React.ReactNode;
}

const InputContainer = (
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
): JSX.Element => (
  <div
    {...elementProps}
    ref={ref}
    className={cx(
      S.root,
      S.rootShape[shape],
      S.rootSize[size],
      focused && !disabled && !readOnly && S.rootFocused,
      invalid && [
        S.rootInvalid,
        focused && !disabled && !readOnly && S.rootInvalidFocused,
      ],
      (disabled || readOnly) && S.rootDisabled,
      className,
    )}
  >
    {children}
  </div>
);

InputContainer.displayName = 'InputContainer';

export default React.forwardRef(InputContainer);
