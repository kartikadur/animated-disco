const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'server',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: 'css-loader/locals'
      }
    ]
  },
  entry: path.resolve(__dirname, '../server/render.js'),
  output: {
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
};