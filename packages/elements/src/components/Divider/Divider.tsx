import cn from 'classnames';
import { FC } from 'react';

import * as S from './Divider.css';

export type DividerDirection = 'horizontal' | 'vertical';

export type DividerProps = {
  direction?: DividerDirection;
};

const Divider: FC<DividerProps> = ({ direction = 'horizontal' }) => (
  <div className={cn(S.root, S.rootDirection[direction])} />
);

export default Divider;
