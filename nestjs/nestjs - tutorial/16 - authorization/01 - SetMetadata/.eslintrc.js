module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin' , 
  "eslint-plugin-prettier"
],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    "prettier",
    "eslint:recommended", "prettier",
    "react-app", "airbnb", "plugin:prettier/recommended","prettier/react",
    "airbnb/base",
    "eslint-config-prettier"
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "react/jsx-props-no-spreading": "off", "react/require-default-props": "off", "react/forbid-prop-types": "off" , "prettier/prettier": "warn"
  },
};
