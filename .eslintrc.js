module.exports = {
    ignorePatterns: ['node_modules', 'build', '*.js'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier', 'import'],
    extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'eslint-config-prettier'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    rules: {
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        'react/prop-types': 0,
        'react/display-name': 0,
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-no-useless-fragment': 2,
        'no-debugger': 0,
        'import/first': 1,
        'import/no-duplicates': 1,
        'import/newline-after-import': 1,
        'prettier/prettier': 'error'
    }
};
