const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development'
const config = {
    entry: {
        app: path.join(__dirname, '../client/main.js')
    },
    output: {
        filename: '[name].[hash].js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/public', //
    },
    resolve: {
        'extensions': [
            '.js',
            '.jsx',
            '.png',
            '.gif',
            '.jpg',
            '.ico',
            '.scss',
            '.css'
        ],
        'alias': {
            '@client': path.resolve(__dirname, '../client'),
            '@server': path.resolve(__dirname, '../server')
        }
    },
    module: {
        rules: [
            {
                'test': /\.(js|jsx)$/, // babel 转换为兼容性的 js
                'exclude': /node_modules/,
                'loader': 'babel-loader',
            },
            {
                'test': /\.css$/,
                'loader': ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                'test': /\.less$/,
                'loader': ['style-loader', 'css-loader', {
                    'loader': 'less-loader',
                    'options': {
                        'javascriptEnabled': true
                    }
                }]
            },
        ]
    },
    plugins: [
        new HTMLPlugin({
            hash: true,
            title: 'マイページ｜Mysurance（マイシュアランス）マイページ',
            'filename': 'index.html',
            template: path.join(__dirname, '../views/template.html'),
            'inject': 'body'
        })
    ]
}
if (isDev) {
    config.devServer = {
        host: 'localhost',
        port: '3000',
        contentBase: path.join(__dirname, '../dist'),
        hot: true,
        overlay: {
            errors: true
        },
        publicPath: '/public',
        historyApiFallback: {
            index: '/public/index.html'
        }
    }
}
module.exports = config