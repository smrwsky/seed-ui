module.exports = {
  extends: ['./node_modules/gts/', 'plugin:import/recommended'],
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks'],
  rules: {
    'eqeqeq': ['error', 'always', { null: 'ignore' }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        'alphabetize': { order: 'asc' },
      },
    ],
    'import/no-default-export': 'error',
  },
  overrides: [
    {
      files: ['**/*.d.ts'],
      rules: {
        'import/no-default-export': 'off',
      }
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['plugin:import/typescript'],
    },
    {
      files: ['**/*.tsx'],
      extends: [
        'plugin:import/react',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
      ],
      rules: {
        'import/no-default-export': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react/destructuring-assignment': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-sort-props': 'error',
        'react/no-array-index-key': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
