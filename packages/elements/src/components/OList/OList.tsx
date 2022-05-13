import React from 'react';
import cn from 'classnames';
import { MarginProps, Atoms, atoms } from '@seed-ui/styles';

import {
  textSerifSizeStyle,
  textSizeStyle,
  textVariantStyle,
  listStyle,
  listItemStyle,
} from '../../styles';

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
  gutter?: Atoms['mb'];
  serif?: boolean;
  size?: OListSize;
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
    </ol>
  );
}

export default React.forwardRef(OList);
