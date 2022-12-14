module.exports = {
  // requireModuleExtension: true,
  // test: /\.(js|jsx|tsx)(\?.*)?$/,
  devServer:{
    proxy:{
      "/poem":{
        target: "http://localhost:8000/api",
        changeOrigin: true,
        ws: true,
        pathRewrite:{
          "^/poem":"",
        }
      }
    }
  },
  // build: {
  //   // Template for index.html
  //   index: path.resolve(__dirname, '../index.html'),  //之前是 '../dist/index.html'
  //   // Paths
  //   assetsRoot: path.resolve(__dirname, '../'),  // 之前是 '../dist'
  //   assetsSubDirectory: 'static',
  //   assetsPublicPath: './',    // 之前是 '/'
  // },
  publicPath: "/poem-frontend/",
  configureWebpack: {
    devtool: 'source-map',
    // test: /\.(js|jsx)(\?.*)?$/,
    // loader:"babel-loader",
    // include: [resolve('src'), resolve('test'), resolve('node modules/webpack-dev-server/client')]
  }
}


