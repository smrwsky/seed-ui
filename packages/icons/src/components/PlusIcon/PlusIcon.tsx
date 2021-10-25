// This file is auto-generated using the 'generate-icon-exports.js' script
// so any changes made to this file manually will be lost the next time the
// script is executed

import React from 'react';
import cx from 'classnames';

import PlusSvg from '../../assets/icons/plus.react.svg';
import {
  iconStyle,
  iconFlipStyle,
  iconSpinStyle,
  svgStyle,
} from '../../styles/helpers';

export interface PlusIconProps extends React.ImgHTMLAttributes<HTMLElement> {
  flip?: boolean;
  spin?: boolean;
}

function PlusIcon(
  { flip = false, spin = false, className, ...elemProps }: PlusIconProps,
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
      <PlusSvg aria-hidden className={svgStyle} />
    </span>
  );
}

PlusIcon.displayName = 'PlusIcon';

export default React.forwardRef(PlusIcon);
