const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
      port: 8081,
      proxy: {
        '/admin': {
          target: 'http://localhost:3001', //生产 tax-admin
          ws: false,
          changeOrigin: true
        },
        '/article': {
          target: 'http://localhost:3001', //生产 tax-admin
          ws: false,
          changeOrigin: true
        },
        '/category': {
          target: 'http://localhost:3001', //生产 tax-admin
          ws: false,
          changeOrigin: true
        },
        '/role': {
          target: 'http://localhost:3001', //生产 tax-admin
          ws: false,
          changeOrigin: true
        },
        '/tag': {
          target: 'http://localhost:3001', //生产 tax-admin
          ws: false,
          changeOrigin: true
        },
        '/upload': {
          target: 'http://localhost:3001', //生产 tax-admin
          ws: false,
          changeOrigin: true
        },
        '/user': {
          target: 'http://localhost:3001', //生产 tax-admin
          ws: false,
          changeOrigin: true
        },
        '/menu': {
          target: 'http://localhost:3001', //生产 tax-admin
          ws: false,
          changeOrigin: true
        },
      }
	  },
    chainWebpack: (config) => {
      config.resolve.alias
        .set('@', resolve('src'))
        .set('@api', resolve('src/api'))
        .set('@assets', resolve('src/assets'))
        .set('@comp', resolve('src/components'))
        .set('@views', resolve('src/views'))
        .set('@layout', resolve('src/layout'))
        .set('@static', resolve('src/static'))
    },
    publicPath: './'
}
