const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

/** @type {import("webpack").Configuration} */
module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: { output: { ascii_only: true } },
        extractComments: true,
      })
    ],
  }
};

