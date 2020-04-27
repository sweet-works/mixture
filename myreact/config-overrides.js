/*
 * @Autor: yaojie
 * @Date: 2020-04-27 11:19:55
 * @LastEditors: yaojie
 * @LastEditTime: 2020-04-27 13:55:29
 * @Description: ''
 * @JiraID: SOMPO-
 */
const { override, addWebpackAlias, fixBabelImports, addLessLoader } = require('customize-cra')
const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const path = require('path')
const resolve = dir => path.join(__dirname, '.', dir)

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  }),
  addWebpackAlias({
    ['@']: resolve('src')
  }),
  (config, env) => {
    config = rewireReactHotLoader(config, env)
    console.warn('-------------------')
    console.log(config)
    console.warn('-------------------')
    return config
  }
)