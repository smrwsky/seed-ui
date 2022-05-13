import React from 'react';
import cn from 'classnames';

import { textboxStyle } from '../../styles';

export type TextboxProps = React.InputHTMLAttributes<HTMLInputElement>;

function Textbox(
  { className, ...elemProps }: TextboxProps,
  ref: React.Ref<HTMLInputElement>,
): JSX.Element {
  return (
    <input {...elemProps} className={cn(textboxStyle, className)} ref={ref} />
  );
}

export default React.forwardRef(Textbox);
