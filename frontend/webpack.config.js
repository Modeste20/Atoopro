const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build'),
        publicPath:'/'
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                  'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                type:'asset'
            },
            {
                test: /\.svg$/,
                issuer: /\.jsx?$/,
                use: ['@svgr/webpack','url-loader'],
            },
            {
                test: /\.(woff|woff2)$/,
                use: {
                  loader: 'url-loader',
                },
            },
        ]
    },
    mode:'development'
};