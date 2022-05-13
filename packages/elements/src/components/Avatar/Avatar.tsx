import React from 'react';
import { atoms, Atoms } from '@seed-ui/styles';
import { Squircle } from 'react-ios-corners';
import cn from 'classnames';
import { startCase } from 'lodash';

import * as S from './Avatar.css';

export type AvatarShape = 'circle' | 'square';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type AvatarProps = {
  backgroundColor?: Atoms['backgroundColor'];
  children?: React.ReactElement;
  className?: string;
  icon?: React.ReactElement;
  placeholder?: string;
  shape?: AvatarShape;
  size?: AvatarSize;
};

function formatText(str: string): string {
  return startCase(str)
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
}

function getSquircleRadius(size: AvatarSize) {
  return (
    (size === 'xs' && 4) || ('sm' && 6) || ('md' && 8) || ('lg' && 12) || 16
  );
}

function Avatar({
  backgroundColor = 'primary500',
  icon,
  placeholder,
  shape = 'circle',
  size = 'md',
  className,
  children,
}: AvatarProps): JSX.Element {
  const avatarContent = (
    <>
      {icon &&
        React.cloneElement<HTMLElement>(icon, {
          className: cn(S.icon, icon.props.className),
        })}

      {!icon && placeholder && (
        <span className={S.text}>{formatText(placeholder)}</span>
      )}

      {children &&
        React.cloneElement(children, {
          className: cn(S.image, children.props.className),
        })}
    </>
  );

  return shape === 'square' ? (
    <Squircle
      className={cn(
        S.root,
        S.rootSize[size],
        atoms({ backgroundColor }),
        className,
      )}
      radius={getSquircleRadius(size)}
      ratio={0.3}
    >
      {avatarContent}
    </Squircle>
  ) : (
    <div
      className={cn(
        S.root,
        S.rootShape[shape],
        S.rootSize[size],
        atoms({ backgroundColor }),
        className,
      )}
    >
      {avatarContent}
    </div>
  );
}

export default Avatar;
