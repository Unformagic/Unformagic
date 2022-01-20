
module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:mdx/recommended'
  ],
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    'hook-break-line',
    'import-helpers',
    'modules-newline',
    '@typescript-eslint'
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          '/^redux/',
          '/^lodash/',
          'module',
          '/^@unformagic/',
          ['parent', 'sibling', 'index']
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true
        }
      }
    ],
    'max-len': ['warn', { code: 120, tabWidth: 2 }],
    'prettier/prettier': 'off',
    semi: ['error', 'never'],
    'template-curly-spacing': [2, 'always'],
    'react/jsx-curly-spacing': [2, 'always'],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.mdx'] }],
    'react/jsx-indent': [2, 2],
    'react/jsx-no-duplicate-props': [
      2,
      {
        ignoreCase: false
      }
    ],
    'hook-break-line/deps-break-line': 2,
    'generator-star-spacing': ['error', { before: false, after: true }],
    'object-curly-newline': ['error', {
      ObjectExpression: { multiline: true, minProperties: 3 },
      ObjectPattern: { multiline: true, minProperties: 3 },
      ImportDeclaration: { multiline: true, minProperties: 3 },
      ExportDeclaration: { multiline: true, minProperties: 3 }
    }],
    'object-shorthand': ['error', 'always', { avoidExplicitReturnArrows: true }],
    'modules-newline/import-declaration-newline': 'error',
    'modules-newline/export-declaration-newline': 'error',
    'comma-dangle': 0,
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'no-undef': 2,
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any' : 'off',
    'linebreak-style': 'off'
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
    react: {
      version: 'detect'
    },
    'mdx/code-blocks': false, // optional, if you want to disable language mapper, set it to `false`
    'mdx/language-mapper': {} // if you want to override the default language mapper inside, you can provide your own
  },
  overrides: [
    // {
    //   files: ['*.{ts,tsx}'],
    //   rules: {
    //     '@typescript-eslint/no-unused-vars': 'off',
    //     '@typescript-eslint/no-unused-vars-experimental': 'error'
    //   }
    // },
    {
      files: ['*.{js,jsx}'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    },
    {
      files: ['*.mdx'],
      extends: ['plugin:mdx/overrides'],
      rules: {
        'react/jsx-indent': [0, 0],
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    },
    {
      files: '**/*.{md,mdx}/**',
      extends: 'plugin:mdx/code-blocks'
    }
  ],
  globals: {
    React: true,
    JSX: true
  },
}
