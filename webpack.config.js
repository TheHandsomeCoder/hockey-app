const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appTitle = 'Hockey App';

module.exports = {
  entry: './app/app.js',
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'},
      {test: /\.html$/,     use: 'raw-loader'}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};