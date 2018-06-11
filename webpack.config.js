const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  watchOptions: {
    ignored: /ignored.js$/
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
