var path = require('path');
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
          //publicPath: '/dist'
        })
      },
      {
        test: /\.js/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-es2015'] // This is needed for the proper transpiling. Note that a debugger break, in this overall config, will show original ES6.
          }
        },
        exclude: /node_modules/
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
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // will behave like our webpack config
    compress: true, // gzip
    //port: 9000, // instead of default 8080
    stats: 'errors-only'//, // not as much output when running, changing
    //open: true // will open browser tab when running
  }
}