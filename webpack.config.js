const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
require("@babel/polyfill");

const NodemonPlugin = require('nodemon-webpack-plugin'); // Ding

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My Pure js Blog with npm and webpack',
            filename: 'index.html',
            template: './src/index.html'
        }),
        new NodemonPlugin({
          script: './dist/bundle.js',
          watch: path.resolve('./dist'),
        })
    ],
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ],
    },
    resolve: {
        extensions: ['.js']
    }
}