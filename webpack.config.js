const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: {
    "bundle": ["./index.js"],
    "main": ["./main.js"]
  },
  output: {
    filename: '[name].js',
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
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'imgs/[hash].[ext]',
              publicPath: 'dist'
            },
          },
        ],
      }
    ]},
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve('src')
    }
  },
  target: "electron-renderer"
};
