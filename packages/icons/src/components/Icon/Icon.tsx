import React, { HTMLAttributes } from 'react';
import cn from 'classnames';

import 'boxicons/css/boxicons.min.css';
import { Maybe } from '../../types/helpers';

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

export type IconSize = 'xs' | 'sm' | 'md' | 'lg';

export type IconRotate = 90 | 180 | 270;

export type IconFlip = 'horizontal' | 'vertical';

export type IconPull = 'left' | 'right';

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
  | 'fade-down-hover';

export type IconProps = HTMLAttributes<HTMLElement> & {
  name: string;
  type?: Maybe<IconType>;
  variant?: IconVariant;
  size?: Maybe<IconSize>;
  rotate?: Maybe<IconRotate>;
  flip?: Maybe<IconFlip>;
  pull?: Maybe<IconPull>;
  animation?: Maybe<IconAnimation>;
};

function Icon({
  name,
  type = 'regular',
  variant = 'dark',
  size,
  rotate,
  flip,
  pull,
  animation,
  className,
  ...props
}: IconProps): JSX.Element {
  return (
    <i
      {...props}
      className={cn(
        S.root,
        S.variant[variant],
        'bx',
        (type === 'solid' && `bxs-${name}`) ||
          (type === 'logo' && `bxl-${name}`) ||
          `bx-${name}`,
        size && `bx-${size}`,
        rotate && `bx-rotate-${rotate}`,
        flip && `bx-flip-${flip}`,
        pull && `bx-pull-${pull}`,
        animation && `bx-${animation}`,
        className,
      )}
    />
  );
}

export default Icon;
