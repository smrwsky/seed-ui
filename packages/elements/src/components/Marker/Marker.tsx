import React, { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';
import cn from 'classnames';

import * as S from './Marker.css';

export type MarkerProps = HTMLAttributes<HTMLSpanElement>;

const Marker: FC<MarkerProps & RefAttributes<HTMLSpanElement>> = forwardRef(
  ({ className, children, ...props }, ref) => (
    <span className={cn(S.root, className)} ref={ref} {...props}>
      {children}
    </span>
  ),
);

Marker.displayName = 'Marker';

export default Marker;
