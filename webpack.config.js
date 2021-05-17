const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env) => {
  const envPath = `.${env.file || "env"}`;
  return {
    mode: "development",
    entry: "/src/index.js",
    output: {
      filename: "js/entry.[name].[hash:8].js",
      chunkFilename: "js/chunk.[name].[contenthash:8].js",
      path: path.resolve(__dirname, "docs"),
    },
    resolve: {
      alias: {
        "@": "/src",
      },
      extensions: [
        ".vue",
        ".js",
        ".json",
      ],
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            "vue-style-loader",
            {
              loader: "css-loader",
              options: { importLoaders: 1 },
            },
            "postcss-loader",
          ],
        },
        {
          test: /\.less$/,
          use: [
            "vue-style-loader",
            {
              loader: "css-loader",
              options: { importLoaders: 1 },
            },
            "postcss-loader",
            "less-loader",
          ],
        },
        {
          test: /\.svg$/,
          resourceQuery: /wen-icon/,
          use: "vue-svg-icon-loader"
        },
      ],
    },
    devServer: {
      contentBase: "./dist",
      hot: true,
    },
    plugins: [
      new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: "public",
          }
        ]
      }),
      new Dotenv({
        path: envPath,
        systemvars: true,
        defaults: ".env",
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      })
    ],
  };
};
