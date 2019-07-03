const webpack = require('webpack'); // 引入webpack
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入插件

module.exports = {
  devtool: 'eval-source-map', // 在这里配置devtool
  mode: "development", // 4.0版本需要添加这个配置

  entry:  __dirname + "/app/main.js", // 之前提到的唯一入口文件
  output: {
    path: __dirname + "/common", // 打包后的文件存放的地方
    filename: "index.js" // 打包后输出文件的文件名
  },

  devServer: {
    contentBase: "./common", // 本地服务器所加载的页面所在的目录
    historyApiFallback: true, // 不跳转
    inline: true, // 实时刷新
    hot: true // 在这里配置hot
  },
  module: { // 这里配置Bobal
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      }, 
      { // 这里配置这两个工具
        test: /\.css$/,
        // exclude: /node_modules/,
        use: [ // 请注意这里对同一个文件引入多个loader的方法。
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          }, {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },
  // 配置插件
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      //new 一个这个插件的实例，并传入相关的参数
      template: __dirname + "/app/index.tmpl.html"
    }),
    new webpack.HotModuleReplacementPlugin() // 热加载插件
  ]
}