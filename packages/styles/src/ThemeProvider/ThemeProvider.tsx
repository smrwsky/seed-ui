import React from 'react';

import { defaultThemeStyle } from './ThemeProvider.css';

export type ThemeProviderProps = {
  children?: React.ReactNode;
  theme?: string;
};

function ThemeProvider({
  theme = defaultThemeStyle,
  children,
}: ThemeProviderProps): JSX.Element {
  return <div className={theme}>{children}</div>;
}

export default ThemeProvider;
