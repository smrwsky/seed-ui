import React from 'react';
import cn from 'classnames';

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

export interface UListProps extends React.HTMLAttributes<HTMLUListElement> {
  serif?: boolean;
  size?: UListSize;
  type?: UListType;
  variant?: UListVariant;
}

const UList: React.FC<UListProps & React.RefAttributes<HTMLUListElement>> =
  React.forwardRef(
    (
      {
        serif,
        size = 'md',
        variant = 'dark',
        className,
        children,
        ...elemProps
      },
      ref,
    ) => (
      <ul
        className={cn(
          listStyle,
          serif ? textSerifSizeStyle[size] : textSizeStyle[size],
          textVariantStyle[variant],
          className,
        )}
        ref={ref}
        {...elemProps}
      >
        {React.Children.map(children, (child, idx) =>
          idx < React.Children.count(children) - 1 &&
          React.isValidElement(child)
            ? React.cloneElement(child, {
                className: cn(listItemStyle, child.props.className),
              })
            : child,
        )}
      </ul>
    ),
  );

UList.displayName = 'UList';

export default UList;
