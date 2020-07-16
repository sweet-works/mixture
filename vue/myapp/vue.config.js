/*
 * @Autor: yaojie
 * @Date: 2020-05-08 17:46:59
 * @LastEditors: yaojie
 * @LastEditTime: 2020-05-09 00:27:23
 * @Description: 
 * @JiraID: SOMPO-
 */
 module.exports = {
  devServer: {
    // 设置代理
    proxy: {
      "/v1": {
        target: "https://jsonplaceholder.typicode.com", // 域名
        ws: true, // 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          "^/v1": "/"
        }
      }
    }
  }
};
