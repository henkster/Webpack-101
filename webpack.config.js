var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack'); // add for HMR, but has other plugins

console.log('The Deal = ' + process.env.NODE_ENV);
console.log('And = ' + typeof process.env.NODE_ENV);
console.log('So = ' + (process.env.NODE_ENV === 'production'));
console.log('But = ' + (process.env.NODE_ENV == 'production'));
console.log('Plus = ' + (process.env.NODE_ENV == "production"));

var p = process.env.NODE_ENV;
console.log("p = " + p);
console.log("len: " + p.length);
console.log("Fin: " + (p.toString() == 'production'));
console.log("Hmmm: " + ("a" == "a"));

var isProd = process.env.NODE_ENV === 'production';
var cssDev = ['style-loader', 'css-loader'];
var cssProd = ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader']
            });
var cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: {
    app: './src/app.js',
    contact: './src/contact.js' // second bundle
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js' // changed to take the name from the entry.
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssConfig
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'] // This is needed for the proper transpiling. Note that a debugger break, in this overall config, will show original ES6.
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Project Demo',
    template: './src/index-template.html',
    minify: {
      //collapseWhitespace: true
    },
    hash: true,
    //filename: './../index.html' // to specify the location.
    excludeChunks: ['contact'] // excluding the bundle that is specific to the other template.
  }),
  new HtmlWebpackPlugin({
    title: 'Contact Page',
    template: './src/contact-template.html',
    hash: true,
    filename: 'contact.html',
    chunks: ['contact'] // specifying the only bundle we need.
  }),
  new ExtractTextPlugin(
    {
      filename: 'app.css', // string is the name of the resultant file.
      //disabled: false, // wasn't required
      //allChunks: true // wasn't required
      disable: !isProd
    }),
  new webpack.HotModuleReplacementPlugin(), // enable HMR globally
  new webpack.NamedModulesPlugin // prints more readable module names in the browser on HMR updates
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // will behave like our webpack config
    compress: true, // gzip
    //port: 9000, // instead of default 8080
    stats: 'errors-only', // not as much output when running, changing
    //open: true // will open browser tab when running
    hot: true // for HMR
  }
}