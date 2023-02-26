module.exports = {
  '*.(js|ts|tsx)': ['yarn lint:fix'],
  '*.(ts|tsx)': () => 'tsc -p tsconfig.json --noEmit',
};
