import React, { memo } from 'react';
import cn from 'classnames';
import { textTruncateStyle } from '@seed-ui/styles';

import * as S from './OptionLabel.css';

export type OptionLabelProps = React.HTMLAttributes<HTMLSpanElement>;

const OptionLabel = React.forwardRef<HTMLSpanElement, OptionLabelProps>(
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
