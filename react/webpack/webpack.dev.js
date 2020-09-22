const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: {
        index: [
            'eventsource-polyfill',
            'webpack-hot-middleware/client?noInfo=true&reload=true',
            path.resolve(__dirname, '../client/main.js')
        ],
        framework: ['react', 'react-dom'],
    },
    output: {
        filename: 'js/[name].[hash:4].bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        open: true,
        port: 3000,
        compress: true,
        hot: true
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                  'style-loader',
                  'css-loader',
                  'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: '王耀杰 的node react 项目',
            filename: 'index.html',
            template: path.resolve(__dirname, '../views/index.ejs'),
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: 'css/[name].[hash].css',
        //     chunkFilename: 'css/[id].[hash].css',
        // }),
    ],
};
