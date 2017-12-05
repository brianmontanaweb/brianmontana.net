const {resolve} = require('path');
const {getIfUtils} = require('webpack-config-utils');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = env => {
  const {ifProd, ifNotProd} = getIfUtils(env);
  const config =  {
    context: resolve('app'),
    entry: './app.js',
    output: {
      path: resolve('dist'),
      filename: 'js/[name].min.js',
      publicPath: '/',
      pathinfo: ifNotProd(),
    },
    devtool: ifProd('source-map', 'eval'),
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: [
            'babel-loader'
          ],
          exclude: /node_modules/
        },
        {
          test: /\.(svg|gif|png|eot|woff|ttf)$/,
          loaders: [
            'url-loader'
          ]
        },
        {
          test: /\.(scss|sass)$/,
          loader: ExtractTextWebpackPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        }
      ],
    },
    plugins: [
      new CleanWebpackPlugin('./dist'),
      new ExtractTextWebpackPlugin('styles/styles.css')
    ]
  };
  if (env.debug) {
    console.log(config);
    debugger
  }
  return config;
};
