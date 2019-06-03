const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV
const config = {}

// Common options
config.mode = 'development'
config.resolve = {
  extensions: ['.js', '.jsx']
}
config.module = {
  rules: [{
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: 'babel-loader'
  }]
}

// Conditional options
if (NODE_ENV === 'development') {
  config.entry = [
    path.resolve(__dirname, 'src', 'App.jsx')
  ]

  config.devServer = {
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true
  }

  config.plugins = [
    new HtmlWebpackPlugin({
      hash: true,
      template: path.resolve(__dirname, 'template.html')
    })
  ]
}

if (NODE_ENV === 'test') {
  config.entry = [
    path.resolve(__dirname, '__tests__', 'jsx', 'Example.jsx')
  ]

  config.output = {
    path: path.resolve(__dirname, 'dist', 'tests'),
    filename: 'bundle.js'
  }
}

if (NODE_ENV === 'test-server') {
  config.entry = [
    path.resolve(__dirname, '__tests__', 'jsx', 'App.jsx')
  ]

  config.devServer = {
    host: '0.0.0.0',
    port: 3001,
    historyApiFallback: true
  }

  config.plugins = [
    new HtmlWebpackPlugin({
      hash: true,
      template: path.resolve(__dirname, 'template.html')
    })
  ]
}

module.exports = config