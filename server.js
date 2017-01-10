const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');

const serverPort = '3000';

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  // Set this as true if you want to access dev server from arbitrary url.
  // This is handy if you are using a html5 router.
  historyApiFallback: false,
  inline: true,
  hot: true,
  progress: true,
  quiet: false,
  noInfo: false,
  publicPath: '/build',
  contentBase: '/app',
  stats: { colors: true }
});

server.listen(serverPort, 'localhost', (err) => {
  err && console.log(err);
  console.log(`Listening at localhost:${serverPort}`);
});
