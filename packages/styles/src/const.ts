import hexToRgba from 'hex-to-rgba';

const white = '#FFFFFF';
const black = '#000000';

export const color = {
  white,
  black,

  turquose900: '#002125',
  turquose800: '#01424A',
  turquose700: '#01646F',
  turquose600: '#028594',
  turquose500: '#02A6B9',
  turquose400: '#35B8C7',
  turquose300: '#67CAD5',
  turquose200: '#9ADBE3',
  turquose100: '#CCEDF1',
  turquose50: '#E6F6F8',

  fuchsia900: '#320C0E',
  fuchsia800: '#65191D',
  fuchsia700: '#97252B',
  fuchsia600: '#CA323A',
  fuchsia500: '#FA2057',
  fuchsia400: '#FD656D',
  fuchsia300: '#FD8B91',
  fuchsia200: '#F4A7A9',
  fuchsia100: '#FED8DA',
  fuchsia50: '#FFECED',

  info900: '#011E23',
  info800: '#023B46',
  info700: '#03596A',
  info600: '#04768D',
  info500: '#0594B0',
  info400: '#37A9C0',
  info300: '#69BFD0',
  info200: '#9BD4DF',
  info100: '#CDEAEF',
  info50: '#E6F4F7',

  success900: '#02200E',
  success800: '#03401C',
  success700: '#056029',
  success600: '#068037',
  success500: '#08A045',
  success400: '#39B36A',
  success300: '#6BC68F',
  success200: '#9CD9B5',
  success100: '#CEECDA',
  success50: '#E6F6EC',

  warning900: '#321606',
  warning800: '#642D0C',
  warning700: '#974311',
  warning600: '#C95A17',
  warning500: '#FB701D',
  warning400: '#FC8D4A',
  warning300: '#FDA977',
  warning200: '#FDC6A5',
  warning100: '#FEE2D2',
  warning50: '#FFF1E8',

  danger900: '#30070C',
  danger800: '#600E18',
  danger700: '#8F1524',
  danger600: '#BF1C30',
  danger500: '#EF233C',
  danger400: '#F24F63',
  danger300: '#F57B8A',
  danger200: '#F9A7B1',
  danger100: '#FCD3D8',
  danger50: '#FDE9EC',

  neutral900: '#141416',
  neutral800: '#28282C',
  neutral700: '#3D3D43',
  neutral600: '#515159',
  neutral500: '#65656F',
  neutral400: '#84848C',
  neutral300: '#A3A3A9',
  neutral200: '#C1C1C5',
  neutral100: '#E0E0E2',
  neutral50: '#F0F0F1',

  light900: hexToRgba(white, 0.9),
  light800: hexToRgba(white, 0.8),
  light700: hexToRgba(white, 0.7),
  light600: hexToRgba(white, 0.6),
  light500: hexToRgba(white, 0.5),
  light400: hexToRgba(white, 0.4),
  light300: hexToRgba(white, 0.3),
  light200: hexToRgba(white, 0.2),
  light100: hexToRgba(white, 0.1),
  light50: hexToRgba(white, 0.05),

  dark900: hexToRgba(black, 0.9),
  dark800: hexToRgba(black, 0.8),
  dark700: hexToRgba(black, 0.7),
  dark600: hexToRgba(black, 0.6),
  dark500: hexToRgba(black, 0.5),
  dark400: hexToRgba(black, 0.4),
  dark300: hexToRgba(black, 0.3),
  dark200: hexToRgba(black, 0.2),
  dark100: hexToRgba(black, 0.1),
  dark50: hexToRgba(black, 0.05),
} as const;

export const spacing = {
  0: '0',
  0.5: '0.25rem', // 4px
  1: '0.5rem', // 8px
  1.5: '0.75rem', // 12px
  2: '1rem', // 16px
  2.5: '1.25rem', // 20px
  3: '1.5rem', // 24px
  3.5: '1.75rem', // 28px
  4: '2rem', // 32px
  4.5: '2rem', // 36px
  5: '2.5rem', // 40px
  5.5: '2.5rem', // 44px
  6: '3rem', // 48px
  7: '3.5rem', // 48px
  8: '4rem', // 64px
  9: '4.5rem', // 72px
  10: '5rem', // 80px
  11: '5.5rem', // 88px
  12: '6rem', // 96px
} as const;

export const margin = {
  ...spacing,
  '-12': '-6rem', // -96px
  '-11': '-5.5rem', // -88px
  '-10': '-5rem', // -80px
  '-9': '-4.5rem', // -72px
  '-8': '-4rem', // -64px
  '-7': '-3.5rem', // -48px
  '-6': '-3rem', // -48px
  '-5.5': '-2.5rem', // -44px
  '-5': '-2.5rem', // -40px
  '-4.5': '-2rem', // -36px
  '-4': '-2rem', // -32px
  '-3.5': '-1.75rem', // -28px
  '-3': '-1.5rem', // -24px
  '-2.5': '-1.25rem', // -20px
  '-2': '-1rem', // -16px
  '-1.5': '-0.75rem', // -12px
  '-1': '-0.5rem', // -8px
  '-0.5': '-0.25rem', // -4px
  'auto': 'auto',
} as const;

export const width = {
  ...spacing,
  '1/1': '100%',
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%',
  '1/6': '16.666667%',
  '2/6': '33.333333%',
  '3/6': '50%',
  '4/6': '66.666667%',
  '5/6': '83.333333%',
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  'auto': 'auto',
  '540': '540px',
  '720': '720px',
  '960': '960px',
  '1140': '1140px',
  '1320': '1320px',
  'screen': '100vw',
} as const;

export const height = {
  ...spacing,
  '1/1': '100%',
  'auto': 'auto',
  'screen': '100vh',
};

export const offset = {
  ...spacing,
  auto: 'auto',
} as const;

export const breakpoint = {
  mobile: 0,
  mobileLg: 576,
  tablet: 768,
  desktop: 992,
  desktopLg: 1200,
  desktopXl: 1400,
} as const;

export const border = {
  none: 'none',
  1: '1px solid currentColor',
} as const;

export const borderRadius = {
  'sm': '0.125rem',
  'md': '0.375rem',
  'lg': '0.5rem',
  'xl': '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  'max': '9999px',
};

export const boxShadow = {
  'xs': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  'sm': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.06)',
  'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06)',
  'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)',
  'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  'inset': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.06)',
  'none': 'none',
};

export const order = {
  first: -9999,
  last: 9999,
  none: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  11: 11,
  12: 12,
} as const;

export const transitionTime = {
  sm: '0.15s',
  md: '0.3s',
  lg: '0.6s',
} as const;

export const transitionTimingFunction = {
  'in': 'cubic-bezier(0.4, 0, 1, 1)',
  'out': 'cubic-bezier(0, 0, 0.2, 1)',
  'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;
