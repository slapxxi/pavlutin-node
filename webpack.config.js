const { resolve } = require('path');
const webpack = require('webpack');


const baseConfig = {
  context: resolve(__dirname, 'src'),

  entry: [
    './js/index.js',
  ],

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public', 'js'),
    publicPath: '/',
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
    return require('./webpack.config.prod')(baseConfig);
  }
  return require('./webpack.config.dev')(baseConfig);
}

module.exports = config;
