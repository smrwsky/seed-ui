import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

import * as S from './InputGroup.css';

export type InputGroupDirection = 'row' | 'column';

export interface InputGroupProps extends HTMLAttributes<HTMLDivElement> {
  direction?: InputGroupDirection;
}

const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  ({ direction = 'column', className, children, ...props }, ref) => (
    <div className={className} ref={ref} {...props}>
      <div className={cn(S.grid, S.gridDirection[direction], className)}>
        {children}
      </div>
    </div>
  ),
);

InputGroup.displayName = 'InputGroup';

export default InputGroup;
