import type { StorybookConfig } from '@storybook/react-vite';
const { vanillaExtractPlugin } = require('@vanilla-extract/vite-plugin');
const { mergeConfig } = require('vite');

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@storybook/addon-mdx-gfm',
  ],
  staticDirs: ['./public'],
  stories: ['../packages/**/*.mdx', '../packages/**/*.stories.tsx'],
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [
        vanillaExtractPlugin({
          esbuildOptions: {
            loader: {
              '.css': 'empty',
            },
          },
        }),
      ],
    });
  },
  docs: {
    autodocs: true,
  },
};
export default config;
