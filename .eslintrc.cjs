// https://eslint.org/docs/latest/user-guide/configuring/configuration-files
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],

  globals: {
    'ts-jest': true,
  },

  // Project-specific rules
  rules: {
    // Example disabling a plugin rule
    // 0 = off, 1 = warn, 2 = error
    // '@typescript-eslint/no-unused-vars': 0,
  },

  overrides: [
    {
      files: ['src/**/*.ts'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
    },
    {
      files: ['test/**/*.ts'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./test/tsconfig.json']
      },
    },
  ],
};
