const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    __dirname + '/myapp/static/js/application.js',
  ],
  mode: 'production',
  output: {
    path: __dirname + '/myapp/static/js/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  plugins: [],
  resolve: {
    modules: [
      __dirname + '/myapp/static/js/',
      __dirname + '/node_modules/',
    ],
  },
};
