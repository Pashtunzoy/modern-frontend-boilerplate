const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js',
        './src/master.scss',
    ],
    devServer: {
     contentBase: './dist'
   },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
      },
      {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader!sass-loader",
          }),
        }
    ]
},
plugins: [
  new ExtractTextPlugin({filename: 'bundle.css', allChunks: true}),
  new HtmlWebpackPlugin({template: './src/index.html'})
]
};
