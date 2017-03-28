var webpack = require('webpack');
var path = require('path');

module.exports = {

  context: __dirname,
  entry: './src/main',

  output: {
    path: __dirname,
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx'],
    alias: {
      bootstrap: path.resolve(__dirname, 'src/Bootstrap'),
      components: path.resolve(__dirname, 'src/Components')
    }
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs']
        }
      }
    ]
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter',
    'react-router-dom': 'ReactRouterDOM'
  }
}