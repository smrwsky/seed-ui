// This file is auto-generated using the 'generate-icon-exports.js' script
// so any changes made to this file manually will be lost the next time the
// script is executed

import React from 'react';
import cx from 'classnames';

import ImageSvg from '../../assets/icons/image.react.svg';
import {
  iconStyle,
  iconFlipStyle,
  iconSpinStyle,
  svgStyle,
} from '../../styles/helpers';

export interface ImageIconProps extends React.ImgHTMLAttributes<HTMLElement> {
  flip?: boolean;
  spin?: boolean;
}

function ImageIcon(
  { flip = false, spin = false, className, ...elemProps }: ImageIconProps,
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
      <ImageSvg aria-hidden className={svgStyle} />
    </span>
  );
}

ImageIcon.displayName = 'ImageIcon';

export default React.forwardRef(ImageIcon);
