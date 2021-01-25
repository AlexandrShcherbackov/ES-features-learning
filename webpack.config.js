const webpack = require("webpack");
const path = require("path");

//plugins
const HTMLWebpackplugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  entry: {
    main: "./index.js",
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new HTMLWebpackplugin({
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.m?js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      }
    ],
  },
};
