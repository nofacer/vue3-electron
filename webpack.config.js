const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]},
    plugins: [
      new VueLoaderPlugin()
    ]
};
