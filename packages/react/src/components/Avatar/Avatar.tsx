import { atoms, Atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { startCase } from 'lodash';
import { cloneElement, FC, ReactElement } from 'react';

import { Icon, IconType } from '../Icon';

import * as S from './Avatar.css';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps {
  backgroundColor?: Atoms['backgroundColor'];
  children?: ReactElement<Record<string, unknown>>;
  className?: string;
  icon?: string;
  iconType?: IconType;
  placeholder?: string;
  rounded?: boolean;
  size?: AvatarSize;
}

function formatText(str: string): string {
  return startCase(str)
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
}

const Avatar: FC<AvatarProps> = ({
  backgroundColor = 'primary400',
  icon,
  iconType,
  placeholder,
  rounded,
  size = 'md',
  className,
  children,
}) => (
  <div
    className={cn(
      S.root,
      S.rootSize[size],
      rounded && S.rootRounded,
      atoms({ backgroundColor }),
      className,
    )}
  >
    {icon && <Icon className={S.icon} name={icon} type={iconType} />}

    {!icon && placeholder && (
      <span className={S.text}>{formatText(placeholder)}</span>
    )}

    {children &&
      cloneElement(children, {
        className: cn(S.image, children.props.className as string),
      })}
  </div>
);

export default Avatar;
