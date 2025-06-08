import playwright from 'eslint-plugin-playwright';
import '../../../eslint.config.mjs';

export default [
  playwright.configs['flat/recommended'],
  {
    files: ['**/*.ts', '**/*.js'],
    // Override or add rules here
    rules: {},
  },
];
