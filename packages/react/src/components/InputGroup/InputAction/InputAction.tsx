import cn from 'classnames';
import { HTMLAttributes, ReactNode } from 'react';

import * as S from './InputAction.css';

export interface InputActionProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
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
