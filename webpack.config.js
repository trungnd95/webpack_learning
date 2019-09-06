const webpack = require("webpack");
const path = require("path");
const UglifyJsPlugin_ = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');


module.exports = {
  entry: {
    app: [
      "./src/main.js",
      "./src/main.scss"
    ]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    // filename: "[name]_[chunkhash].js"
    filename: "[name].js"
  },
  module: {
    rules: [
      // {
      //   test: /\.s[ac]ss$/,
      //   use: ["style-loader", "css-loader", "sass-loader"]

      // },
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"]
      // },
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader", "sass-loader"],
          fallback: "style-loader"
        })
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)$/i,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loaders: [{
            loader: 'file-loader',
            options: {
              limit: 8192,
              name: "images/[name]-[hash].[ext]"
            }
          },
          {
            loader: "img-loader",
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  optimization: {
    minimizer: {}
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        context: __dirname
      },
    }),
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync(path.join(__dirname, 'index.html')),
      minimize: true
    }),
    new CleanWebpackPlugin(),
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.optimization = {
    minimizer: [
      new UglifyJsPlugin_({
        cache: true,
        sourceMap: true
        // compress: {
        //   warnings: false
        // }
      })
    ]
  }
}