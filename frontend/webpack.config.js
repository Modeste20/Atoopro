const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack')


module.exports = () => {

        // call dotenv and it will return an Object with a parsed key 
    const env = dotenv.config().parsed;
    
    // reduce it to a nice object, the same as before
    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});

    return ({
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public'),
        publicPath:'/'
    },
    plugins: [
        new webpack.DefinePlugin(envKeys)
    ],
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
})

};