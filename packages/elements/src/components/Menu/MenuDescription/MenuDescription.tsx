import cn from 'classnames';
import { FC, HTMLAttributes, memo, useContext } from 'react';

import { MenuContext } from '../context';

import * as S from './MenuDescription.css';

export type MenuDescriptionProps = HTMLAttributes<HTMLSpanElement>;

const MenuDescription: FC<MenuDescriptionProps> = ({
  children,
  className,
  ...props
}) => {
  const { collapsed, variant } = useContext(MenuContext);

  if (collapsed) return null;

  return (
    <span className={cn(S.root, S.rootVariant[variant], className)} {...props}>
      {children}
    </span>
  );
};

MenuDescription.displayName = 'MenuDescription';

export default memo(MenuDescription);
