// This file is auto-generated using the 'generate-icon-exports.js' script
// so any changes made to this file manually will be lost the next time the
// script is executed

import React from 'react';
import cx from 'classnames';

import ChevronUpSvg from '../../assets/icons/chevron-up.react.svg';
import {
  iconStyle,
  iconFlipStyle,
  iconSpinStyle,
  svgStyle,
} from '../../styles/helpers';

export interface ChevronUpIconProps
  extends React.ImgHTMLAttributes<HTMLElement> {
  flip?: boolean;
  spin?: boolean;
}

function ChevronUpIcon(
  { flip = false, spin = false, className, ...elemProps }: ChevronUpIconProps,
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
      <ChevronUpSvg aria-hidden className={svgStyle} />
    </span>
  );
}

ChevronUpIcon.displayName = 'ChevronUpIcon';

export default React.forwardRef(ChevronUpIcon);
