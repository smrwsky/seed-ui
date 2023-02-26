import cn from 'classnames';
import { FC, ReactNode } from 'react';

import * as S from './Hidden.css';

export type HiddenProps = {
  children?: ReactNode;
  desktop?: boolean;
  desktopDown?: boolean;
  desktopUp?: boolean;
  desktopLg?: boolean;
  desktopLgDown?: boolean;
  desktopLgUp?: boolean;
  desktopXlUp?: boolean;
  mobileDown?: boolean;
  mobileLg?: boolean;
  mobileLgDown?: boolean;
  mobileLgUp?: boolean;
  tablet?: boolean;
  tabletDown?: boolean;
  tabletUp?: boolean;
};

const Hidden: FC<HiddenProps> = ({
  desktop,
  desktopDown,
  desktopUp,
  desktopLg,
  desktopLgDown,
  desktopLgUp,
  desktopXlUp,
  mobileDown,
  mobileLg,
  mobileLgDown,
  mobileLgUp,
  tablet,
  tabletDown,
  tabletUp,
  children,
}) => (
  <div
    className={cn(
      S.root,
      desktop && S.desktop,
      desktopDown && S.desktopDown,
      desktopUp && S.desktopUp,
      desktopLg && S.desktopLg,
      desktopLgDown && S.desktopLgDown,
      desktopLgUp && S.desktopLgUp,
      desktopXlUp && S.desktopXlUp,
      mobileDown && S.mobileDown,
      mobileLg && S.mobileLg,
      mobileLgDown && S.mobileLgDown,
      mobileLgUp && S.mobileLgUp,
      tablet && S.tablet,
      tabletDown && S.tabletDown,
      tabletUp && S.tabletUp,
    )}
  >
    {children}
  </div>
);

Hidden.displayName = 'Hidden';

export default Hidden;
