module.exports = {
  // 環境設定
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['react'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    // eslint-plugin-react 関連
    'eslint:recommended',
    'plugin:react/recommended',
    // Prettier 関連
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  rules: {
    // お好みで構文解析のルールを追加
    'react/prop-types': 'off',
  },
}
