const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
  stories: ['../packages/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: { transpileManager: true },
    },
    '@storybook/addon-docs',
    '@storybook/addon-storysource',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    'storybook-addon-performance',
    'storybook-addon-themes',
  ],
  staticDirs: ['../public'],
  webpackFinal: (config) => {
    // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test instanceof RegExp && rule.test.test('.svg'),
    );

    fileLoaderRule.exclude = /\.react.svg$/;

    config.module.rules.push({
      test: /\.react.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack'),
      options: {
        // NOTE: disable this and manually add `removeViewBox: false` in the SVGO plugins list
        // See related PR: https://github.com/smooth-code/svgr/pull/137
        icon: false,
        svgoConfig: {
          plugins: [
            { removeViewBox: false },
            // Keeps ID's of svgs so they can be targeted with CSS
            { cleanupIDs: false },
          ],
        },
      },
    });

    config.plugins.push(new VanillaExtractPlugin());

    return config;
  },
};
