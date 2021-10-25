module.exports = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png|jpg)$': '<rootDir>/jest.file-transformer.js',
  },
  globals: {
    'process.env': {
      NODE_ENV: 'test',
    },
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/', '/dist/'],
  transformIgnorePatterns: ['/node_modules/', '/.next/', '/dist/'],
};
