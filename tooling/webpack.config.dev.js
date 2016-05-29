const FlowStatusWebpackPlugin = require("flow-status-webpack-plugin")
const webpack = require("webpack")
const baseConf = require("./webpack.config.base.js")

module.exports = Object.assign({}, baseConf, {

  output: Object.assign({}, baseConf.output, {
    publicPath: "/",
  }),

  module: Object.assign({}, baseConf.module, {
    loaders: baseConf.module.loaders.concat([{
      test:    /\.js$/,
      exclude: /node_modules/,
      loaders: ["react-hot", "babel"]
    }])
  }),

  plugins: baseConf.plugins.concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "\"dev\""
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new FlowStatusWebpackPlugin({
      binaryPath: process.cwd() + "/node_modules/.bin/flow"
    }),
  ]),

  devtool: "eval",

  devServer: {
      contentBase: baseConf.output.path,
      publicPath: baseConf.output.publicPath,
      hot: true,
      inline: true,
      noInfo: true,
      port: 8080,
      stats: { colors: true },
  },
})
