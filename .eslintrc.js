module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    commonjs: true,
    jest: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 'off',
    'operator-assignment': 'off',
    'no-underscore-dangle': 'off',
    'max-classes-per-file': ['error', 2],
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': 'off',
    'no-bitwise': 'off',
    'prefer-template': 'off',
    'no-plusplus': 'off',
    'no-continue': 'off',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'prefer-destructuring': 'off',
    'no-restricted-properties': 'off',
    'no-useless-return': 'off',
  },
  ignorePatterns: ['*.config.js', '/built'],
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },

        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint'],
      // If adding a typescript-eslint version of an existing ESLint rule,
      // make sure to disable the ESLint rule here.
      rules: {
        // Add TypeScript specific rules (and turn off ESLint equivalents)
        '@typescript-eslint/no-unused-vars': 'off',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
      },
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
      },
    },
  ],
};
