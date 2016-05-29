const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack")
const rootDir = __dirname + "/../"

module.exports = {

  context:  rootDir + "src",

  entry: [
    "./index.js",
  ],

  output: {
    path:     rootDir + "dist",
    filename: "index.js",
  },

  module: {
    loaders: [{
      test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
      loader: "file"
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
      },
      template: "./index.html"
    })
  ],
}
