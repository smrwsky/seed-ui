const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
  ],
  core: {
    builder: 'webpack5',
  },
  features: {
    previewCsfV3: true,
  },
  framework: '@storybook/react',
  staticDirs: ['../public'],
  stories: ['../packages/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  webpack: (config) => {
    config.plugins.push(new VanillaExtractPlugin());
    return config;
  },
};
