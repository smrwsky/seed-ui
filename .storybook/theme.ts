import { colors } from '@seed-ui/styles';
import { create } from '@storybook/theming';

export const theme = create({
  base: 'light',
  brandTitle: 'Seed UI',
  brandImage: '/images/logo.png',
  colorPrimary: colors.purple500,
  colorSecondary: colors.blue500,
});
