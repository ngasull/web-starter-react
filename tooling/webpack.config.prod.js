const webpack = require("webpack")
const baseConf = require("./webpack.config.base.js")

module.exports = Object.assign({}, baseConf, {

  module: Object.assign({}, baseConf.module, {
    loaders: baseConf.module.loaders.concat([{
      test:    /\.js$/,
      exclude: /node_modules/,
      loaders: ["babel"]
    }])
  }),

  plugins: baseConf.plugins.concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "\"production\""
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ])
})
