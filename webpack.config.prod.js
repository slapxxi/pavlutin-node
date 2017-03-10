const _ = require('lodash');
const webpack = require('webpack');


function config(baseConfig) {
  baseConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
  return baseConfig;
}

module.exports = config;
