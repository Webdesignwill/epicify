var path = require('path');
var webpack = require('webpack');

var config = {

  entry: [
    './src/scripts/entry.js'
  ],

  output: {
    path: __dirname + '/public',
    filename: 'assets/script/app.bundle.js'
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      moment: "moment"
    }),
    new webpack.optimize.UglifyJsPlugin({compress : true}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [{
      test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
    }]
  },

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules']
  }
};

module.exports = config;
