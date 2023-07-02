const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const pluginList = [new HtmlWebpackPlugin({ template: 'src/index.html' })];
const ruleForStyles = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const rules = [ruleForStyles];

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  plugins: pluginList,
  module: { rules },
  devServer: {
    open: true,
    port: 6969,
    client: {
      overlay: true,
    },
    compress: true,
  },
};
