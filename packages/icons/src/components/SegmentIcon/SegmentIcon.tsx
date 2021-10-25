// This file is auto-generated using the 'generate-icon-exports.js' script
// so any changes made to this file manually will be lost the next time the
// script is executed

import React from 'react';
import cx from 'classnames';

import SegmentSvg from '../../assets/icons/segment.react.svg';
import {
  iconStyle,
  iconFlipStyle,
  iconSpinStyle,
  svgStyle,
} from '../../styles/helpers';

export interface SegmentIconProps extends React.ImgHTMLAttributes<HTMLElement> {
  flip?: boolean;
  spin?: boolean;
}

function SegmentIcon(
  { flip = false, spin = false, className, ...elemProps }: SegmentIconProps,
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
      <SegmentSvg aria-hidden className={svgStyle} />
    </span>
  );
}

SegmentIcon.displayName = 'SegmentIcon';

export default React.forwardRef(SegmentIcon);
