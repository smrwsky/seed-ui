/**
 * Use this file for constants that are used in atoms but can be written
 * manually in *.css files. Values that are used in both atoms and *.css files
 * should be defined in themes.ts and accessed through `vars` object.
 */

export const ALIGN_ITEMS = [
  'baseline',
  'center',
  'end',
  'flex-end',
  'flex-start',
  'start',
  'stretch',
] as const;

export const ALIGN_SELF = [...ALIGN_ITEMS, 'self-end', 'self-start'] as const;

export const BREAKPOINT = {
  mobile: 0,
  mobileLg: 576,
  tablet: 768,
  desktop: 992,
  desktopLg: 1200,
  desktopXl: 1400,
};

export const COLOR = {
  currentColor: 'currentColor',
  inherit: 'inherit',
  transparent: 'transparent',
};

export const CURSOR = [
  'auto',
  'default',
  'pointer',
  'wait',
  'text',
  'move',
  'help',
  'not-allowed',
] as const;

export const DISPLAY = [
  'block',
  'inline',
  'inline-block',
  'flex',
  'inline-flex',
  'none',
] as const;

export const FLEX = {
  1: '1 0 0',
  none: 'none',
};

export const FLEX_WRAP = ['wrap', 'nowrap'] as const;

export const FLEX_DIRECTION = [
  'column',
  'column-reverse',
  'row',
  'row-reverse',
] as const;

export const JUSTIFY_CONTENT = [
  ...ALIGN_ITEMS,
  'space-around',
  'space-between',
  'space-evenly',
] as const;

export const LINE_HEIGHT = {
  none: '1',
};

export const OPACITY = {
  0: '0',
  5: '0.05',
  10: '0.1',
  15: '0.15',
  20: '0.2',
  25: '0.25',
  30: '0.3',
  35: '0.35',
  40: '0.4',
  45: '0.45',
  50: '0.5',
  55: '0.55',
  60: '0.6',
  65: '0.65',
  70: '0.7',
  75: '0.75',
  80: '0.8',
  85: '0.85',
  90: '0.9',
  95: '0.95',
  100: '1',
};

export const OBJECT_FIT = ['contain', 'cover'] as const;

export const ORDER = {
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

export const OVERFLOW = ['visible', 'hidden', 'scroll', 'auto'] as const;

export const POINTER_EVENTS = ['auto', 'none'] as const;

export const POSITION = [
  'absolute',
  'fixed',
  'relative',
  'static',
  'sticky',
] as const;

export const SPACING = {
  px: '1px',
  0: '0',
  0.5: '0.125rem', // 2px
  1: '0.25rem', // 4px
  1.5: '0.375rem', // 6px
  2: '0.5rem', // 8px
  2.5: '0.625rem', // 10px
  3: '0.75rem', // 12px
  3.5: '0.875rem', // 14px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
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

export const TEXT_TRANSFORM = [
  'none',
  'uppercase',
  'lowercase',
  'capitalize',
] as const;

export const HEIGHT = {
  'auto': 'auto',
  ...SPACING,
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
  'svw': '100svw',
  'lvw': '100lvw',
  'dvw': '100dvw',
  'min': 'min-content',
  'max': 'max-content',
  'fit': 'fit-content',
};

export const MARGIN = {
  'auto': 'auto',
  ...SPACING,
  '-0.5': '-0.125rem', // -2px
  '-1': '-0.25rem', // -4px
  '-1.5': '-0.375rem', // -6px
  '-2': '-0.5rem', // -8px
  '-2.5': '-0.625rem', // -10px
  '-3': '-0.75rem', // -12px
  '-3.5': '-0.875rem', // -14px
  '-4': '-1rem', // -16px
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
};

export const INSET = {
  ...MARGIN,
  '1/2': '50%',
  '1/3': '33.333333%',
  '2/3': '66.666667%',
  '1/4': '25%',
  '2/4': '50%',
  '3/4': '75%',
  'full': '100%',
};

export const MAX_HEIGHT = {
  ...SPACING,
  none: 'none',
  full: '100%',
  screen: '100vh',
  svh: '100svh',
  lvh: '100lvh',
  dvh: '100dvh',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
};

export const MAX_WIDTH = {
  'none': 'none',
  0: '0rem',
  'xs': '20rem', // 320px
  'sm': '24rem', // 384px
  'md': '28rem', // 448px
  'lg': '32rem', // 512px
  'xl': '36rem', // 576px
  '2xl': '42rem', // 672px
  '3xl': '48rem', // 768px
  '4xl': '56rem', // 896px
  '5xl': '64rem', // 1024px
  '6xl': '72rem', // 1152px
  '7xl': '80rem', // 1280px
  'full': '100%', // 100%
  'min': 'min-content',
  'max': 'max-content',
  'fit': 'fit-content',
  'prose': '65ch',
  ...BREAKPOINT,
};

export const MIN_HEIGHT = {
  ...SPACING,
  full: '100%',
  screen: '100vh',
  svh: '100svh',
  lvh: '100lvh',
  dvh: '100dvh',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
};

export const MIN_WIDTH = {
  ...SPACING,
  0: '0px',
  full: '100%',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
};

export const WIDTH = {
  'auto': 'auto',
  ...SPACING,
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
  'svh': '100svh',
  'lvh': '100lvh',
  'dvh': '100dvh',
  'min': 'min-content',
  'max': 'max-content',
  'fit': 'fit-content',
};

export const TEXT_ALIGN = [
  'left',
  'right',
  'center',
  'justify',
  'start',
  'end',
] as const;

export const TEXT_DECORATION = [
  'none',
  'underline',
  'line-through',
  'overline',
] as const;

export const TEXT_OVERFLOW = ['ellipsis', 'clip'] as const;

export const TRANSFORM = {
  none: 'none',
  translateMiddle: 'translate(-50%, -50%)',
  translateXMiddle: 'translateX(-50%)',
  translateYMiddle: 'translateY(-50%)',
};

export const TRANSITION = {
  none: 'none',
};

export const VERTICAL_ALIGN = ['baseline', 'top', 'middle', 'bottom'] as const;

export const WHITE_SPACE = ['normal', 'nowrap'] as const;

export const Z_INDEX = {
  auto: 'auto',
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
};
