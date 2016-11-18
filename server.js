
"use strict";

var WebpackDevServer = require('webpack-dev-server'),
    webpack = require('webpack'),
    config = require('./webpack.config.js'),
    path = require('path');

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
  contentBase: './public/',
  filename: 'app.bundle.js',
  hot: true,
  quiet: true,
  stats: {
    colors: true
  }
});

server.listen(8080, 'localhost');
