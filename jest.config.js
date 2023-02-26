const baseConfig = require('./jest.config.base');

module.exports = {
  ...baseConfig,
  collectCoverage: true,
  projects: ['<rootDir>/packages/**/jest.config.js'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '<rootDir>/packages/**/*.{ts,tsx,js}',
    '!/node_modules/**/*.{ts,tsx,js}',
    '!/dist/**/*.{ts,tsx,js}',
  ],
};
