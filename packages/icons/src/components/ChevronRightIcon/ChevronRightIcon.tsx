// This file is auto-generated using the 'generate-icon-exports.js' script
// so any changes made to this file manually will be lost the next time the
// script is executed

import React from 'react';
import cx from 'classnames';

import ChevronRightSvg from '../../assets/icons/chevron-right.react.svg';
import {
  iconStyle,
  iconFlipStyle,
  iconSpinStyle,
  svgStyle,
} from '../../styles/helpers';

export interface ChevronRightIconProps
  extends React.ImgHTMLAttributes<HTMLElement> {
  flip?: boolean;
  spin?: boolean;
}

function ChevronRightIcon(
  {
    flip = false,
    spin = false,
    className,
    ...elemProps
  }: ChevronRightIconProps,
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
      <ChevronRightSvg aria-hidden className={svgStyle} />
    </span>
  );
}

ChevronRightIcon.displayName = 'ChevronRightIcon';

export default React.forwardRef(ChevronRightIcon);
