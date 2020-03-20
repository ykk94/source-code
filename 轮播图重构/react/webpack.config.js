const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            filename: '[name].[hash:8].css',
        }),
        new HtmlWebpackPlugin({
            title: 'webpack plugin demo',
            filename: 'index.html',
            template: path.resolve(__dirname, 'index.html')
        }),
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                // 匹配 js 文件
                test: /\.js$/,
                // 排除 node_modules 里的文件
                exclude: /(node_modules)/,
                use: {
                    // 通过 babel-loader 来处理 js 文件
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                  }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                ]
            },
        ]
  },
  mode: 'none',
}
