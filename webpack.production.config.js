const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, 'src'); //绝对路径
const BUILD_PATH = path.resolve(__dirname, 'build'); //绝对路径
const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules'); //绝对路径

module.exports = {
  entry: [
    path.resolve(SRC_PATH, 'index.js')
  ],
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
    // publicPath: 'http://cdn.example.com/assets'  //用于配置静态资源的CDN路径
  },
  devtool: 'source-map',
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      exclude: [NODE_MODULES_PATH]
    }],
    loaders: [{
      test: /\.jsx?$/,
      exclude: [NODE_MODULES_PATH],
      loaders: ['react-hot', 'babel-loader']
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass')
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css')
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=8192' //小于8K内嵌；大于8K生成文件
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('index.css'),
    new webpack.optimize.DedupePlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
