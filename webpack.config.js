const webpack = require('webpack');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: '/public/js/',
    publichPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {presets: ['react', 'es2015', 'stage-1']}
      },
      {
        exclude: /node_modules/,
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {warnings: false}
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  postcss: function() {
    return [require('postcss-cssnext'), require('precss')({import: {extension: 'scss'}})]
  }
}
