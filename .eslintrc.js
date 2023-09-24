module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['node_modules/', 'build/', 'dist/'],
  rules: {
    // Relax some of the rules for flexibility and less strict linting.
    '@typescript-eslint/no-unused-vars': 'off', // Allow unused variables.
    '@typescript-eslint/explicit-function-return-type': 'off', // Allow omitting return types.
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Allow omitting module boundary types.
    '@typescript-eslint/no-explicit-any': 'off', // Allow using 'any' type.
    '@typescript-eslint/ban-ts-comment': 'off', // Allow using @ts-ignore comments.
  },
};
