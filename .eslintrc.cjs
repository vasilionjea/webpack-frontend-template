// https://eslint.org/docs/latest/user-guide/configuring/configuration-files
module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },

  plugins: ['@typescript-eslint'],

  // Project-specific rules
  rules: {
    // Example disabling a plugin rule
    // 0 = off, 1 = warn, 2 = error
    // '@typescript-eslint/no-unused-vars': 0,
  },
};
