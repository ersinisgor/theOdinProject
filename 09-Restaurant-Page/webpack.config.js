const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/modules/components.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
