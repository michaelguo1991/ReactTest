const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const stylelint = require('stylelint');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, 'src'); // 绝对路径
const BUILD_PATH = path.resolve(__dirname, 'build'); // 绝对路径
const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules'); // 绝对路径

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
    },
    /* eslint-disable */
    { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!sass') },
    { test: /\.css$/,  loader: ExtractTextPlugin.extract('style', 'css!postcss')},

    { test: /\.woff(\?.*)?$/,  loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
    { test: /\.woff2(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
    { test: /\.otf(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype' },
    { test: /\.ttf(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
    { test: /\.eot(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]' },
    { test: /\.svg(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' },
    { test: /\.(png|jpg)$/,    loader: 'url?limit=8192' }] // 小于8K base64内嵌
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html',
      minify: {
        collapseWhitespace : true
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('index.css'),
    new webpack.optimize.DedupePlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: [autoprefixer, stylelint]
};
