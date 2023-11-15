import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { Flex } from '../Flex';

export type InputBoxSize = 'sm' | 'md' | 'lg';

export interface InputBoxProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  disabled?: boolean;
  focused?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
  size?: InputBoxSize;
}

const sizeStyles = {
  sm: atoms({
    minHeight: 7,
    px: 1,
    py: 0,
  }),
  md: atoms({
    minHeight: 9,
    px: 1,
    py: 0.5,
  }),
  lg: atoms({
    minHeight: 11,
    px: 2,
    py: 1,
  }),
};

const InputBox = forwardRef<HTMLDivElement, InputBoxProps>(
  (
    {
      size = 'md',
      disabled,
      focused,
      invalid,
      readOnly,
      className,
      children,
      ...elementProps
    },
    ref,
  ) => (
    <Flex
      alignItems="center"
      className={cn(
        atoms({
          borderRadius: 'md',
          border: 'thin',
          borderColor: {
            default: 'transparent',
            hover: 'primary400',
          },
          bg: 'neutral100',
          transition: 'base',
          overflow: 'hidden',
          cursor: 'text',

          ...(focused && {
            borderColor: 'primary400',
            boxShadow: 'focus',
          }),

          ...(invalid && {
            borderColor: 'danger400',
          }),

          ...(focused &&
            invalid && {
              boxShadow: 'focusDanger',
            }),

          ...(disabled && {
            bg: 'neutral50',
            borderColor: 'transparent',
            boxShadow: 'none',
            cursor: 'not-allowed',
          }),

          ...(readOnly && {
            borderColor: 'transparent',
            boxShadow: 'none',
          }),
        }),
        sizeStyles[size],
        className,
      )}
      ref={ref}
      {...elementProps}
    >
      {children}
    </Flex>
  ),
);

InputBox.displayName = 'InputBox';

export default InputBox;
