import baseConfig from '../../jest.config.base.mjs';

import packageJson from './package.json' assert { type: 'json' };

const packageName = packageJson.name;

export default {
  ...baseConfig,
  displayName: packageName,
  rootDir: '../..',
};
