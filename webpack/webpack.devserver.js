
var WebpackDevServer = require("webpack-dev-server"),
      webpack = require("webpack"),
      config = require('./webpack.config.js');

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
  contentBase: "public/",
  hot: true,
  publicPath : "/public/assets/",
  filename : "bundle.js",
  stats: {
    colors : true
  },
});

server.listen(8080, "localhost", function() {});