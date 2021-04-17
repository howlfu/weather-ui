var path = require('path');

const {
  UnusedFilesWebpackPlugin
} = require('unused-files-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

module.exports = {
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist/js'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.js|jsx$/,
      exclude: /node_modules/,
      use: {
        // loader: 'babel-loader?cacheDirectory=true'
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-react'] }
      }
    }]
  },
  plugins: smp.wrap({
    plugins: [
      new UnusedFilesWebpackPlugin({}),
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      })
    ]
  }),
  externals: {
    'fs': 'commonjs2 fs',
    'path': 'commonjs2 path'
    // 'serialport': 'commonjs2 serialport',
    // 'image-size': 'commonjs2 image-size',
    // 'dialogs': 'commonjs2 dialogs'
  }

};