var HtmlWebpackPlugin = require('html-webpack-plugin');

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
        //use: 'style-loader!css-loader' // this did not work for me.
        //use: [{loader: 'style-loader'}, {loader: 'css-loader' }]
        use: ['style-loader', 'css-loader']
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
  })]
}