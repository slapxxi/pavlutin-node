const { resolve } = require('path');
const webpack = require('webpack');
const productionConfig = require('./webpack.config.prod');
const devConfig = require('./webpack.config.dev');

const baseConfig = {
  entry: [
    './src/js/index.js',
  ],

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public', 'js'),
    publicPath: '/js/',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [['es2015', { modules: false }], 'react', 'stage-1'],
          babelrc: false,
        },
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.json$/, use: ['json-loader'] },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
  ],
};

function config(env) {
  if (env && env.prod) {
    return productionConfig(baseConfig);
  }
  return devConfig(baseConfig);
}

module.exports = config;
