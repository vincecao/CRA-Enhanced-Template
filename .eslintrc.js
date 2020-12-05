module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'implicit-arrow-linebreak': 'off',
    'max-len': 'off',
    'no-nested-ternary': 'off',
    'comma-dangle': 'off',
    'react/no-array-index-key': 'off',
    'react/prefer-stateless-function': 'off',
    'import/prefer-default-export': 'off',
    'react/forbid-prop-types': [0],
    'react/require-default-props': [0],
    'global-require': [0],
    'react/jsx-indent': [1, 2],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@pages', './src/pages'],
          ['@components', './src/components'],
          ['@contexts', './src/contexts'],
          ['@services', './src/services'],
          ['@utils', './src/utils'],
          ['~', './src'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
};
