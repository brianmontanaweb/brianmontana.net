const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './app.js'
  },
  context: path.join(__dirname, 'app'),
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(scss|sass)$/,
        loader: [
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
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new ExtractTextPlugin({
      filename: 'styles/styles.css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      {
        debug: 'info',
        from: '**/*',
        to: '[path][name].[ext]',
        ignore: ['*.sass', '*.scss', '*.js', '*.css', '*.eot', '*.woff', '*.ttf', '*.html']
      }
    ])
  ],
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};