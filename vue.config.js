'use strict'
module.exports = {
  lintOnSave: false,
  devServer: {
    port: 9527,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/': {
        target: 'http://192.168.3.105:6655/',
        changeOrigin: false
      }
    }
    // before: require('./mock/mock-server.js')
  }
};
