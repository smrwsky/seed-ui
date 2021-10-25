import React from 'react';
import cx from 'classnames';

import * as S from './Hidden.css';

export type HiddenProps = {
  mobileDown?: boolean;
  tablet?: boolean;
  tabletDown?: boolean;
  tabletUp?: boolean;
  desktopUp?: boolean;
  children?: React.ReactNode;
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
      className={cx(
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

Hidden.displayName = 'Hidden';

export default Hidden;
