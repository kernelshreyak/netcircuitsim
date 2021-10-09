var path = require('path');
var webpack = require('webpack');

 module.exports = {
    mode:"development",
    entry: './app.js',
    output: {
         path: path.resolve(__dirname, './'),
         filename: './simulator-web/app.bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js']
    },
    stats: {
         colors: true
    },
    devtool: 'source-map',
    devServer: {
      static: './simulator-web',
      historyApiFallback: true,
    }
 };