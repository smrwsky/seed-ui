import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

import * as S from './OptionDescription.css';

export type OptionDescriptionProps = HTMLAttributes<HTMLSpanElement>;

const OptionDescription = forwardRef<HTMLSpanElement, OptionDescriptionProps>(
  ({ children, className, ...props }, ref) => (
    <span className={cn(S.root, className)} ref={ref} {...props}>
      {children}
    </span>
  ),
);

OptionDescription.displayName = 'OptionDescription';

export { OptionDescription };
