import React from 'react';
import cx from 'classnames';

import { MarginProps, Atoms, atoms } from '../../styles/atoms.css';
import {
  textSerifSizeStyle,
  textSizeStyle,
  textVariantStyle,
  listStyle,
  listItemStyle,
} from '../../styles/helpers';

export type OListSize = 'sm' | 'md';

export type OListVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';
export interface OListItemProps
  extends MarginProps,
    React.OlHTMLAttributes<HTMLOListElement> {
  serif?: boolean;
  size?: OListSize;
  gutter?: Atoms['mb'];
  variant?: OListVariant;
}

function OList(
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
  }: OListItemProps,
  ref: React.Ref<HTMLOListElement>,
): JSX.Element {
  return (
    <ol
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
    </ol>
  );
}

OList.displayName = 'OList';

export default React.forwardRef(OList);
