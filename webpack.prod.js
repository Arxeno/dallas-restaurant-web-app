const { merge } = require('webpack-merge');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminWebp = require('imagemin-webp');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ImageminWebpackPlugin({
      test: 'images/heros/*.webp',
      minFileSize: 50000,
      plugins: [
        ImageminWebp({
          quality: 60,
        }),
      ],
    }),

    new BundleAnalyzerPlugin(),
  ],
});
