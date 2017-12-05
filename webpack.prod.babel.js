const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const config = require('./webpack.config.babel');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = env => {
  merge(config, {
    plugins: [
      new UglifyJSPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          discardComments: {
            removeAll: true
          }
        }
      }),
      new ImageminPlugin({
        test: 'images/**/*',
        jpegtran: {
          progressive: true
        }
      })
    ]
  });
};
