const packageJson = require('./package.json');

const packageName = packageJson.name;

module.exports = {
  clearMocks: true,
  displayName: packageName,
  globals: {
    'process.env': {
      NODE_ENV: 'test',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png|jpg)$': '<rootDir>/jest.file-transformer.js',
  },
  name: packageName,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/dist/'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.css\\.ts$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/', '/.next/', '/dist/'],
};
