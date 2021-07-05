module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://web.juhe.cn:8080/",
        changeOrigin: true,
        ws: true,
        secure: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
}