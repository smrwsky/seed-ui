import { MARGIN, SPACING, vars } from '@seed-ui/styles';
import { style, styleVariants } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  borderRadius: vars.borderRadius.lg,
  padding: SPACING[3],
});

export const rootVariant = styleVariants({
  danger: {
    border: `1px solid ${vars.color.danger100}`,
    color: vars.color.danger600,
    background: vars.color.danger50,
  },
  warning: {
    border: `1px solid ${vars.color.warning100}`,
    color: vars.color.warning600,
    background: vars.color.warning50,
  },
  info: {
    border: `1px solid ${vars.color.info100}`,
    color: vars.color.info600,
    background: vars.color.info50,
  },
  success: {
    border: `1px solid ${vars.color.success100}`,
    color: vars.color.success600,
    background: vars.color.success50,
  },
});

export const icon = style({
  marginRight: SPACING[3],
});

export const iconVariant = styleVariants({
  danger: {
    color: vars.color.danger400,
  },
  warning: {
    color: vars.color.warning400,
  },
  info: {
    color: vars.color.info400,
  },
  success: {
    color: vars.color.success400,
  },
});

export const title = style({
  color: 'inherit!important',
  marginTop: MARGIN[-0.5],
  marginBottom: MARGIN[1],
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: '1.5rem',
  color: 'inherit',
  marginTop: MARGIN[0.5],
});
