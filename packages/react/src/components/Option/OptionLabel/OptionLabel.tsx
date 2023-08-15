import { textTruncate } from '@seed-ui/styles';
import cn from 'classnames';
import { forwardRef, HTMLAttributes } from 'react';

import * as S from './OptionLabel.css';

export type OptionLabelProps = HTMLAttributes<HTMLSpanElement>;

const OptionLabel = forwardRef<HTMLSpanElement, OptionLabelProps>(
  ({ children, className, ...props }, ref) => (
    <span className={cn(S.root, textTruncate, className)} ref={ref} {...props}>
      {children}
    </span>
  ),
);

OptionLabel.displayName = 'OptionLabel';

export { OptionLabel };
