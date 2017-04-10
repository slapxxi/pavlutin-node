const webpack = require('webpack');

function config(baseConfig) {
  const conf = {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      }),
      new webpack.optimize.UglifyJsPlugin(),
    ],
  };
  return Object.assign({}, baseConfig, conf);
}

module.exports = config;
