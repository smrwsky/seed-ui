import { forwardRef, InputHTMLAttributes, memo } from 'react';

export type TextBoxProps = InputHTMLAttributes<HTMLInputElement>;

const TextBox = forwardRef<HTMLInputElement, TextBoxProps>(
  ({ className, ...elemProps }, ref) => (
    <input {...elemProps} className={className} ref={ref} />
  ),
);

TextBox.displayName = 'TextBox';

export default memo(TextBox);
