import React from 'react';
import cx from 'classnames';
import { Atoms, atoms } from '@seed-ui/styles';

import * as S from './Space.css';

export interface SpaceProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  align?: Atoms['alignItems'];
  direction?: Atoms['flexDirection'];
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
          alignItems: align,
          flexDirection: direction,
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
