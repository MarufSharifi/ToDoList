module.exports = {
  plugins: ['react-hooks', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  root: true,
  extends: ['@react-native-community', 'prettier'],
  rules: {
    'no-semi': true,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
