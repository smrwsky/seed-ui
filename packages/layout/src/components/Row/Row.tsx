import {
  atoms,
  Atoms,
  mapResponsiveValue,
  ResponsiveValue,
} from '@seed-ui/styles';
import cn from 'classnames';
import {
  Children,
  cloneElement,
  FC,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  RefAttributes,
} from 'react';

import * as S from './Row.css';

export type RowGutterValue =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

export type RowGutter = ResponsiveValue<RowGutterValue>;

export interface RowProps extends HTMLAttributes<HTMLElement> {
  alignItems?: Atoms['alignItems'];
  gutter?: RowGutter;
  gutterX?: RowGutter;
  gutterY?: RowGutter;
  justifyContent?: Atoms['justifyContent'];
}

const getRowMT = (n: RowGutterValue): RowGutterValue | undefined =>
  Number.isNaN(n) ? undefined : (-n as RowGutterValue);

const getRowMX = (n: RowGutterValue): RowGutterValue | undefined =>
  Number.isNaN(n) ? undefined : ((-n / 2) as RowGutterValue);

const getColPX = (n: RowGutterValue): RowGutterValue | undefined =>
  Number.isNaN(n) ? undefined : ((n / 2) as RowGutterValue);

const Row: FC<RowProps & RefAttributes<HTMLDivElement>> = forwardRef(
  (
    {
      alignItems,
      gutter,
      gutterX,
      gutterY,
      justifyContent,
      children,
      ...elemProps
    },
    ref,
  ) => {
    const gx = gutterX || gutter;
    const gy = gutterY || gutter;

    return (
      <div
        {...elemProps}
        className={cn(
          S.root,
          atoms({
            alignItems,
            justifyContent,
            mt: gy && mapResponsiveValue(gy, getRowMT),
            mx: gx && mapResponsiveValue(gx, getRowMX),
          }),
        )}
        ref={ref}
      >
        {Children.map(children, (child) =>
          isValidElement(child)
            ? cloneElement(child, {
                className: cn(
                  atoms({
                    mt: gy,
                    px: gx && mapResponsiveValue(gx, getColPX),
                  }),
                  child.props.className,
                ),
              })
            : child,
        )}
      </div>
    );
  },
);

Row.displayName = 'Row';

export default Row;
