module.exports = {
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
  configureWebpack: {
    devtool: 'source-map',
  }
}


