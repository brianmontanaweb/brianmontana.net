const merge = require('webpack-merge');
const config = require('./webpack.config.babel');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = env => {
  return merge(config(env), {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextWebpackPlugin.extract({
            fallback: "style-loader",
            use: ['css-loader', 'sass-loader']
          })
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin('./dist'),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true
        }
      }),
      new CopyWebpackPlugin([{
        from: '**/*.@(ico|txt)'
      }]),
      new ExtractTextWebpackPlugin('styles/styles.css')
    ]
  });
};
