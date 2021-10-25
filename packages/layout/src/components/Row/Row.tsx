import React from 'react';
import cx from 'classnames';

import {
  Atoms,
  atoms,
  mapResponsiveValue,
  ResponsiveValue,
} from '../../styles/atoms.css';

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

export interface RowProps extends React.HTMLAttributes<HTMLElement> {
  align?: Atoms['alignItems'];
  gutter?: RowGutter;
  gutterX?: RowGutter;
  gutterY?: RowGutter;
  justify?: Atoms['justifyContent'];
}

const getRowMT = (n: RowGutterValue): RowGutterValue | undefined =>
  Number.isNaN(n) ? undefined : (-n as RowGutterValue);

const getRowMX = (n: RowGutterValue): RowGutterValue | undefined =>
  Number.isNaN(n) ? undefined : ((-n / 2) as RowGutterValue);

const getColPX = (n: RowGutterValue): RowGutterValue | undefined =>
  Number.isNaN(n) ? undefined : ((n / 2) as RowGutterValue);

function Row(
  {
    align,
    gutter,
    gutterX,
    gutterY,
    justify,
    children,
    ...elemProps
  }: RowProps,
  ref: React.Ref<HTMLDivElement>,
): JSX.Element {
  const gx = gutterX || gutter;
  const gy = gutterY || gutter;

  return (
    <div
      {...elemProps}
      ref={ref}
      className={cx(
        S.root,
        atoms({
          alignItems: align,
          justifyContent: justify,
          mt: gy && mapResponsiveValue(gy, getRowMT),
          mx: gx && mapResponsiveValue(gx, getRowMX),
        }),
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              className: atoms({
                mt: gy,
                px: gx && mapResponsiveValue(gx, getColPX),
              }),
            })
          : child,
      )}
    </div>
  );
}

Row.displayName = 'Row';

export default React.forwardRef(Row);
