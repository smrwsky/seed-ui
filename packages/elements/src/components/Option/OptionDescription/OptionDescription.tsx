import React, { memo } from 'react';
import cn from 'classnames';

import * as S from './OptionDescription.css';

export type OptionDescriptionProps = React.HTMLAttributes<HTMLSpanElement>;

const OptionDescription = React.forwardRef<
  HTMLSpanElement,
  OptionDescriptionProps
>(({ children, className, ...props }, ref) => (
  <span className={cn(S.root, className)} ref={ref} {...props}>
    {children}
  </span>
));

OptionDescription.displayName = 'OptionDescription';

export default memo(OptionDescription);
