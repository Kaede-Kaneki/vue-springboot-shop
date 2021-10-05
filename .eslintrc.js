/*
 * @Author: your name
 * @Date: 2021-09-30 10:21:58
 * @LastEditTime: 2021-09-30 10:57:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-springboot\.eslintrc.js
 */
module.exports = {
  root: true,

  env: {
    node: true
  },

  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off'
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  "presets": [["es2015", { "modules": false }]],

  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ],

  presets: [
    [
      'es2015',
      {
        modules: false
      }
    ]
  ],

  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
