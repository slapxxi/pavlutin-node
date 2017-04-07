const webpack = require('webpack');

function config(baseConfig) {
  const conf = {
    plugins: [
      new webpack.optimize.UglifyJsPlugin(),
    ],
  };
  return Object.assign({}, baseConfig, conf);
}

module.exports = config;
