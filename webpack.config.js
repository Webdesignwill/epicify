var path = require('path')
var webpack = require('webpack')

var config = {

  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    './src/scripts/entry.js',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080/'
  ],

  output: {
    path: __dirname + '/public',
    filename: 'assets/script/app.bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      moment: "moment"
    })
  ],

  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: ['babel-plugin-transform-decorators-legacy']
      }
    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules'],
    root: __dirname + '/src/scripts/'
  }
}

module.exports = config
