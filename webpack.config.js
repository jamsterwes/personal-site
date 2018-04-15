const path = require('path');

module.exports = {
    entry: {
        vendor: ['jquery', 'popper.js', 'bootstrap'],
        app: './src/ts/index.tsx'
    },
    mode: 'development',
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      // changed from extensions: [".js", ".jsx"]
      extensions: [".ts", ".tsx", ".js", ".jsx"]
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
                test: /\.(j|t)sx?$/,
                exclude: /node_modules/,
                use: {
                  loader: "awesome-typescript-loader"
                }
            }
        ]
    },
    // addition - add source-map support
    devtool: "source-map"
};