import { Icon, IconType } from '@seed-ui/icons';
import cx from 'classnames';
import { FC, forwardRef, HTMLAttributes, memo, RefAttributes } from 'react';

import * as S from './OptionIcon.css';

export interface OptionIconProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  type?: IconType;
}

const OptionIcon: FC<OptionIconProps & RefAttributes<HTMLAnchorElement>> =
  forwardRef(({ className, name, type, ...props }, ref) => (
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
