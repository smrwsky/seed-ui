import React from 'react';
import cn from 'classnames';
import { Atoms, atoms, MarginProps } from '@seed-ui/styles';

import {
  listItemStyle,
  listStyle,
  textSerifSizeStyle,
  textSizeStyle,
  textVariantStyle,
} from '../../styles';

export type UListSize = 'sm' | 'md';

export type UListType = 'circle' | 'disc' | 'square';

export type UListVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface UListItemProps
  extends MarginProps,
    React.HTMLAttributes<HTMLUListElement> {
  gutter?: Atoms['mb'];
  serif?: boolean;
  size?: UListSize;
  type?: UListType;
  variant?: UListVariant;
}

function UList(
  {
    gutter,
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    serif,
    size = 'md',
    variant = 'dark',
    className,
    children,
    ...elemProps
  }: UListItemProps,
  ref: React.Ref<HTMLUListElement>,
): JSX.Element {
  return (
    <ul
      className={cn(
        listStyle,
        serif ? textSerifSizeStyle[size] : textSizeStyle[size],
        textVariantStyle[variant],
        atoms({
          m,
          mb,
          ml,
          mr,
          mt,
          mx,
          my,
        }),
        className,
      )}
      ref={ref}
      {...elemProps}
    >
      {React.Children.map(children, (child, idx) =>
        idx < React.Children.count(children) - 1 && React.isValidElement(child)
          ? React.cloneElement(child, {
              className: cn(listItemStyle, child.props.className),
            })
          : child,
      )}
    </ul>
  );
}

export default React.forwardRef(UList);
