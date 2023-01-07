import React, { ElementType, forwardRef } from 'react';
import cn from 'classnames';

import * as S from './InputGroup.css';

export type InputGroupDirection = 'row' | 'column';

export interface InputGroupProps
  extends React.LabelHTMLAttributes<HTMLElement>,
    React.RefAttributes<HTMLElement> {
  as?: ElementType;
  direction?: InputGroupDirection;
}

const InputGroup = forwardRef<HTMLElement, InputGroupProps>(
  (
    {
      as: Element = 'label',
      direction = 'column',
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <Element className={className} ref={ref} {...props}>
      <div className={cn(S.grid, S.gridDirection[direction], className)}>
        {children}
      </div>
    </Element>
  ),
);

InputGroup.displayName = 'InputGroup';

export default InputGroup;
