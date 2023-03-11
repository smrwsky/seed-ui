const baseConfig = require('./jest.config.base');

module.exports = {
  ...baseConfig,
  collectCoverage: true,
  projects: ['<rootDir>/packages/**/jest.config.js'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '<rootDir>/packages/**/*.{ts,tsx,js}',
    '!<rootDir>/packages/**/node_modules/**/*.{ts,tsx,js,jsx}',
    '!<rootDir>/packages/**/dist/**/*.{ts,tsx,js,jsx}',
    '!<rootDir>/packages/**/index.{ts,tsx,js,jsx}',
    '!<rootDir>/packages/**/*.stories.{ts,tsx,js,jsx}',
  ],
};
