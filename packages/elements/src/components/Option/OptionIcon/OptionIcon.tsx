import React, { memo } from 'react';
import cx from 'classnames';
import { Icon, IconType } from '@seed-ui/icons';

import * as S from './OptionIcon.css';

export interface OptionIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
  type?: IconType;
}

const OptionIcon: React.FC<
  OptionIconProps & React.RefAttributes<HTMLAnchorElement>
> = React.forwardRef(({ className, name, type, ...props }, ref) => (
  <Icon
    className={cx(S.root, className)}
    name={name}
    ref={ref}
    size="sm"
    type={type}
    {...props}
  />
));

OptionIcon.displayName = 'OptionIcon';

export default memo(OptionIcon);
