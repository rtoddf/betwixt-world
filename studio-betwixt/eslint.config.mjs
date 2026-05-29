import studio from '@sanity/eslint-config-studio'

export default [
  {
    ignores: ['eslint.config.mjs'],
  },
  ...studio,
  {
    rules: {
      'react/no-direct-mutation-state': 'off',
    },
  },
]