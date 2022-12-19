/** @type {import('ts-jest').JestConfigWithTsJest} */
// For a detailed explanation of each configuration property visit:
// https://jestjs.io/docs/configuration
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['test/'],
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
};
