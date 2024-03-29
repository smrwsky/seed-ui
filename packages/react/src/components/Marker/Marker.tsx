import { marker } from '@seed-ui/styles';
import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

export type MarkerProps = HTMLAttributes<HTMLSpanElement>;

const Marker = forwardRef<HTMLSpanElement, MarkerProps>(
  ({ className, children, ...props }, ref) => (
    <span ref={ref} className={cn(marker, className)} {...props}>
      {children}
    </span>
  ),
);

Marker.displayName = 'Marker';

export default Marker;
