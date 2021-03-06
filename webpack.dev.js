const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
module.exports = merge(common, {
  devtool: 'inline-source-map',
  entry: ['./js/weather/index.jsx'],
  mode: 'development',
  output: {
    filename: 'index.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
    }),
  ],
});