const {merge} = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const path = require('path');

module.exports = merge(webpackConfig, {
    mode: 'development',
    entry: './src/index.tsx',
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "/"),
        },
        port: 8888,
        open: true
    },
})