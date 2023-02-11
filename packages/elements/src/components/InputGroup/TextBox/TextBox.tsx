import React, { forwardRef, InputHTMLAttributes, memo } from 'react';
import cn from 'classnames';

import { textboxStyle } from '../../../styles';

export type TextBoxProps = InputHTMLAttributes<HTMLInputElement>;

const TextBox = forwardRef<HTMLInputElement, TextBoxProps>(
  ({ className, ...elemProps }, ref) => (
    <input {...elemProps} className={cn(textboxStyle, className)} ref={ref} />
  ),
);

TextBox.displayName = 'TextBox';

export default memo(TextBox);
