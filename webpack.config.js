const path = require('path');

module.exports = {
  // 环境
  module: 'production',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'build.js',
    path: path.join(__dirname, 'dist')
  }
}
