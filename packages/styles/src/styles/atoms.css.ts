import {
  ConditionalValue,
  createSprinkles,
  defineProperties,
} from '@vanilla-extract/sprinkles';
import mapValues from 'lodash/mapValues';

import {
  ALIGN_ITEMS,
  ALIGN_SELF,
  BORDER_STYLE,
  BORDER_WIDTH,
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
  OUTLINE_STYLE,
  OUTLINE_WIDTH,
  OVERFLOW,
  POINTER_EVENTS,
  POSITION,
  SPACING,
  TEXT_ALIGN,
  TEXT_DECORATION,
  TEXT_OVERFLOW,
  TEXT_TRANSFORM,
  TRANSFORM,
  TRANSITION,
  VERTICAL_ALIGN,
  WHITE_SPACE,
  WIDTH,
  Z_INDEX,
} from '../const';

import { vars } from './global.css';

const baseProperties = defineProperties({
  properties: {
    borderStyle: BORDER_STYLE,
    fontFamily: vars.fontFamily,
    fontWeight: vars.fontWeight,
    letterSpacing: vars.letterSpacing,
    lineHeight: { ...vars.lineHeight, ...LINE_HEIGHT },
    textTransform: TEXT_TRANSFORM,
    objectFit: OBJECT_FIT,
    outlineStyle: OUTLINE_STYLE,
    pointerEvents: POINTER_EVENTS,
    textOverflow: TEXT_OVERFLOW,
    verticalAlign: VERTICAL_ALIGN,
    whiteSpace: WHITE_SPACE,
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

    borderBottomWidth: BORDER_WIDTH,
    borderLeftWidth: BORDER_WIDTH,
    borderRightWidth: BORDER_WIDTH,
    borderTopWidth: BORDER_WIDTH,

    borderTopLeftRadius: vars.borderRadius,
    borderTopRightRadius: vars.borderRadius,
    borderBottomLeftRadius: vars.borderRadius,
    borderBottomRightRadius: vars.borderRadius,

    marginBottom: MARGIN,
    marginLeft: MARGIN,
    marginRight: MARGIN,
    marginTop: MARGIN,

    paddingBottom: SPACING,
    paddingLeft: SPACING,
    paddingRight: SPACING,
    paddingTop: SPACING,

    outlineWidth: OUTLINE_WIDTH,

    overflowX: OVERFLOW,
    overflowY: OVERFLOW,

    transform: TRANSFORM,

    zIndex: Z_INDEX,
  },

  shorthands: {
    inset: ['top', 'right', 'bottom', 'left'],
    border: [
      'borderBottomWidth',
      'borderLeftWidth',
      'borderRightWidth',
      'borderTopWidth',
    ],
    borderLeft: ['borderLeftWidth'],
    borderRight: ['borderRightWidth'],
    borderTop: ['borderTopWidth'],
    borderBottom: ['borderBottomWidth'],
    borderX: ['borderLeftWidth', 'borderRightWidth'],
    borderY: ['borderBottomWidth', 'borderTopWidth'],
    borderRadius: [
      'borderTopLeftRadius',
      'borderTopRightRadius',
      'borderBottomLeftRadius',
      'borderBottomRightRadius',
    ],
    borderRadiusTop: ['borderTopLeftRadius', 'borderTopRightRadius'],
    borderRadiusBottom: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
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
    outline: ['outlineWidth'],
    overflow: ['overflowX', 'overflowY'],
  },
});

const colorProperties = {
  ...vars.color,
  ...COLOR,
};

const statefulProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: '&:hover:not(:disabled)' },
    active: { selector: '&:hover:not(:disabled):active' },
    focus: { selector: '&:focus' },
    focusVisible: { selector: '&:focus-visible' },
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
    outlineColor: colorProperties,
    textDecoration: TEXT_DECORATION,
    transition: { ...vars.transition, ...TRANSITION },
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
