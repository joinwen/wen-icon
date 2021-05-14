const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const envPath = `.${env.path || "env"}`;
  return {
    mode: "development",
    entry: "/src/index.js",
    output: {
      filename: "[name].index.js",
      path: path.resolve(__dirname, "dist"),
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
          use: [
            "vue-svg-loader",
          ],
        },
      ],
    },
    devServer: {
      contentBase: "./dist",
      hot: true,
    },
    plugins: [
      new VueLoaderPlugin(),
      new Dotenv({
        path: envPath,
        systemvars: true,
        defaults: ".env",
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  };
};
