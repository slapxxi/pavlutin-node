const { resolve } = require('path');
const webpack = require('webpack');

function config(baseConfig) {
  const conf = {
    entry: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/js/index.js',
    ],

    devtool: 'inline-source-map',

    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 500,
    },

    devServer: {
      hot: true,
      port: 3000,
      contentBase: resolve(__dirname, 'public'),
      publicPath: '/js/',
      historyApiFallback: true,
      proxy: {
        '/api': {
          target: 'http://localhost:8000',
        },
      },
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ],
  };
  return Object.assign({}, baseConfig, conf);
}

module.exports = config;
