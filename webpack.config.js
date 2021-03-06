const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  entry: './src/index.js',
  output: {
    filename: 'react-app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', "stage-0"],
          }
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader','sass-loader'],
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    port: 9000,
    historyApiFallback:true,
    hot: true,
    stats: {
      modules: false,
      color: false,
      version: false,
      timings: false,
    }
  }
};
module.exports = config;