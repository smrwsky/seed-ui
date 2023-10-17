import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import {
  cloneElement,
  forwardRef,
  isValidElement,
  LiHTMLAttributes,
  ReactElement,
} from 'react';

import { IconProps } from '../Icon';

export interface OptionProps extends LiHTMLAttributes<HTMLLIElement> {
  active?: boolean;
  description?: string;
  disabled?: boolean;
  option?: unknown;
  selected?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

const Option = forwardRef<HTMLLIElement, OptionProps>(
  (
    {
      active,
      children,
      className,
      disabled,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      option,
      selected,
      startIcon,
      endIcon,
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
            minWidth: 36,
            borderRadius: 'md',
            color: 'neutral900',
            textDecoration: { default: 'none', hover: 'none' },
            bg: { hover: 'dark50' },
            transition: 'base',
            px: 1,
            py: 0.5,
            mx: 1,
            my: 0.5,
            cursor: 'pointer',

            ...(active && {
              bg: 'dark50',
            }),

            ...(selected && {
              bg: 'primary50',
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
        {isValidElement<IconProps>(startIcon) &&
          cloneElement(startIcon, {
            className: atoms({
              color: 'neutral500',
              fontSize: 'xl',
              mx: 1.5,

              ...(selected && {
                color: 'primary500',
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

        {isValidElement<IconProps>(endIcon) &&
          cloneElement(endIcon, {
            className: cn(
              atoms({
                fontSize: 'xl',
                mx: 1.5,
              }),
              endIcon.props.className,
            ),
          })}
      </li>
    );
  },
);

Option.displayName = 'Option';

export default Option;
