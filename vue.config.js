// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}





const { defineConfig } = require('@vue/cli-service')
const port = process.env.port
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  indexPath: 'index.html',
  lintOnSave: false,
  transpileDependencies: true,
  devServer: {
    port: 5173,
    open: true
  },

  chainWebpack: (config) => {    //这里是svg-sprite-loader插件的用法
    config.module.rules.delete('svg') //重点:删除默认配置中处理svg,
    config.module
        .rule('svg-sprite-loader')
        .test(/\.svg$/)
        .include.add(resolve('src/icons')) //处理svg目录
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
    config
        .plugin('html')
        .tap((args) => {
          args[0].title = 'MetrologyWorks'
          return args
        })
        .end()
    config.module
        .rule('pdf')
        .test(/\.pdf$/)
        .use('pdf')
        .loader('file-loader')
        .end()
  },
 // lintOnSave: process.env.ENV === 'production'
  //lintOnSave:false
})
// https://blog.csdn.net/qq_45334976/article/details/125113481
module.exports = {
  devServer: {
    port: port,
    // 这个地方的代理只适合本地开发环境，上线后nginx要和这里保持一致，名字要一样
    proxy: {
      "/vue-project": { // 代理接口前缀为/bpi的请求
        "target": 'http://82.156.135.173:8088/', // 对应的代理地址
        //"target": process.env.DR_APP_API_URL,
       // "target": 'http://localhost:8088/',
        "secure": false, // 接受运行在https上，默认不接受
        "changeOrigin": true, // 如果设置为true,那么本地会虚拟一个服务器接收你的请求并代你发送该请求，这样就不会有跨域问题（只适合开发环境）
        "pathRewrite": { //重写路径 比如'/apis/aaa/ccc'重写为'/aaa/ccc'
          '^/vue-project': ""
        }
      },
      "/vue-huawei": { // 代理接口前缀为/bpi的请求
        "target": 'http://82.156.135.173:8089/', // 对应的代理地址
        "secure": false, // 接受运行在https上，默认不接受
        "changeOrigin": true, // 如果设置为true,那么本地会虚拟一个服务器接收你的请求并代你发送该请求，这样就不会有跨域问题（只适合开发环境）
        "pathRewrite": { //重写路径 比如'/apis/aaa/ccc'重写为'/aaa/ccc'
          '^/vue-huawei': ""
        }
      },
    }
  }
}