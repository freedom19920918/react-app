const path = require('path');
const webpack = require('webpack');
const config = {
    entry: './src/index.js',
    output: {
        filename: 'react-app.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react','es2015',"stage-0"],
                    }
                },

            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        port: 9000,
        hot: true,
        openPage: 'src/',
        // publicPath: '/src/',
        inline: true,
        // open: true,
        // contentBase: './dist',
        // historyApiFallback: true,
        stats: {
            modules: false,
            color: false,
            version: false,
            timings: false,
        }
    }
};
module.exports = config;