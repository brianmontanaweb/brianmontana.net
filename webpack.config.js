module.exports = {
  entry: './app/js/app.js',
  output: {
    path: __dirname + '/app/js',
    filename: 'bundle.min.js'
  },
  module: {
    rules: [{
      test: /\.(scss|sass)$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
      }, {
        loader: 'sass-loader'
      }]
    }, {
      test: /\.(svg|gif|png|eot|woff|ttf)$/,
      loader: 'url-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader?presets[]=es2015'
    }]
  }
};
