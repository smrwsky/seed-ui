import React from 'react';
import cx from 'classnames';

import { textboxStyle } from '../../styles/helpers';

function Textbox(
  { className, ...elemProps }: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.Ref<HTMLInputElement>,
): JSX.Element {
  return (
    <input {...elemProps} ref={ref} className={cx(textboxStyle, className)} />
  );
}

Textbox.displayName = 'Textbox';

export default React.forwardRef(Textbox);
