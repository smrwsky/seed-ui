import { Atoms, atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { FC } from 'react';

export type DividerDirection = 'horizontal' | 'vertical';

export interface DividerProps
  extends Pick<Atoms, 'color' | 'm' | 'mt' | 'mb' | 'ml' | 'mr' | 'mx' | 'my'> {
  direction?: DividerDirection;
}

const directionStyles = {
  horizontal: atoms({
    width: 'full',
    height: 'px',
  }),
  vertical: atoms({
    height: 'full',
    width: 'px',
  }),
};

const Divider: FC<DividerProps> = ({
  color,
  direction = 'horizontal',
  m,
  mb,
  ml,
  mr,
  mt,
  mx,
  my,
}) => (
  <div
    className={cn(
      atoms({
        backgroundColor: 'currentColor',
        color,
        m,
        mt,
        mr,
        ml,
        mb,
        mx,
        my,
      }),
      directionStyles[direction],
    )}
  />
);

export default Divider;
