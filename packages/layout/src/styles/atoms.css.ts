import {
  createMapValueFn,
  createSprinkles,
  defineProperties,
  ConditionalValue,
} from '@vanilla-extract/sprinkles';
import { mapValues } from 'lodash';
import {
  breakpoint,
  height,
  margin,
  offset,
  order,
  spacing,
  width,
} from '@seed-ui/styles';

export type ResponsiveValue<Value extends string | number> = ConditionalValue<
  typeof responsiveProperties,
  Value
>;

export type MarginProps = Pick<
  Atoms,
  'm' | 'mb' | 'ml' | 'mr' | 'mt' | 'mx' | 'my'
>;

export type OffsetProps = Pick<Atoms, 'bottom' | 'left' | 'right' | 'top'>;

export type PaddingProps = Pick<
  Atoms,
  'p' | 'pb' | 'pl' | 'pr' | 'pt' | 'px' | 'py'
>;

export type SpacingProps = MarginProps & PaddingProps;

export type SizingProps = Pick<
  Atoms,
  'height' | 'maxHeight' | 'maxWidth' | 'minHeight' | 'minWidth' | 'width'
>;

const alignItems = {
  baseline: 'baseline',
  center: 'center',
  end: 'flex-end',
  start: 'start',
  stretch: 'start',
} as const;

const alignSelf = {
  baseline: 'baseline',
  center: 'center',
  end: 'flex-end',
  start: 'start',
  stretch: 'start',
} as const;

const display = ['block', 'none'] as const;

const flexDirection = [
  'column',
  'column-reverse',
  'row',
  'row-reverse',
] as const;

const justifyContent = {
  'center': 'center',
  'end': 'flex-end',
  'space-around': 'space-around',
  'space-between': 'space-between',
  'space-evenly': 'space-evenly',
  'start': 'flex-start',
  'stretch': 'stretch',
} as const;

const position = ['absolute', 'fixed', 'relative', 'static', 'sticky'] as const;

const responsiveProperties = defineProperties({
  conditions: mapValues(breakpoint, (bp) =>
    bp === 0 ? {} : { '@media': `screen and (min-width: ${bp}px)` },
  ),
  defaultCondition: 'mobile',
  properties: {
    alignItems,
    alignSelf,
    display,
    flexDirection,
    height,
    justifyContent,
    position,
    width,
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
    order,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    paddingTop: spacing,
    right: offset,
    top: offset,
  },
  shorthands: {
    direction: ['flexDirection'],
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

export type Atoms = Parameters<typeof atoms>[0];

export const atoms = createSprinkles(responsiveProperties);

export const mapResponsiveValue = createMapValueFn(responsiveProperties);
