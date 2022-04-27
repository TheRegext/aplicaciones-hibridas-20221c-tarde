module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  globals: {
    document: 'off'
  },
  rules: {
  }
}
