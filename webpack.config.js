module.exports = {
  entry: './app/js/app.js',
  output: {
    path: __dirname + '/dist/js',
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [
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
      {
        test: /\.js$/,
        loader: 'babel-loader?presets[]=es2015'
      }
    ]
  }
};
