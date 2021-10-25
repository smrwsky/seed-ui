import { createGlobalTheme } from '@vanilla-extract/css';

import { fuchsia } from './themes';

export const theme = createGlobalTheme(':root', fuchsia);
