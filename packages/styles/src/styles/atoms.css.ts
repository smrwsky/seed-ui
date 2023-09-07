import {
  ConditionalValue,
  createSprinkles,
  defineProperties,
} from '@vanilla-extract/sprinkles';
import mapValues from 'lodash/mapValues';

import {
  ALIGN_ITEMS,
  ALIGN_SELF,
  BREAKPOINT,
  COLOR,
  CURSOR,
  DISPLAY,
  FLEX,
  FLEX_DIRECTION,
  FLEX_WRAP,
  HEIGHT,
  INSET,
  JUSTIFY_CONTENT,
  LINE_HEIGHT,
  MARGIN,
  MAX_HEIGHT,
  MAX_WIDTH,
  MIN_HEIGHT,
  MIN_WIDTH,
  OBJECT_FIT,
  OPACITY,
  ORDER,
  OVERFLOW,
  POINTER_EVENTS,
  POSITION,
  SPACING,
  TEXT_ALIGN,
  TEXT_DECORATION,
  TEXT_OVERFLOW,
  TEXT_TRANSFORM,
  TRANSITION,
  VERTICAL_ALIGN,
  WHITE_SPACE,
  WIDTH,
  Z_INDEX,
} from '../const';

import { vars } from './global.css';

const baseProperties = defineProperties({
  properties: {
    fontFamily: vars.fontFamily,
    fontWeight: vars.fontWeight,
    letterSpacing: vars.letterSpacing,
    lineHeight: { ...LINE_HEIGHT, ...vars.lineHeight },
    textTransform: TEXT_TRANSFORM,
    objectFit: OBJECT_FIT,
    overflowX: OVERFLOW,
    overflowY: OVERFLOW,
    pointerEvents: POINTER_EVENTS,
    textOverflow: TEXT_OVERFLOW,
    verticalAlign: VERTICAL_ALIGN,
    whiteSpace: WHITE_SPACE,
  },
  shorthands: {
    overflow: ['overflowX', 'overflowY'],
  },
});

export type ResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveProperties,
  Value
>;

const responsiveProperties = defineProperties({
  conditions: mapValues(BREAKPOINT, (bp) =>
    bp === 0 ? {} : { '@media': `screen and (min-width: ${bp}px)` },
  ),

  responsiveArray: [
    'mobile',
    'mobileLg',
    'tablet',
    'desktop',
    'desktopLg',
    'desktopXl',
  ],

  defaultCondition: 'mobile',

  properties: {
    position: POSITION,

    bottom: INSET,
    left: INSET,
    right: INSET,
    top: INSET,

    display: DISPLAY,

    fontSize: vars.fontSize,
    textAlign: TEXT_ALIGN,

    flex: FLEX,
    flexWrap: FLEX_WRAP,
    flexDirection: FLEX_DIRECTION,
    alignItems: ALIGN_ITEMS,
    alignSelf: ALIGN_SELF,
    justifyContent: JUSTIFY_CONTENT,
    order: ORDER,

    width: WIDTH,
    maxWidth: MAX_WIDTH,
    minWidth: MIN_WIDTH,

    height: HEIGHT,
    maxHeight: MAX_HEIGHT,
    minHeight: MIN_HEIGHT,

    borderBottom: vars.border,
    borderLeft: vars.border,
    borderRight: vars.border,
    borderTop: vars.border,
    borderRadius: vars.borderRadius,

    marginBottom: MARGIN,
    marginLeft: MARGIN,
    marginRight: MARGIN,
    marginTop: MARGIN,

    paddingBottom: SPACING,
    paddingLeft: SPACING,
    paddingRight: SPACING,
    paddingTop: SPACING,

    zIndex: Z_INDEX,
  },

  shorthands: {
    inset: ['top', 'right', 'bottom', 'left'],
    border: ['borderBottom', 'borderLeft', 'borderRight', 'borderTop'],
    borderX: ['borderLeft', 'borderRight'],
    borderY: ['borderBottom', 'borderTop'],
    m: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
    mt: ['marginTop'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginBottom', 'marginTop'],
    p: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    pt: ['paddingTop'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingBottom', 'paddingTop'],
    size: ['height', 'width'],
  },
});

const colorProperties = {
  ...COLOR,
  ...vars.color,
};

const statefulProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: '&:hover' },
    active: { selector: '&:active' },
    focus: { selector: '&:focus' },
    visited: { selector: '&:visited' },
    disabled: { selector: '&:disabled' },
  },
  defaultCondition: 'default',
  properties: {
    backgroundColor: colorProperties,
    borderColor: colorProperties,
    boxShadow: vars.boxShadow,
    color: colorProperties,
    cursor: CURSOR,
    opacity: OPACITY,
    textDecoration: TEXT_DECORATION,
    transition: { ...TRANSITION, ...vars.transition },
  },
  shorthands: {
    bg: ['backgroundColor'],
    shadow: ['boxShadow'],
  },
});

export type Atoms = Parameters<typeof atoms>[0];

export const atoms = createSprinkles(
  baseProperties,
  responsiveProperties,
  statefulProperties,
);
