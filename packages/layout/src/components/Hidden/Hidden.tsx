import React from 'react';
import cn from 'classnames';

import * as S from './Hidden.css';

export type HiddenProps = {
  children?: React.ReactNode;
  desktopUp?: boolean;
  mobileDown?: boolean;
  tablet?: boolean;
  tabletDown?: boolean;
  tabletUp?: boolean;
};

function Hidden({
  mobileDown,
  tablet,
  tabletDown,
  tabletUp,
  desktopUp,
  children,
}: HiddenProps): JSX.Element {
  return (
    <div
      className={cn(
        S.root,
        mobileDown && S.mobileDown,
        tablet && S.tablet,
        tabletDown && S.tabletDown,
        tabletUp && S.tabletUp,
        desktopUp && S.desktopUp,
      )}
    >
      {children}
    </div>
  );
}

export default Hidden;
