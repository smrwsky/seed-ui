import React from 'react';
import cn from 'classnames';

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

export interface OListProps extends React.OlHTMLAttributes<HTMLOListElement> {
  serif?: boolean;
  size?: OListSize;
  variant?: OListVariant;
}

const OList: React.FC<OListProps & React.RefAttributes<HTMLOListElement>> =
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
      <ol
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
      </ol>
    ),
  );

OList.displayName = 'OList';

export default OList;
