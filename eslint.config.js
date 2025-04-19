import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
      parser: tsParser, // Use TypeScript parser
    },
    plugins: {
      react,
      '@typescript-eslint': tsPlugin,
      '@stylistic': stylistic,
    },
    rules: {
      ...js.configs.recommended.rules, // JavaScript rules
      ...tsPlugin.configs.recommended.rules, // TypeScript rules
      ...react.configs.recommended.rules, // React rules
      ...stylistic.configs.recommended.rules, // Stylistic rules for TypeScript
      'react/react-in-jsx-scope': 'off', // Disable React in scope for JSX (not needed in React 17+)
      '@typescript-eslint/no-unused-vars': ['error'], // Disallow unused variables
      'no-console': 'warn',
      '@stylistic/indent': ['error', 2], // Enforce 2-space indentation
      '@stylistic/quotes': ['error', 'single'], // Enforce single quotes
      '@stylistic/semi': ['error', 'always'], // Enforce semicolons
    },
  },
]);
