var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
          //publicPath: '/dist' // wasn't required
        })
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Project',
    template: './src/index-template.html',
    minify: {
      //collapseWhitespace: true
    },
    hash: true
  }),
  new ExtractTextPlugin(
    {
      filename: 'app.css' // string is the name of the resultant file.
      //disabled: false, // wasn't required
      //allChunks: true // wasn't required
    })]
}