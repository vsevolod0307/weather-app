const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin  = require('@pmmmwh/react-refresh-webpack-plugin');

let mode = "development";
let target = 'web';
if(process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

const plugins = [
  new HtmlWebpackPlugin({
    template: "./src/index.html"
  }),
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css"
  })
];

if(process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin())
}

module.exports = {
  mode,
  plugins,
  target,
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true
  },
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, // не обрабатываем файлы из node_modules
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true, // Использование кэша для избежания рекомпиляции
            // при каждом запуске
          },
        },
      },
      { 
        test: /\.(html)$/, use: ["html-loader"] 
      },
      {
        test: /\.(s[ac]|c)ss$/i, // /\.(le|c)ss$/i если вы используете less
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === 'production' ? 'asset' : 'asset/resource', // В продакшен режиме
        // изображения размером до 8кб будут инлайнится в код
        // В режиме разработки все изображения будут помещаться в dist/assets
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  }
}