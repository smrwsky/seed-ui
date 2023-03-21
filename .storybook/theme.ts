import { color } from '@seed-ui/styles';
import { create } from '@storybook/theming';

export const theme = create({
  base: 'light',
  brandTitle: 'Seed UI',
  brandImage: '/images/logo.png',
  colorPrimary: color.fuchsia500,
  colorSecondary: color.turquose500,
});
