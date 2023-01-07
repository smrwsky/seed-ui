import React from 'react';
import cn from 'classnames';

import * as S from './OptionAction.css';

export type OptionActionProps = React.HTMLAttributes<HTMLSpanElement>;

const OptionAction = React.forwardRef<HTMLSpanElement, OptionActionProps>(
  ({ children, className, ...props }, ref) => (
    <span className={cn(S.root, className)} ref={ref} {...props}>
      {children}
    </span>
  ),
);

OptionAction.displayName = 'OptionAction';

export default OptionAction;
