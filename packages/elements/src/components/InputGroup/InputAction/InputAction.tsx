import React from 'react';
import cn from 'classnames';

import * as S from './InputAction.css';

export interface InputActionProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

const InputAction = ({
  children,
  className,
  ...elementProps
}: InputActionProps): JSX.Element => (
  <span {...elementProps} className={cn(S.root, className)}>
    {children}
  </span>
);

export default InputAction;
