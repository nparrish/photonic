var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app/index.ts'
    },

    target: 'node',

    devtool: 'source-map',
    
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js'
    },

    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
        modulesDirectory: ["node_modules"]
    },

    module: {
        loaders: [
            // note that babel-loader is configured to run after ts-loader
            { test: /\.ts(x?)$/, loader: "babel-loader?presets[]=es2015!ts-loader" },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new CopyWebpackPlugin([
            { from: './src/main.js', to: 'main.js' },
            { from: './src/app.package.json', to: 'package.json' }
        ])
    ]
}