module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react'],
  root: true,
  rules: {
    'react/no-unescaped-entities': 'warn',
    'react/prop-types': ['warn', { skipUndeclared: true }],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': [
      'warn',
      { ignoreFunctionalComponents: true },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
