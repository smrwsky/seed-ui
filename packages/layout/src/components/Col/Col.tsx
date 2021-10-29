import React from 'react';
import cx from 'classnames';

import { atoms, Atoms, ResponsiveValue } from '../../styles/atoms.css';

import * as S from './Col.css';

export type ColWidthValue =
  | '1/1'
  | '1/2'
  | '1/3'
  | '2/3'
  | '1/4'
  | '2/4'
  | '3/4'
  | '1/5'
  | '2/5'
  | '3/5'
  | '4/5'
  | '1/6'
  | '2/6'
  | '3/6'
  | '4/6'
  | '5/6'
  | '1/12'
  | '2/12'
  | '3/12'
  | '4/12'
  | '5/12'
  | '6/12'
  | '7/12'
  | '8/12'
  | 'auto';

export type ColWidth = ResponsiveValue<ColWidthValue>;

export interface ColProps extends React.HTMLAttributes<HTMLElement> {
  alignSelf?: Atoms['alignSelf'];
  display?: Atoms['display'];
  flex?: Atoms['flex'];
  justifySelf?: Atoms['justifySelf'];
  order?: Atoms['order'];
  width?: ColWidth;
}

function Col(
  {
    alignSelf,
    display,
    flex = 'none',
    justifySelf,
    order,
    width,
    className,
    children,
    ...elemProps
  }: ColProps,
  ref: React.Ref<HTMLDivElement>,
): JSX.Element {
  return (
    <div
      {...elemProps}
      ref={ref}
      className={cx(
        S.root,
        atoms({
          alignSelf,
          display,
          flex,
          justifySelf,
          order,
          width,
        }),
        className,
      )}
    >
      {children}
    </div>
  );
}

Col.displayName = 'Col';

export default React.forwardRef(Col);
