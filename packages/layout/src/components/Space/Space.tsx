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

const Space: React.FC<SpaceProps & React.RefAttributes<HTMLDivElement>> =
  React.forwardRef(
    (
      {
        alignItems,
        direction = 'row',
        gutter,
        justifyContent,
        children,
        ...elemProps
      },
      ref,
    ) => (
      <div
        className={cn(
          S.root,
          S.rootDirection[direction],
          atoms({
            alignItems,
            justifyContent,
          }),
        )}
        ref={ref}
        {...elemProps}
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
      </div>
    ),
  );

Space.displayName = 'Space';

export default Space;
