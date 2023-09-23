import { atoms } from '@seed-ui/styles';
import cx from 'classnames';
import {
  cloneElement,
  forwardRef,
  isValidElement,
  LiHTMLAttributes,
  ReactElement,
  ReactNode,
} from 'react';

import { IconProps } from '../Icon';

export interface OptionProps
  extends Omit<LiHTMLAttributes<HTMLLIElement>, 'value'> {
  action?: ReactNode;
  highlighted?: boolean;
  description?: string;
  disabled?: boolean;
  icon?: ReactElement;
  selected?: boolean;
}

const Option = forwardRef<HTMLLIElement, OptionProps>(
  (
    {
      action,
      className,
      highlighted,
      disabled,
      description,
      icon,
      selected,
      children,
      ...props
    },
    ref,
  ) => (
    <li
      aria-disabled={disabled}
      aria-selected={selected}
      className={cx(
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
          transition: 'base',
          px: 1,
          py: 0.5,
          mx: 1,
          my: 0.5,
          cursor: 'pointer',

          ...(highlighted && {
            bg: 'dark50',
          }),

          ...(selected && {
            bg: 'primary50',
          }),

          ...(disabled && {
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
          fontSize: 'xl',
          className: atoms({
            color: 'neutral500',
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
          mx: 1.5,
        })}
      >
        <span
          className={atoms({
            display: 'block',
            color: 'inherit',
            fontSize: 'md',
            lineHeight: 'normal',
            textOverflow: 'ellipsis',
            mx: 1.5,

            ...(selected && {
              fontWeight: 'semiBold',
            }),

            ...(disabled && {
              color: 'neutral200',
            }),
          })}
        >
          {children}
        </span>

        {description && (
          <span
            className={atoms({
              display: 'block',
              color: 'neutral500',
              fontSize: 'xs',
              letterSpacing: 'wide',
              lineHeight: 'snug',
              textOverflow: 'ellipsis',

              ...(disabled && {
                color: 'neutral200',
              }),
            })}
          >
            {description}
          </span>
        )}
      </span>

      {action && (
        <span
          className={atoms({
            display: 'block',
            lineHeight: 'none',
            overflow: 'hidden',
            mx: 1.5,
          })}
        >
          {action}
        </span>
      )}
    </li>
  ),
);

Option.displayName = 'Option';

export default Option;
