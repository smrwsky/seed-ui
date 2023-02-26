const baseConfig = require('../../jest.config.base');

const packageJson = require('./package.json');

const packageName = packageJson.name;

module.exports = {
  ...baseConfig,
  displayName: packageName,
  rootDir: '../..',
};
