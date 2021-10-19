module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  rules: {
    'prefer-const': 'off',
    'vue/no-v-html': 'off',
    'vue/valid-template-root': 'off',
    'vue/attributes-order': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/component-definition-name-casing': 'off',
    'vue/require-default-prop': 'off',
    'vue/component-tags-order': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/one-component-per-file': 'off',
    'vue/no-unused-components': 'warn',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/order-in-components': 'off',
    'no-unused-expressions': 'off',
    'import/no-named-as-default-member': 'off',
    'no-console': 'off',
    'arrow-parens': 'off',
    'func-style': 'off'
  }
}
