import React from 'react';
import { atoms, Atoms } from '@seed-ui/styles';
import cn from 'classnames';
import { startCase } from 'lodash';
import { Icon, IconType } from '@seed-ui/icons';

import * as S from './Avatar.css';

export type AvatarSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl';

export type AvatarProps = {
  backgroundColor?: Atoms['backgroundColor'];
  children?: React.ReactElement;
  className?: string;
  icon?: string;
  iconType?: IconType;
  placeholder?: string;
  rounded?: boolean;
  size?: AvatarSize;
};

function formatText(str: string): string {
  return startCase(str)
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
}

function Avatar({
  backgroundColor = 'secondary500',
  icon,
  iconType,
  placeholder,
  rounded,
  size = 'md',
  className,
  children,
}: AvatarProps): JSX.Element {
  return (
    <div
      className={cn(
        S.root,
        S.rootSize[size],
        rounded && S.rootRounded,
        atoms({ backgroundColor }),
        className,
      )}
    >
      {icon && <Icon className={cn(S.icon)} name={icon} type={iconType} />}

      {!icon && placeholder && (
        <span className={S.text}>{formatText(placeholder)}</span>
      )}

      {children &&
        React.cloneElement(children, {
          className: cn(S.image, children.props.className),
        })}
    </div>
  );
}

export default Avatar;
