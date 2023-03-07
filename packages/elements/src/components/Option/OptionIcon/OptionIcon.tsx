import { Icon, IconType } from '@seed-ui/icons';
import cx from 'classnames';
import { FC, HTMLAttributes, memo } from 'react';

import * as S from './OptionIcon.css';

export interface OptionIconProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  type?: IconType;
}

const OptionIcon: FC<OptionIconProps> = ({ className, ...props }) => (
  <Icon className={cx(S.root, className)} size="sm" {...props} />
);

OptionIcon.displayName = 'OptionIcon';

export default memo(OptionIcon);
