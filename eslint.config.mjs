import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        plugins: { js },
        extends: ['js/recommended'],
        rules: {
            'default-case': 'off',
            'react/no-array-index-key': 'off',
            'consistent-return': 'off',
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            indent: [2, 4],
            'no-bitwise': 'off',
            'react/jsx-filename-extension': [
                2,
                {
                    extensions: ['.js', '.jsx', '.tsx'],
                },
            ],

            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            '@typescript-eslint/no-unused-vars': 'error',
            'no-unused-vars': 'off',
            'react/require-default-props': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-props-no-spreading': 'off',
            'react/function-component-definition': 'off',
            'no-shadow': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'no-underscore-dangle': 'off',
            'object-curly-newline': 'off',

            'max-len': [
                'error',
                {
                    ignoreComments: true,
                    code: 120,
                },
            ],

            'linebreak-style': 'off',
            'arrow-body-style': 'off',
            'jsx-a11y/click-events-have-key-events': 'off',
            'jsx-a11y/no-static-element-interactions': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'error',
            'no-unused-expressions': 'off',
            'no-plusplus': 'off',
            'no-param-reassign': 'off',
            'arrow-parens': [2, 'as-needed'],
            'import/no-named-default': 0,
            'jsx-a11y/label-has-associated-control': 'off',
            'lines-between-class-members': 'off',
            'no-undef': 'off',
            'no-control-regex': 'off',
            'no-restricted-globals': 'off',
            'import/order': 'off',
            'react/no-unescaped-entities': 'off',
        },
    },
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        languageOptions: { globals: globals.browser },
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
]);
