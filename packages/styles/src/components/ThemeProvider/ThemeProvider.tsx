import { FC, ReactNode, useLayoutEffect } from 'react';

import { vars } from '../../styles/global.css';
import { Theme } from '../../types';
import {
  setCssProperties,
  removeCssProperties,
} from '../../utils/css-properties';

export interface ThemeProviderProps {
  children?: ReactNode;
  theme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  theme,
  children,
}): JSX.Element => {
  useLayoutEffect(() => {
    if (!theme) {
      return;
    }

    setCssProperties(vars, theme);

    return () => {
      removeCssProperties(vars);
    };
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;
