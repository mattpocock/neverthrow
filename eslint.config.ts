import type { Linter } from 'eslint'

const eslint = require('@eslint/js')

const config: Linter.FlatConfig[] = [
  eslint.configs.recommended,
  {
    rules: {
      'no-console': [0],
    },
  },
]

module.exports = config

module.exports = {
  env: {
    node: true,
  },
  ignorePatterns: ['dist/', 'tests/'],
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    semi: 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
  },
}
