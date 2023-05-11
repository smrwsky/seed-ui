import {
  ConditionalValue,
  createMapValueFn,
  createSprinkles,
  defineProperties,
} from '@vanilla-extract/sprinkles';
import { mapValues } from 'lodash';

import {
  ALIGN_ITEMS,
  ALIGN_SELF,
  BREAKPOINT,
  DISPLAY,
  FLEX,
  FLEX_DIRECTION,
  FLEX_WRAP,
  HEIGHT,
  JUSTIFY_CONTENT,
  LINE_HEIGHT,
  MARGIN,
  OFFSET,
  ORDER,
  OVERFLOW,
  POSITION,
  SPACING,
  TEXT_ALIGN,
  TEXT_OVERFLOW,
  WHITE_SPACE,
  WIDTH,
} from '../const';

import { vars } from './global.css';

const baseProperties = defineProperties({
  properties: {
    textOverflow: TEXT_OVERFLOW,
    whiteSpace: WHITE_SPACE,
  },
});

const widthProperties = {
  ...WIDTH,
  ...vars.width,
};

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

    bottom: OFFSET,
    left: OFFSET,
    right: OFFSET,
    top: OFFSET,

    display: DISPLAY,

    flex: FLEX,
    flexWrap: FLEX_WRAP,
    flexDirection: FLEX_DIRECTION,
    alignItems: ALIGN_ITEMS,
    alignSelf: ALIGN_SELF,
    justifyContent: JUSTIFY_CONTENT,
    order: ORDER,

    width: widthProperties,
    maxWidth: widthProperties,
    minWidth: widthProperties,

    height: HEIGHT,
    maxHeight: HEIGHT,
    minHeight: HEIGHT,

    borderBottom: vars.border,
    borderLeft: vars.border,
    borderRight: vars.border,
    borderTop: vars.border,
    borderRadius: vars.borderRadius,

    lineHeight: LINE_HEIGHT,
    textAlign: TEXT_ALIGN,

    marginBottom: MARGIN,
    marginLeft: MARGIN,
    marginRight: MARGIN,
    marginTop: MARGIN,

    paddingBottom: SPACING,
    paddingLeft: SPACING,
    paddingRight: SPACING,
    paddingTop: SPACING,

    overflowX: OVERFLOW,
    overflowY: OVERFLOW,

    zIndex: vars.zIndex,
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
    overflow: ['overflowX', 'overflowY'],
  },
});

export const mapResponsiveValue = createMapValueFn(responsiveProperties);

const colorProperties = defineProperties({
  properties: {
    borderColor: vars.color,
    color: vars.color,
    backgroundColor: vars.color,
    boxShadow: vars.boxShadow,
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
  colorProperties,
);
