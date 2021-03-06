const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, 'src'); //绝对路径
const BUILD_PATH = path.resolve(__dirname, 'build'); //绝对路径
const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules'); //绝对路径

const serverPort = '3000';

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:' + serverPort,
    'webpack/hot/only-dev-server',
    path.resolve(SRC_PATH, 'index.js')
  ],
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  // enable dev source map
  devtool: 'cheap-module-eval-source-map',
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
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    colors: true,
    historyApiFallback: false,
    port: serverPort,
    hot: true,
    inline: true
  }
};
