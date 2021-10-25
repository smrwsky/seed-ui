// This file is auto-generated using the 'generate-icon-exports.js' script
// so any changes made to this file manually will be lost the next time the
// script is executed

import React from 'react';
import cx from 'classnames';

import BellSvg from '../../assets/icons/bell.react.svg';
import {
  iconStyle,
  iconFlipStyle,
  iconSpinStyle,
  svgStyle,
} from '../../styles/helpers';

export interface BellIconProps extends React.ImgHTMLAttributes<HTMLElement> {
  flip?: boolean;
  spin?: boolean;
}

function BellIcon(
  { flip = false, spin = false, className, ...elemProps }: BellIconProps,
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
      <BellSvg aria-hidden className={svgStyle} />
    </span>
  );
}

BellIcon.displayName = 'BellIcon';

export default React.forwardRef(BellIcon);
