// This file is auto-generated using the 'generate-icon-exports.js' script
// so any changes made to this file manually will be lost the next time the
// script is executed

import React from 'react';
import cx from 'classnames';

import PaperclipSvg from '../../assets/icons/paperclip.react.svg';
import {
  iconStyle,
  iconFlipStyle,
  iconSpinStyle,
  svgStyle,
} from '../../styles/helpers';

export interface PaperclipIconProps
  extends React.ImgHTMLAttributes<HTMLElement> {
  flip?: boolean;
  spin?: boolean;
}

function PaperclipIcon(
  { flip = false, spin = false, className, ...elemProps }: PaperclipIconProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element {
  return (
    <span
      {...elemProps}
      ref={ref}
      className={cx(
        iconStyle,
        flip && iconFlipStyle,
        spin && iconSpinStyle,
        className,
      )}
    >
      <PaperclipSvg aria-hidden className={svgStyle} />
    </span>
  );
}

PaperclipIcon.displayName = 'PaperclipIcon';

export default React.forwardRef(PaperclipIcon);
