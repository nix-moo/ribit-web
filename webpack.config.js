module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: __dirname + '/client',
    filename: 'main.js',
  },
  devtool: 'source-maps',
  devServer: {
    contentBase: './client',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
};
