import React, { useLayoutEffect } from 'react';

import { defaultThemeStyle } from '../themes';

export type ThemeProviderProps = {
  children?: React.ReactNode;
  theme?: string;
};

function ThemeProvider({
  theme = defaultThemeStyle,
  children,
}: ThemeProviderProps): JSX.Element {
  useLayoutEffect(() => {
    document.body.classList.add(theme);

    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);
  return <>{children}</>;
}

export default ThemeProvider;
