
var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry : {
    app : [
      "bootstrap-loader",
      "./public/client/index.js",
      "webpack-dev-server/client?http://localhost:8080"
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],

  module : {
    loaders: [{
      test: /\.scss$/,
      loaders: ["style", "css", "autoprefixer-loader", "sass"]
    },{
      test: /\.js?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, '..', 'public/client')
    },{
      test: /\.(woff2?|svg)$/,
      loader: 'url?limit=10000'
    },{
      test: /\.(ttf|eot)$/,
      loader: 'file'
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
