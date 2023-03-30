import { colors } from '@seed-ui/elements';
import { create } from '@storybook/theming';

export const theme = create({
  base: 'light',
  brandTitle: 'Seed UI',
  brandImage: '/images/logo.png',
  colorPrimary: colors.fuchsia500,
  colorSecondary: colors.turquose500,
});
