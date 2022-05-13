import React, { HTMLAttributes } from 'react';
import cn from 'classnames';

import * as S from './Icon.css';

export type IconType = 'regular' | 'solid' | 'logo';

export type IconVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';

export type IconRotate = 0 | 90 | 180 | 270;

export type IconFlip = 'horizontal' | 'vertical' | 'none';

export type IconPull = 'left' | 'right' | 'none';

export type IconAnimation =
  | 'spin'
  | 'tada'
  | 'flashing'
  | 'burst'
  | 'fade-left'
  | 'fade-right'
  | 'fade-up'
  | 'fade-down'
  | 'spin-hover'
  | 'tada-hover'
  | 'flashing-hover'
  | 'burst-hover'
  | 'fade-left-hover'
  | 'fade-right-hover'
  | 'fade-up-hover'
  | 'fade-down-hover'
  | 'none';

export type IconProps = HTMLAttributes<HTMLElement> & {
  animation?: IconAnimation;
  flip?: IconFlip;
  name: string;
  pull?: IconPull;
  rotate?: IconRotate;
  size?: IconSize;
  type?: IconType;
  variant?: IconVariant;
};

function Icon({
  name,
  type = 'regular',
  variant = 'dark',
  size = 'none',
  rotate = 0,
  flip = 'none',
  pull = 'none',
  animation = 'none',
  className,
  ...props
}: IconProps): JSX.Element {
  return (
    <i
      {...props}
      className={cn(
        S.root,
        S.rootSize[size],
        S.rootVariant[variant],
        'bx',
        (type === 'solid' && `bxs-${name}`) ||
          (type === 'logo' && `bxl-${name}`) ||
          `bx-${name}`,
        rotate !== 0 && `bx-rotate-${rotate}`,
        flip !== 'none' && `bx-flip-${flip}`,
        pull !== 'none' && `bx-pull-${pull}`,
        animation !== 'none' && `bx-${animation}`,
        className,
      )}
    />
  );
}

export default Icon;
