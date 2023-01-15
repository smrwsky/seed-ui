import {
  ConditionalValue,
  createMapValueFn,
  createSprinkles,
  defineProperties,
} from '@vanilla-extract/sprinkles';
import { mapValues } from 'lodash';

import {
  alignItems,
  alignSelf,
  breakpoint,
  display,
  flex,
  flexDirection,
  flexWrap,
  height,
  justifyContent,
  lineHeight,
  margin,
  offset,
  order,
  overflow,
  position,
  spacing,
  textAlign,
  textOverflow,
  whiteSpace,
  width,
} from './const';
import { vars } from './vars.css';

export type ResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveProperties,
  Value
>;

export const baseProperties = defineProperties({
  properties: {
    textOverflow,
    whiteSpace,
  },
});

const widthProperties = {
  ...width,
  ...vars.width,
};

export const responsiveProperties = defineProperties({
  conditions: mapValues(breakpoint, (bp) =>
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
    position,

    bottom: offset,
    left: offset,
    right: offset,
    top: offset,

    display,

    flex,
    flexWrap,
    flexDirection,
    alignItems,
    alignSelf,
    justifyContent,
    order,

    width: widthProperties,
    maxWidth: widthProperties,
    minWidth: widthProperties,

    height,
    maxHeight: height,
    minHeight: height,

    borderBottom: vars.border,
    borderLeft: vars.border,
    borderRight: vars.border,
    borderTop: vars.border,
    borderRadius: vars.borderRadius,

    lineHeight,
    textAlign,

    marginBottom: margin,
    marginLeft: margin,
    marginRight: margin,
    marginTop: margin,

    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    paddingTop: spacing,

    overflowX: overflow,
    overflowY: overflow,

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

export const colorProperties = defineProperties({
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

export const mapResponsiveValue = createMapValueFn(responsiveProperties);

export type Atoms = Parameters<typeof atoms>[0];

export const atoms = createSprinkles(
  baseProperties,
  responsiveProperties,
  colorProperties,
);
