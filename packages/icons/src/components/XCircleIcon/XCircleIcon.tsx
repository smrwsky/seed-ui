// This file is auto-generated using the 'generate-icon-exports.js' script
// so any changes made to this file manually will be lost the next time the
// script is executed

import React from 'react';
import cx from 'classnames';

import XCircleSvg from '../../assets/icons/x-circle.react.svg';
import {
  iconStyle,
  iconFlipStyle,
  iconSpinStyle,
  svgStyle,
} from '../../styles/helpers';

export interface XCircleIconProps extends React.ImgHTMLAttributes<HTMLElement> {
  flip?: boolean;
  spin?: boolean;
}

function XCircleIcon(
  { flip = false, spin = false, className, ...elemProps }: XCircleIconProps,
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
      <XCircleSvg aria-hidden className={svgStyle} />
    </span>
  );
}

XCircleIcon.displayName = 'XCircleIcon';

export default React.forwardRef(XCircleIcon);
