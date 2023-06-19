const path = require('path')
const webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    '@babel/polyfill', // enables async-await
    './client/index.js',
  ],
  target: 'node',
  mode: 'development',
  devtool: 'inline-source-map',
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: './client/index.template.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
}
