
var path = require('path'),
    webpack = require('webpack');

var debug = process.env.NODE_ENV !== "production";

module.exports = {

  entry: [
    "bootstrap-loader",
    path.resolve(__dirname, "app/main.js")
  ],

  vendors: [ "react", "react-dom", "react-router" ],
  devtool : debug ? "inline-sourcemap" : null,

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  module : {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loaders: [ 'react-hot', 'babel' ],
      noParse :[],
      include: [
        path.resolve(__dirname, "app/")
      ]
    },{
      test: /\.scss$/,
      loaders: [ "style", "css", "autoprefixer-loader", "sass" ]
    },{
      test: /\.(woff2?|svg)$/,
      loader: 'url?limit=10000'
    },{
      test: /\.(ttf|eot)$/,
      loader: 'file'
    }]
  },

  plugins: debug ? [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }),
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  }
}
