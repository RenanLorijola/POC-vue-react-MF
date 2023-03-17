const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const { dependencies } = require('./package.json')

module.exports = {
  node: false,
  entry: './src/main.js',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            envName: 'development'
          }
        },
      },
      { test: /\.css$/, use: { loader: 'css-loader', options: { modules: true } } },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new ModuleFederationPlugin({
      name: 'library1',
      filename: 'remoteEntry.js',
      exposes: {
        './HelloWorld': './src/components/HelloWorld.jsx'
      },
      shared: dependencies,
    })
  ],

  devServer: {
    port: 8081,
    headers: {
      'access-control-allow-origin': '*',
    }
  },
}
