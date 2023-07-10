import { style } from '@vanilla-extract/css';

import { atoms } from './atoms.css';
import { vars } from './global.css';

export const titleXlPrimary = style({
  fontFamily: vars.fontFamily.primary,
  ...vars.typography.titleXl.primary,
});

export const titleXlSecondary = style({
  fontFamily: vars.fontFamily.secondary,
  ...vars.typography.titleXl.secondary,
});

export const titleLgPrimary = style({
  fontFamily: vars.fontFamily.primary,
  ...vars.typography.titleLg.primary,
});

export const titleLgSecondary = style({
  fontFamily: vars.fontFamily.secondary,
  ...vars.typography.titleLg.secondary,
});

export const titleMdPrimary = style({
  fontFamily: vars.fontFamily.primary,
  ...vars.typography.titleMd.primary,
});

export const titleMdSecondary = style({
  fontFamily: vars.fontFamily.secondary,
  ...vars.typography.titleMd.secondary,
});

export const titleSmPrimary = style({
  fontFamily: vars.fontFamily.primary,
  ...vars.typography.titleSm.primary,
});

export const titleSmSecondary = style({
  fontFamily: vars.fontFamily.secondary,
  ...vars.typography.titleSm.secondary,
});

export const subtitleMdPrimary = style({
  fontFamily: vars.fontFamily.primary,
  ...vars.typography.subtitleMd.primary,
});

export const subtitleMdSecondary = style({
  fontFamily: vars.fontFamily.secondary,
  ...vars.typography.subtitleMd.secondary,
});

export const subtitleSmPrimary = style({
  fontFamily: vars.fontFamily.primary,
  ...vars.typography.subtitleSm.primary,
});

export const subtitleSmSecondary = style({
  fontFamily: vars.fontFamily.secondary,
  ...vars.typography.subtitleSm.secondary,
});

export const textMdPrimary = style({
  fontFamily: vars.fontFamily.primary,
  ...vars.typography.textMd.primary,
});

export const textMdSecondary = style({
  fontFamily: vars.fontFamily.secondary,
  ...vars.typography.textMd.secondary,
});

export const textSmPrimary = style({
  fontFamily: vars.fontFamily.primary,
  ...vars.typography.textSm.primary,
});

export const textSmSecondary = style({
  fontFamily: vars.fontFamily.secondary,
  ...vars.typography.textSm.secondary,
});

export const textButton = style({
  fontFamily: vars.fontFamily.primary,
  ...vars.typography.textButton,
});

export const labelMd = style({
  fontFamily: vars.fontFamily.primary,
  ...vars.typography.labelMd,
});

export const labelSm = style({
  fontFamily: vars.fontFamily.primary,
  ...vars.typography.labelSm,
});

export const overline = style({
  fontFamily: vars.fontFamily.primary,
  ...vars.typography.overline,
});

export const caption = style({
  fontFamily: vars.fontFamily.primary,
  ...vars.typography.caption,
});

export const bold = style({
  ...vars.typography.bold,
});

export const textTruncate = atoms({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const textBreak = style({
  wordWrap: 'break-word',
  wordBreak: 'break-word',
});
