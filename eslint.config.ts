import eslint from '@eslint/js';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import { defineConfig } from 'eslint/config';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore-next-line
import notTypedImportPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { configs as tseslintConfigs, parser as tseslintParser } from 'typescript-eslint';

import type { ESLint, Linter } from 'eslint';

const importPlugin = notTypedImportPlugin as {
  flatConfigs: {
    recommended: Linter.Config;
    typescript: Linter.Config;
  };
};

// eslint-disable-next-line import/no-default-export
export default defineConfig([
  { ignores: ['dist'] },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // Prettier
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'es5',
          printWidth: 140,
          bracketSpacing: true,
          arrowParens: 'always',
          endOfLine: 'lf',
        },
      ],
    },
  },
  {
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': typescriptPlugin as unknown as ESLint.Plugin,
    },
    extends: [
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      eslint.configs.recommended,
      tseslintConfigs.strictTypeChecked as Linter.Config,
      tseslintConfigs.stylisticTypeChecked as Linter.Config,
    ],
    settings: {
      'import/resolver': {
        // You will also need to install and configure the TypeScript resolver
        // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
        typescript: true,
        node: true,
      },
    },
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslintParser as Linter.Parser,
      parserOptions: {
        project: ['./tsconfig.app.json', './tsconfig.node.json'],
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // TypeScript
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],

      // React
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off', // We use TypeScript for props validation

      // Import
      'import/prefer-default-export': 'off',
      'import/no-default-export': 'error',
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc' },
          groups: ['external', 'internal', 'index', 'type'],
          'newlines-between': 'always',
          pathGroupsExcludedImportTypes: [],
        },
      ],

      // General
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': 'off', // Using TypeScript's no-unused-vars instead
      'prefer-const': 'error',
      'no-var': 'error',

      // Boolean and nullish checks
      'no-extra-boolean-cast': 'error',
      // "no-negated-condition": "error",
      'no-unneeded-ternary': 'error',
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowString: false,
          allowNumber: false,
          allowNullableObject: false,
          allowNullableBoolean: false,
          allowNullableString: false,
          allowNullableNumber: false,
          allowAny: false,
          allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
        },
      ],
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
    },
  },
]);
