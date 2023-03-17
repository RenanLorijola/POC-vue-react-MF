const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { ModuleFederationPlugin } = require('webpack').container
const { dependencies } = require('./package.json')

module.exports = {
  node: false,
  entry: './src/main.js',
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.css$/, use: [ 'vue-style-loader', 'css-loader' ] },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        library1: 'library1@http://localhost:8081/remoteEntry.js',
      },
      shared: dependencies,
    })
  ],
}
