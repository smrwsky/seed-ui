import { textTruncateStyle } from '@seed-ui/styles';
import cn from 'classnames';
import { forwardRef, HTMLAttributes, memo } from 'react';

import * as S from './OptionLabel.css';

export type OptionLabelProps = HTMLAttributes<HTMLSpanElement>;

const OptionLabel = forwardRef<HTMLSpanElement, OptionLabelProps>(
  ({ children, className, ...props }, ref) => (
    <span
      className={cn(S.root, textTruncateStyle, className)}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  ),
);

OptionLabel.displayName = 'OptionLabel';

export default memo(OptionLabel);