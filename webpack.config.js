const path = require('path')
module.exports = {
  entry: {
    app: ['./index.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: '.'
  }
}
