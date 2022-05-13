import React from 'react';
import { atoms, MarginProps } from '@seed-ui/styles';
import cn from 'classnames';

import * as S from './Divider.css';

export type DividerDirection = 'horizontal' | 'vertical';

export type DividerProps = MarginProps & {
  direction: DividerDirection;
};

function Divider({
  direction = 'horizontal',
  m,
  mb,
  ml,
  mr,
  mt,
  mx,
  my,
}: DividerProps) {
  return (
    <div
      className={cn(
        S.root,
        S.rootDirection[direction],
        atoms({
          m,
          mb,
          ml,
          mr,
          mt,
          mx,
          my,
        }),
      )}
    />
  );
}

export default Divider;
