const baseConfig = require('./jest.config.base');

module.exports = {
  ...baseConfig,
  collectCoverage: true,
  projects: ['<rootDir>/services/crm/jest.config.js'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '<rootDir>/services/**/*.{ts,tsx,js}',
    '!/node_modules/**/*.{ts,tsx,js}',
    '!/dist/**/*.{ts,tsx,js}',
    '!/__testfixtures__/**/*',
    '!/__stories__/**/*',
    '!**/*/.next/**/*.{ts,tsx,js}',
    '!**/*.namespace*',
    '!**/*.styles*',
    '!**/*.memo*',
    '!**/*.lazy*',
    '!**/*/index.{ts,tsx,js}',
  ],
};
