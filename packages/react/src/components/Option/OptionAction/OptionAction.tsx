import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

import * as S from './OptionAction.css';

export type OptionActionProps = HTMLAttributes<HTMLSpanElement>;

const OptionAction = forwardRef<HTMLSpanElement, OptionActionProps>(
  ({ children, className, ...props }, ref) => (
    <span className={cn(S.root, className)} ref={ref} {...props}>
      {children}
    </span>
  ),
);

OptionAction.displayName = 'OptionAction';

export { OptionAction };
