const path = require('path');
const baseConfig = require('../../base-webpack.config');

module.exports = {
  ...baseConfig,
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
};
