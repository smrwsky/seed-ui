import {
  createMapValueFn,
  createSprinkles,
  defineProperties,
  ConditionalValue,
} from '@vanilla-extract/sprinkles';
import { mapValues } from 'lodash';

import {
  border,
  borderRadius,
  boxShadow,
  breakpoint,
  height,
  margin,
  offset,
  order,
  spacing,
  width,
} from './const';
import { theme } from './theme.css';

export type ResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveProperties,
  Value
>;

const alignItems = [
  'baseline',
  'center',
  'end',
  'flex-end',
  'flex-start',
  'start',
  'stretch',
] as const;

const alignSelf = [...alignItems, 'self-end', 'self-start'] as const;

const display = ['block', 'none'] as const;

const flex = {
  none: 'none',
  1: '1 0 0',
};

const flexDirection = [
  'column',
  'column-reverse',
  'row',
  'row-reverse',
] as const;

const justifyContent = [
  ...alignItems,
  'space-around',
  'space-between',
  'space-evenly',
] as const;

const justifySelf = alignSelf;

const position = ['absolute', 'fixed', 'relative', 'static', 'sticky'] as const;

const textAlign = {
  center: 'center',
  start: 'start',
  end: 'end',
  justify: 'justify',
} as const;

export const responsiveProperties = defineProperties({
  conditions: mapValues(breakpoint, (bp) =>
    bp === 0 ? {} : { '@media': `screen and (min-width: ${bp}px)` },
  ),
  defaultCondition: 'mobile',
  properties: {
    alignItems,
    alignSelf,
    borderRadius,
    display,
    flex,
    flexDirection,
    height,
    justifyContent,
    justifySelf,
    order,
    position,
    textAlign,
    width,
    borderBottom: border,
    borderLeft: border,
    borderRight: border,
    borderTop: border,
    bottom: offset,
    left: offset,
    marginBottom: margin,
    marginLeft: margin,
    marginRight: margin,
    marginTop: margin,
    maxHeight: height,
    maxWidth: width,
    minHeight: height,
    minWidth: width,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    paddingTop: spacing,
    right: offset,
    top: offset,
  },
  shorthands: {
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
  },
});

export const unresponsiveProperties = defineProperties({
  properties: {
    boxShadow,
    backgroundColor: theme.color,
    borderColor: theme.color,
  },
});

export type Atoms = Parameters<typeof atoms>[0];

export const atoms = createSprinkles(
  responsiveProperties,
  unresponsiveProperties,
);

export const mapResponsiveValue = createMapValueFn(responsiveProperties);
