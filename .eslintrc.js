module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],

  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-use-before-define': ['off', { functions: false, classes: true }],
    'react/destructuring-assignment': [1, 'warn'], // always or never
    'react/prop-types': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    'class-methods-use-this': 'off',
    'linebreak-style': 'off',
  },
}
