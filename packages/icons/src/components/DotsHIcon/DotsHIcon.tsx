// This file is auto-generated using the 'generate-icon-exports.js' script
// so any changes made to this file manually will be lost the next time the
// script is executed

import React from 'react';
import cx from 'classnames';

import DotsHSvg from '../../assets/icons/dots-h.react.svg';
import {
  iconStyle,
  iconFlipStyle,
  iconSpinStyle,
  svgStyle,
} from '../../styles/helpers';

export interface DotsHIconProps extends React.ImgHTMLAttributes<HTMLElement> {
  flip?: boolean;
  spin?: boolean;
}

function DotsHIcon(
  { flip = false, spin = false, className, ...elemProps }: DotsHIconProps,
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
      <DotsHSvg aria-hidden className={svgStyle} />
    </span>
  );
}

DotsHIcon.displayName = 'DotsHIcon';

export default React.forwardRef(DotsHIcon);
