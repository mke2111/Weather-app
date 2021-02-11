const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {

    rules: [

      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: 'asset/resource',

      },

    ],

  },
};