import { FC, ReactNode, useLayoutEffect } from 'react';

import 'minireset.css';

import { defaultTheme } from '../../styles/reboot.css';

export interface ThemeProviderProps {
  children?: ReactNode;
  theme?: string;
}

const ThemeProvider: FC<ThemeProviderProps> = ({
  theme = defaultTheme,
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
