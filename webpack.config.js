var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Project',
    template: './src/index-template.html',
    minify: {
      //collapseWhitespace: true
    },
    hash: true
  })]
}