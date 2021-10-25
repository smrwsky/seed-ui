// This file is auto-generated using the 'generate-icon-exports.js' script
// so any changes made to this file manually will be lost the next time the
// script is executed

import React from 'react';
import cx from 'classnames';

import ChevronLeftSvg from '../../assets/icons/chevron-left.react.svg';
import {
  iconStyle,
  iconFlipStyle,
  iconSpinStyle,
  svgStyle,
} from '../../styles/helpers';

export interface ChevronLeftIconProps
  extends React.ImgHTMLAttributes<HTMLElement> {
  flip?: boolean;
  spin?: boolean;
}

function ChevronLeftIcon(
  { flip = false, spin = false, className, ...elemProps }: ChevronLeftIconProps,
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
      <ChevronLeftSvg aria-hidden className={svgStyle} />
    </span>
  );
}

ChevronLeftIcon.displayName = 'ChevronLeftIcon';

export default React.forwardRef(ChevronLeftIcon);
