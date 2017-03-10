const { resolve } = require('path');
const webpack = require('webpack');


function config(baseConfig) {
  baseConfig.watchOptions = {
    ignored: /node_modules/,
    aggregateTimeout: 500,
  };

  baseConfig.devServer = {
    port: 3000,
    contentBase: resolve(__dirname, 'public', 'js'),
    publicPath: '/',
    historyApiFallback: true,
    proxy: {
      '*': {
        target: 'http://localhost:8000',
      }
    },
  };

  return baseConfig;
}

module.exports = config;
