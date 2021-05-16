const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => {
  const envPath = `.${env.file || "env"}`;
  return {
    mode: "production",
    entry: "/src/main.js",
    output: {
      filename: "[name].js",
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
          resourceQuery: /wen-icon/,
          use: "vue-svg-icon-loader"
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
      new Dotenv({
        path: envPath,
        systemvars: true,
        defaults: ".env",
      })
    ],
  };
};
