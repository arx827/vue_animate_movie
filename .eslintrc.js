module.exports = {
  root: true,

  env: {
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-param-reassign': 0,
    'import/prefer-default-export': 0,
    'import/no-cycle': 0,
    'import/no-dynamic-require': 0,
    'no-plusplus': 0,
    'vue/return-in-computed-property': 0,
    'consistent-return': 0,
    'global-require': 0,
    'no-unused-vars': 0,
    'template-curly-spacing': 0,
    indent: 'off',
  },

  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/airbnb',
  ],
};
