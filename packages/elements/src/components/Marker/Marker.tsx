import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

import * as S from './Marker.css';

export type MarkerProps = HTMLAttributes<HTMLSpanElement>;

const Marker = forwardRef<HTMLSpanElement, MarkerProps>(
  ({ className, children, ...props }, ref) => (
    <span className={cn(S.root, className)} ref={ref} {...props}>
      {children}
    </span>
  ),
);

Marker.displayName = 'Marker';

export default Marker;
