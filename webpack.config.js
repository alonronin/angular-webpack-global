var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src', 'index.js'),
        vendor: path.resolve(__dirname, 'src', 'vendor.js')
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    module: {
        loaders: [
            { test: /angular\.js$/, loader: "exports?angular" },
            { test: /\.html$/, loader: 'raw' }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            _: 'lodash'
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",

            // filename: "vendor.js"
            // (Give the chunk a different name)

            minChunks: Infinity,
            // (with more entries, this ensures that no other module
            //  goes into the vendor chunk)
        })
    ]
};