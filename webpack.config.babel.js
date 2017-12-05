const {resolve} = require('path');
const {getIfUtils} = require('webpack-config-utils');

module.exports = env => {
  const {ifProd, ifNotProd} = getIfUtils(env);
  const config =  {
    context: resolve('app'),
    entry: './app.js',
    output: {
      path: resolve('dist'),
      filename: './js/[name].min.js',
      publicPath: '/dist/',
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
          test: /\.(scss|sass)$/,
          loaders: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(svg|gif|png|eot|woff|ttf)$/,
          loaders: [
            'url-loader'
          ]
        },
      ]
    }
  };
  if (env.debug) {
    console.log(config);
    debugger
  }
  return config;
};
