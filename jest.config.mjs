import baseConfig from './jest.config.base.mjs';

export default {
  ...baseConfig,
  collectCoverage: true,
  projects: ['<rootDir>/packages/**/jest.config.mjs'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '<rootDir>/packages/**/*.{ts,tsx,js}',
    '!<rootDir>/**/node_modules/**/*',
    '!<rootDir>/**/dist/**/*',
    '!<rootDir>/**/*.config.*',
    '!<rootDir>/**/*.stories.*',
    '!<rootDir>/**/*rc.*',
    '!<rootDir>/**/index.*',
    '!<rootDir>/**/jest.*',
  ],
};
