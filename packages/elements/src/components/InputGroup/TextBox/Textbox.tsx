import React from 'react';
import cx from 'classnames';

import { textboxStyle } from '../../../styles/helpers';

function Textbox({
  className,
  ...elemProps
}: React.InputHTMLAttributes<HTMLInputElement>): JSX.Element {
  return <input {...elemProps} className={cx(textboxStyle, className)} />;
}

Textbox.displayName = 'Textbox';

export default Textbox;
