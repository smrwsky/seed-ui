import { FC, ReactNode, useLayoutEffect } from 'react';

import { defaultThemeStyle } from '../themes';

export interface ThemeProviderProps {
  children?: ReactNode;
  theme?: string;
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  theme = defaultThemeStyle,
  children,
}): JSX.Element => {
  useLayoutEffect(() => {
    document.body.classList.add(theme);

    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);
  return <>{children}</>;
};

export default ThemeProvider;
