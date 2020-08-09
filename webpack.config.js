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
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',//https://github.com/vuejs/vue-style-loader/issues/42
          'css-loader',
          'sass-loader'
        ]
      }
    ]},
    plugins: [
      new VueLoaderPlugin()
    ]
};
