const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const NODE_MODULES_PATH = path.resolve(ROOT_PATH, 'node_modules');

module.exports = {
  entry: [
    path.resolve(APP_PATH, 'index.js')
  ],
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  // enable dev source map
  // devtool: 'cheap-module-eval-source-map',
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      exclude: [NODE_MODULES_PATH]
    }],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loaders: ['react-hot', 'babel-loader']
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
    }, {
      test: /\.css$/,
      loaders: ['style', 'css?sourceMap']
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
