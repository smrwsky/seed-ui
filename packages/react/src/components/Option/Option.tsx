import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import React, {
  cloneElement,
  forwardRef,
  isValidElement,
  LiHTMLAttributes,
  ReactElement,
} from 'react';

import { Icon, IconProps } from '../Icon';

export interface OptionProps extends LiHTMLAttributes<HTMLLIElement> {
  active?: boolean;
  description?: string;
  disabled?: boolean;
  icon?: ReactElement;
  option?: unknown;
  multiple?: boolean;
  selected?: boolean;
}

const Option = forwardRef<HTMLLIElement, OptionProps>(
  (
    {
      active,
      children,
      className,
      icon,
      disabled,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      option,
      multiple,
      selected,
      ...props
    },
    ref,
  ) => {
    return (
      <li
        aria-disabled={disabled}
        aria-selected={selected}
        className={cn(
          atoms({
            position: 'relative',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 40,
            borderRadius: 'md',
            color: 'neutral900',
            textDecoration: { default: 'none', hover: 'none' },
            bg: { hover: 'dark50' },
            transition: 'base',
            p: 1.5,
            mx: 1,
            my: 0.5,
            cursor: 'pointer',

            ...(active && {
              bg: 'neutral100',
            }),

            ...(selected &&
              multiple && {
                bg: {
                  default: active ? 'primary200' : 'primary100',
                  hover: 'primary200',
                  active: 'primary300',
                },
              }),

            ...(selected &&
              !multiple && {
                color: 'white',
                bg: {
                  default: active ? 'primary400' : 'primary500',
                  hover: 'primary400',
                  active: 'primary600',
                },
              }),

            ...(disabled && {
              color: 'neutral200',
              bg: 'transparent',
              pointerEvents: 'none',
            }),
          }),
          className,
        )}
        ref={ref}
        role="option"
        {...props}
      >
        {isValidElement<IconProps>(icon) &&
          cloneElement(icon, {
            className: atoms({
              color: 'neutral500',
              fontSize: 'xl',
              mx: 1.5,

              ...(selected && {
                color: multiple ? 'primary500' : 'white',
              }),

              ...(disabled && {
                color: 'neutral200',
              }),
            }),
          })}

        <span
          className={atoms({
            flex: 1,
            display: 'block',
            fontSize: 'md',
            lineHeight: 'normal',
            textOverflow: 'ellipsis',
            mx: 1.5,

            ...(selected && {
              fontWeight: 'semiBold',
            }),
          })}
        >
          {children}
        </span>

        {selected && multiple && (
          <Icon
            className={atoms({
              mx: 1.5,
            })}
            color="primary500"
            fontSize="xl"
            name="check"
          />
        )}
      </li>
    );
  },
);

Option.displayName = 'Option';

export default Option;
