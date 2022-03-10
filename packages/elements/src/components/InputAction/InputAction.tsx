import React from 'react';
import cx from 'classnames';

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
  <span {...elementProps} className={cx(S.root, className)}>
    {children}
  </span>
);

InputAction.displayName = 'InputAction';

export default InputAction;
