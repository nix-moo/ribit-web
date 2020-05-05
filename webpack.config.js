module.exports = {
  entry: './src/app.js',
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
      // {
      //   test: /\.css$/,
      //   use: [
      //     { loader: 'style-loader' },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: true,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        // use: [
        //   { loader: 'style-loader' },
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       modules: true,
        //     },
        //   },
        //   { loader: 'sass-loader' },
        // ],
      },
    ],
  },
};
