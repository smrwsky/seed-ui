import cn from 'classnames';
import {
  FC,
  forwardRef,
  HTMLAttributes,
  memo,
  RefAttributes,
  useContext,
} from 'react';

import { MenuContext } from '../context';

import * as S from './MenuDescription.css';

export type MenuDescriptionProps = HTMLAttributes<HTMLSpanElement>;

const MenuDescription: FC<
  MenuDescriptionProps & RefAttributes<HTMLSpanElement>
> = forwardRef(({ children, className, ...props }, ref) => {
  const { collapsed, variant } = useContext(MenuContext);

  return !collapsed ? (
    <span
      className={cn(S.root, S.rootVariant[variant], className)}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  ) : null;
});

MenuDescription.displayName = 'MenuDescription';

export default memo(MenuDescription);
