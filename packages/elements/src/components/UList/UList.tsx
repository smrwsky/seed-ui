import React from 'react';
import cx from 'classnames';

import {
  listItemStyle,
  listStyle,
  textSerifSizeStyle,
  textSizeStyle,
  textVariantStyle,
} from '../../styles/helpers';
import { Atoms, atoms, MarginProps } from '../../styles/atoms.css';

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
      ref={ref}
      className={cx(
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
      {...elemProps}
    >
      {React.Children.map(children, (child, idx) =>
        idx < React.Children.count(children) - 1 && React.isValidElement(child)
          ? React.cloneElement(child, {
              className: cx(listItemStyle, child.props.className),
            })
          : child,
      )}
    </ul>
  );
}

UList.displayName = 'UList';

export default React.forwardRef(UList);
