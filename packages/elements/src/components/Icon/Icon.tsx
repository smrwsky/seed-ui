import { atoms, Atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { forwardRef, HTMLAttributes, memo } from 'react';

export type IconType = 'regular' | 'solid' | 'logo';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg';

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
  color?: Atoms['color'];
  fontSize?: Atoms['fontSize'];
  flip?: IconFlip;
  name: string;
  pull?: IconPull;
  rotate?: IconRotate;
  type?: IconType;
};

let Icon = forwardRef<HTMLElement, IconProps>(
  (
    {
      animation = 'none',
      className,
      color = 'currentColor',
      fontSize = '2xl',
      flip = 'none',
      name,
      pull = 'none',
      rotate = 0,
      type = 'regular',
      ...props
    },
    ref,
  ) => {
    return (
      <i
        className={cn(
          atoms({
            color,
            fontSize,
            verticalAlign: 'middle',
          }),
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
        ref={ref}
        {...props}
      />
    );
  },
);

Icon = memo(Icon);

Icon.displayName = 'Icon';

export { Icon };
