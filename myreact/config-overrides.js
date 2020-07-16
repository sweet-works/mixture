/*
 * @Autor: yaojie
 * @Date: 2020-04-27 11:19:55
 * @LastEditors: yaojie
 * @LastEditTime: 2020-04-28 18:38:13
 * @Description: ''
 * @JiraID: SOMPO-
 */
const { override, addWebpackAlias, fixBabelImports, addLessLoader } = require('customize-cra')
const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const path = require('path')
const resolve = dir => path.join(__dirname, '.', dir)

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({
    ['@']: resolve('src')
  }),
  (config, env) => {
    config = rewireReactHotLoader(config, env)
    return config
  }
)