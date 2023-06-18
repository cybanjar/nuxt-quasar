module.exports = {
  env: {
    browser: true,
    node   : true,
    es6    : true,
  },
  extends      : ['@privyid/eslint-config-persona'],
  parserOptions: { project: './tsconfig.json' },
}
