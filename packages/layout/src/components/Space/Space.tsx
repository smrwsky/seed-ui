import React from 'react';
import cx from 'classnames';

import { Atoms, atoms } from '../../styles/atoms.css';

import * as S from './Space.css';

export type SpaceDirection =
  | 'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse';

export interface SpaceProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  align?: Atoms['alignItems'];
  direction?: SpaceDirection;
  gutter?: Atoms['p'];
  justify?: Atoms['justifyContent'];
}

function Space(
  {
    as: As = 'div',
    align,
    direction = 'row',
    gutter,
    justify,
    children,
    ...elemProps
  }: SpaceProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element {
  return (
    <As
      {...elemProps}
      ref={ref}
      className={cx(
        S.root,
        atoms({
          direction,
          alignItems: align,
          justifyContent: justify,
        }),
      )}
    >
      {React.Children.map(children, (child, idx) =>
        React.isValidElement(child) &&
        idx < React.Children.count(children) - 1 ? (
          <div
            className={cx(
              atoms({
                pb:
                  direction === 'column' || direction === 'column-reverse'
                    ? gutter
                    : undefined,
                pr:
                  direction === 'row' || direction === 'row-reverse'
                    ? gutter
                    : undefined,
              }),
            )}
            key={idx}
          >
            {React.cloneElement(child)}
          </div>
        ) : (
          child
        ),
      )}
    </As>
  );
}

Space.displayName = 'Space';

export default React.forwardRef(Space);
