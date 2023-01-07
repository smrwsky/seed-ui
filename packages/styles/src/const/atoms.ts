export const display = [
  'block',
  'inline',
  'inline-block',
  'flex',
  'inline-flex',
  'none',
] as const;

export const flex = {
  1: '1 0 0',
  none: 'none',
};

export const flexWrap = ['wrap', 'nowrap'] as const;

export const flexDirection = [
  'column',
  'column-reverse',
  'row',
  'row-reverse',
] as const;

export const alignItems = [
  'baseline',
  'center',
  'end',
  'flex-end',
  'flex-start',
  'start',
  'stretch',
] as const;

export const alignSelf = [...alignItems, 'self-end', 'self-start'] as const;

export const justifyContent = [
  ...alignItems,
  'space-around',
  'space-between',
  'space-evenly',
] as const;

export const order = {
  0: 0,
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
  first: -9999,
  last: 9999,
};

export const color = {
  black: '#000000',
  white: '#FFFFFF',

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

  cian900: '#011E23',
  cian800: '#023B46',
  cian700: '#03596A',
  cian600: '#04768D',
  cian500: '#0594B0',
  cian400: '#37A9C0',
  cian300: '#69BFD0',
  cian200: '#9BD4DF',
  cian100: '#CDEAEF',
  cian50: '#E6F4F7',

  green900: '#02200E',
  green800: '#03401C',
  green700: '#056029',
  green600: '#068037',
  green500: '#08A045',
  green400: '#39B36A',
  green300: '#6BC68F',
  green200: '#9CD9B5',
  green100: '#CEECDA',
  green50: '#E6F6EC',

  orange900: '#321606',
  orange800: '#642D0C',
  orange700: '#974311',
  orange600: '#C95A17',
  orange500: '#FB701D',
  orange400: '#FC8D4A',
  orange300: '#FDA977',
  orange200: '#FDC6A5',
  orange100: '#FEE2D2',
  orange50: '#FFF1E8',

  red900: '#30070C',
  red800: '#600E18',
  red700: '#8F1524',
  red600: '#BF1C30',
  red500: '#EF233C',
  red400: '#F24F63',
  red300: '#F57B8A',
  red200: '#F9A7B1',
  red100: '#FCD3D8',
  red50: '#FDE9EC',

  grey900: '#141416',
  grey800: '#28282C',
  grey700: '#3D3D43',
  grey600: '#515159',
  grey500: '#65656F',
  grey400: '#84848C',
  grey300: '#A3A3A9',
  grey200: '#C1C1C5',
  grey100: '#E0E0E2',
  grey50: '#F0F0F1',

  light900: 'rgba(255, 255, 255, 0.9)',
  light800: 'rgba(255, 255, 255, 0.8)',
  light700: 'rgba(255, 255, 255, 0.7)',
  light600: 'rgba(255, 255, 255, 0.6)',
  light500: 'rgba(255, 255, 255, 0.5)',
  light400: 'rgba(255, 255, 255, 0.4)',
  light300: 'rgba(255, 255, 255, 0.3)',
  light200: 'rgba(255, 255, 255, 0.2)',
  light100: 'rgba(255, 255, 255, 0.1)',
  light50: 'rgba(255, 255, 255, 0.05)',

  dark900: 'rgba(0,0,0, 0.54)',
  dark800: 'rgba(0,0,0, 0.48)',
  dark700: 'rgba(0,0,0, 0.42)',
  dark600: 'rgba(0,0,0, 0.36)',
  dark500: 'rgba(0,0,0, 0.3)',
  dark400: 'rgba(0,0,0, 0.24)',
  dark300: 'rgba(0,0,0, 0.18)',
  dark200: 'rgba(0,0,0, 0.12)',
  dark100: 'rgba(0,0,0, 0.06)',
  dark50: 'rgba(0,0,0, 0.03)',
};

export const breakpoint = {
  mobile: 0,
  mobileLg: 576,
  tablet: 768,
  desktop: 992,
  desktopLg: 1200,
  desktopXl: 1400,
};

export const position = [
  'absolute',
  'fixed',
  'relative',
  'static',
  'sticky',
] as const;

export const spacing = {
  0: '0',
  0.5: '0.125rem', // 2px
  1: '0.25rem', // 4px
  1.5: '0.375rem', // 6px
  2: '0.5rem', // 8px
  2.5: '0.625rem', // 10px
  3: '0.75rem', // 12px
  3.5: '0.875rem', // 14px
  4: '1rem', // 16px
  4.5: '1.125rem', // 18px
  5: '1.25rem', // 20px
  5.5: '1.375rem', // 22px
  6: '1.5rem', // 24px
  7: '1.75rem', // 28px
  8: '2rem', // 32px
  9: '2.25rem', // 36px
  10: '2.5rem', // 40px
  11: '2.75rem', // 44px
  12: '3rem', // 48px
  14: '3.5rem', // 56px
  16: '4rem', // 64px
  20: '5rem', // 80px
  24: '6rem', // 96px
  28: '7rem', // 112px
  32: '8rem', // 128px
  36: '9rem', // 144px
  40: '10rem', // 160px
  44: '11rem', // 176px
  48: '12rem', // 192px
  52: '13rem', // 208px
  56: '14rem', // 224px
  60: '15rem', // 240px
  64: '16rem', // 256px
  72: '18rem', // 272px
  80: '20rem', // 320px
  96: '24rem', // 336px
};

export const margin = {
  ...spacing,
  '-0.5': '-0.125rem', // -2px
  '-1': '-0.25rem', // -4px
  '-1.5': '-0.375rem', // -6px
  '-2': '-0.5rem', // -8px
  '-2.5': '-0.625rem', // -10px
  '-3': '-0.75rem', // -12px
  '-3.5': '-0.875rem', // -14px
  '-4': '-1rem', // -16px
  '-4.5': '-1.125rem', // -18px
  '-5': '-1.25rem', // -20px
  '-5.5': '-1.375rem', // -22px
  '-6': '-1.5rem', // -24px
  '-7': '-1.75rem', // -28px
  '-8': '-2rem', // -32px
  '-9': '-2.25rem', // -36px
  '-10': '-2.5rem', // -40px
  '-11': '-2.75rem', // -44px
  '-12': '-3rem', // -48px
  '-14': '-3.5rem', // -56px
  '-16': '-4rem', // -64px
  '-20': '-5rem', // -80px
  '-24': '-6rem', // -96px
  '-28': '-7rem', // -112px
  '-32': '-8rem', // -128px
  '-36': '-9rem', // -144px
  '-40': '-10rem', // -160px
  '-44': '-11rem', // -176px
  '-48': '-12rem', // -192px
  '-52': '-13rem', // -208px
  '-56': '-14rem', // -224px
  '-60': '-15rem', // -240px
  '-64': '-16rem', // -256px
  '-72': '-18rem', // -272px
  '-80': '-20rem', // -320px
  '-96': '-24rem', // -336px
  'auto': 'auto',
};

export const offset = {
  ...spacing,
  auto: 'auto',
};

export const width = {
  ...spacing,
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
  'full': '100%',
  'screen': '100vw',
  'min': 'min-content',
  'max': 'max-content',
  'fit': 'fit-content',
  'auto': 'auto',
};

export const height = {
  ...spacing,
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
  'full': '100%',
  'screen': '100vh',
  'min': 'min-content',
  'max': 'max-content',
  'fit': 'fit-content',
  'auto': 'auto',
};

export const textAlign = [
  'left',
  'right',
  'center',
  'justify',
  'start',
  'end',
] as const;

export const textOverflow = ['ellipsis', 'clip'] as const;

export const lineHeight = {
  0: 0,
  none: '1',
};

export const whiteSpace = ['normal', 'nowrap'] as const;

export const overflow = ['visible', 'hidden', 'scroll', 'auto'] as const;
