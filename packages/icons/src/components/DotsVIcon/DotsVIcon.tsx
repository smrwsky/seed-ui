// This file is auto-generated using the 'generate-icon-exports.js' script
// so any changes made to this file manually will be lost the next time the
// script is executed

import React from 'react';
import cx from 'classnames';

import DotsVSvg from '../../assets/icons/dots-v.react.svg';
import {
  iconStyle,
  iconFlipStyle,
  iconSpinStyle,
  svgStyle,
} from '../../styles/helpers';

export interface DotsVIconProps extends React.ImgHTMLAttributes<HTMLElement> {
  flip?: boolean;
  spin?: boolean;
}

function DotsVIcon(
  { flip = false, spin = false, className, ...elemProps }: DotsVIconProps,
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
      <DotsVSvg aria-hidden className={svgStyle} />
    </span>
  );
}

DotsVIcon.displayName = 'DotsVIcon';

export default React.forwardRef(DotsVIcon);
