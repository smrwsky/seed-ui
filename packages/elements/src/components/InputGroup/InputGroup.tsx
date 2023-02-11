import React from 'react';
import cn from 'classnames';

import * as S from './InputGroup.css';

export type InputGroupDirection = 'row' | 'column';

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: InputGroupDirection;
}

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
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
