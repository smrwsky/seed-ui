import React, { forwardRef, InputHTMLAttributes, memo } from 'react';
import cn from 'classnames';

import { textboxStyle } from '../../../styles';

export type TextboxProps = InputHTMLAttributes<HTMLInputElement>;

const Textbox = forwardRef<HTMLInputElement, TextboxProps>(
  ({ className, ...elemProps }, ref) => (
    <input {...elemProps} className={cn(textboxStyle, className)} ref={ref} />
  ),
);

Textbox.displayName = 'Textbox';

export default memo(Textbox);
