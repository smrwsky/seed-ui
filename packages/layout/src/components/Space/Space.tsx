import React from 'react';
import cn from 'classnames';
import { atoms, Atoms } from '@seed-ui/styles';

import * as S from './Space.css';

export type SpaceDirection =
  | 'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse';

export interface SpaceProps extends React.HTMLAttributes<HTMLElement> {
  alignItems?: Atoms['alignItems'];
  as?: React.ElementType;
  direction?: SpaceDirection;
  gutter?: Atoms['p'];
  justifyContent?: Atoms['justifyContent'];
}

function Space(
  {
    as: As = 'div',
    alignItems,
    direction = 'row',
    gutter,
    justifyContent,
    children,
    ...elemProps
  }: SpaceProps,
  ref: React.Ref<HTMLElement>,
): JSX.Element {
  return (
    <As
      {...elemProps}
      className={cn(
        S.root,
        S.rootDirection[direction],
        atoms({
          alignItems,
          justifyContent,
        }),
      )}
      ref={ref}
    >
      {React.Children.map(
        children,
        (child, idx) =>
          React.isValidElement(child) && (
            <div
              className={cn(
                S.inner,
                idx < React.Children.count(children) - 1 &&
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
              {child}
            </div>
          ),
      )}
    </As>
  );
}

export default React.forwardRef(Space);
