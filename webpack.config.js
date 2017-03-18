const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const appTitle = 'Hockey App';

module.exports = {
  entry: './app/app.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },
  module: {
    rules: [
      { test: /\.scss$/, use: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader!sass-loader?sourceMap')},
      { test: /\.(js|jsx)$/, use: 'babel-loader' },
      { test: /\.html$/, use: 'raw-loader' },
    ]
  },
  plugins: [
    new UglifyJSPlugin({
            compress: { warnings: false },
            output: { comments: false },
            sourceMap: true,
            mangle: false
        }),
    new ExtractTextPlugin('styles/main.css')
  ]
};