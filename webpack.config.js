const path = require('path');

module.exports = {
    entry: {
        vendor: ['jquery', 'popper.js', 'bootstrap'],
        app: './src/js/index.js'
    },
    mode: 'development',
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=public/fonts/[name].[ext]'
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'file-loader?name=public/img/[name].[ext]'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
            }
        ]
    }
};