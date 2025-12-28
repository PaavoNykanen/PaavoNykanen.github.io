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

      // React specific
      'react/react-in-jsx-scope': 'off', // Disable React in scope for JSX (not needed in React 17+)
      'react/prop-types': 'off', // TypeScript handles prop validation
      'react/jsx-no-target-blank': 'error', // Prevent security issues with target="_blank"
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }], // Avoid unnecessary curly braces
      'react/self-closing-comp': 'error', // Enforce self-closing components
      'react/jsx-boolean-value': ['error', 'never'], // Prefer shorthand boolean props

      // TypeScript specific
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off', // Allow type inference
      '@typescript-eslint/no-explicit-any': 'warn', // Discourage any type
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }], // Use type imports

      // Code quality
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-alert': 'warn',
      'no-var': 'error', // Use let/const instead
      'prefer-const': 'error', // Use const when possible
      'prefer-template': 'error', // Use template literals over string concatenation
      'prefer-arrow-callback': 'error', // Prefer arrow functions for callbacks
      'arrow-body-style': ['error', 'as-needed'], // Omit braces when possible
      'no-duplicate-imports': 'error',
      'no-return-await': 'error',
      'require-await': 'error',
      'eqeqeq': ['error', 'always'], // Always use === and !==
      'curly': ['error', 'all'], // Always use braces

      // Complexity and maintainability
      'max-len': ['warn', { code: 120, ignoreUrls: true, ignoreStrings: true, ignoreTemplateLiterals: true }],
      'max-lines-per-function': ['warn', { max: 100, skipBlankLines: true, skipComments: true }],
      'max-depth': ['warn', 4], // Maximum nesting depth
      'max-nested-callbacks': ['warn', 3],
      'complexity': ['warn', 15], // Cyclomatic complexity
      'max-params': ['warn', 5], // Maximum function parameters

      // Stylistic (using @stylistic plugin)
      '@stylistic/indent': ['error', 2],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],
      '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/arrow-spacing': ['error', { before: true, after: true }],
    },
  },
]);
