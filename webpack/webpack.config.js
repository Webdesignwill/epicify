
var path = require('path');

module.exports = {
  entry : {
    app : ["./public/client/index.js", "webpack-dev-server/client?http://localhost:8080"]
  },
  module : {
    loaders: [{
      test: /\.scss$/,
      loaders: ["style", "css", "autoprefixer-loader", "sass"]
    },{
      test: /\.js?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, '..', 'public/client')
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
  output: {
    path : path.resolve(__dirname, "build"),
    publicPath : "/public/assets/",
    filename : "bundle.js"
  }
};