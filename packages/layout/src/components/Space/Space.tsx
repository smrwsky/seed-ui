import { atoms, Atoms } from '@seed-ui/styles';
import cn from 'classnames';
import {
  Children,
  ElementType,
  FC,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  RefAttributes,
} from 'react';

import * as S from './Space.css';

export type SpaceDirection =
  | 'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse';

export interface SpaceProps extends HTMLAttributes<HTMLElement> {
  alignItems?: Atoms['alignItems'];
  as?: ElementType;
  direction?: SpaceDirection;
  gutter?: Atoms['p'];
  justifyContent?: Atoms['justifyContent'];
}

const Space: FC<SpaceProps & RefAttributes<HTMLDivElement>> = forwardRef(
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
      {Children.map(
        children,
        (child, idx) =>
          isValidElement(child) && (
            <div
              className={cn(
                S.inner,
                idx < Children.count(children) - 1 &&
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
