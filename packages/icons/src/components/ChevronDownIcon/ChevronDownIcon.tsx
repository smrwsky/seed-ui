// This file is auto-generated using the 'generate-icon-exports.js' script
// so any changes made to this file manually will be lost the next time the
// script is executed

import React from 'react';
import cx from 'classnames';

import ChevronDownSvg from '../../assets/icons/chevron-down.react.svg';
import {
  iconStyle,
  iconFlipStyle,
  iconSpinStyle,
  svgStyle,
} from '../../styles/helpers';

export interface ChevronDownIconProps
  extends React.ImgHTMLAttributes<HTMLElement> {
  flip?: boolean;
  spin?: boolean;
}

function ChevronDownIcon(
  { flip = false, spin = false, className, ...elemProps }: ChevronDownIconProps,
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
      <ChevronDownSvg aria-hidden className={svgStyle} />
    </span>
  );
}

ChevronDownIcon.displayName = 'ChevronDownIcon';

export default React.forwardRef(ChevronDownIcon);
