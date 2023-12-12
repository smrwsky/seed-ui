import { atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

export type InputBoxSize = 'sm' | 'md' | 'lg';

export interface InputBoxProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  disabled?: boolean;
  focused?: boolean;
  invalid?: boolean;
  readOnly?: boolean;
  size?: InputBoxSize;
  success?: boolean;
}

const sizeStyles = {
  sm: atoms({
    px: 2,
    py: 0.5,
  }),
  md: atoms({
    px: 2,
    py: 1.5,
  }),
  lg: atoms({
    px: 3,
    py: 2.5,
  }),
};

const InputBox = forwardRef<HTMLDivElement, InputBoxProps>(
  (
    {
      focused,
      invalid,
      size = 'md',
      success,
      className,
      disabled,
      readOnly,
      children,
      ...elementProps
    },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(
        atoms({
          display: 'flex',
          alignItems: 'center',
          borderRadius: 'md',
          outlineStyle: 'solid',
          outlineWidth: 1,
          outlineColor: {
            default: 'transparent',
            hover: 'primary400',
          },
          bg: 'neutral100',
          transition: 'base',
          overflow: 'hidden',
          cursor: 'text',

          ...(focused && {
            outlineColor: 'primary400',
            boxShadow: 'focus',
          }),

          ...(invalid && {
            outlineColor: 'danger400',
          }),

          ...(success && {
            outlineColor: 'success400',
          }),

          ...(focused &&
            invalid && {
              boxShadow: 'focusDanger',
            }),

          ...(focused &&
            success && {
              boxShadow: 'focusSuccess',
            }),

          ...(disabled && {
            bg: 'neutral50',
            outlineColor: 'transparent',
            boxShadow: 'none',
            cursor: 'not-allowed',
          }),

          ...(readOnly && {
            outlineColor: 'transparent',
            boxShadow: 'none',
          }),
        }),
        sizeStyles[size],
        className,
      )}
      {...elementProps}
    >
      {children}
    </div>
  ),
);

InputBox.displayName = 'InputBox';

export default InputBox;
