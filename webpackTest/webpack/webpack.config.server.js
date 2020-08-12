const path = require('path');
module.exports = {
    target: 'node',
    entry: {
        app: path.join(__dirname, '../client/pages/App')
    },
    output: {
        filename: 'server-app.js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/public', //
        libraryTarget: 'commonjs2'
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
    }
}