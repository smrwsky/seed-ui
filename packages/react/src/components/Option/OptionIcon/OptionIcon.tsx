import cx from 'classnames';
import { FC, HTMLAttributes } from 'react';

import { Icon, IconType } from '../../Icon';

import * as S from './OptionIcon.css';

export interface OptionIconProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  name: string;
  type?: IconType;
}

const OptionIcon: FC<OptionIconProps> = ({ className, ...props }) => (
  <Icon className={cx(S.root, className)} fontSize="lg" {...props} />
);

OptionIcon.displayName = 'OptionIcon';

export { OptionIcon };
