import playwright from 'eslint-plugin-playwright';

// This config extends the root eslint.config.mjs
import '../../../eslint.config.mjs';

export default [
  playwright.configs['flat/recommended'],
  {
    files: ['**/*.ts', '**/*.js'],
    // Override or add rules here
    rules: {},
  },
];
