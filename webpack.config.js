var webpack = new require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const pkg = require('./package.json');
module.exports = {
    cache: true,
    //The sources of this app are made from a Typescript file and a Less file,
    //These "entry points" will both respectively import their Typescript and less dependencies
    entry: {

        vendorbundle: Object.keys(pkg.dependencies).filter(function (v) {
            if (v == "bootstrap" || v == "bootstrap" || v == "jquery" || v == "react" ||
                v == "react-dom" || v == "react-router")
                return v;
        }),

        nonessentialvendorbundle: Object.keys(pkg.dependencies).filter(function (v) {
            if (v != "bootstrap" || v != "bootstrap" || v != "jquery" || v != "react" ||
                v != "react-dom" || v != "react-router")

                return v;
        }),
        app: ['./src/app/main.tsx']
    },
    //The output is a single bundle of js and css which is loaded by index.html
    output: {
        path: 'dist//build/generated', //Path where bundle.js is generated on the file system
        publicPath: 'dist//build/generated/', //Relative parent URL of the bundle
        filename: "[name].js",
        chunkFilename: "[id]-bundle.js"
    },
    //The list of extension that will be resolved for modules
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.less', '.css'],
    },
    // Generate a source map to allow debugging of original source files rather
    // than the compiled webpack output
    devtool: 'source-map',
    // ts-loader will transpile the Typescript into Javascript
    // style: insert a style tag with the CSS in the page
    module: {
        loaders: [
            { test: /\.ts(x?)$/, loader: 'ts-loader?sourceMap', exclude: /node_modules/, }
        ],
        app: ["./src/**/*.ts?(x)"]
    },

    node: {
        fs: "empty"
    },

    plugins: [
        // Split vendor and main bundle to prevent the user from downloading all the vendor JS again when we put out a new release
        // Longer term we might want to look at splitting into more bundles for different areas of the application for even faster updates
        /*
                new webpack.optimize.CommonsChunkPlugin({
                    filename: 'non-essential-vendor-bundle.js',
                    names: 'nonessentialvendorbundle',
                    minimize: true,
                    minChunks: Infinity
                }),
        
                new webpack.optimize.CommonsChunkPlugin({
                    filename: 'vendor-bundle.js',
                    names: 'vendorbundle',
                    minimize: true,
                    minChunks: Infinity,
                    chunks: ['nonessentialvendorbundle']
                }),
        
        
                // Minification - need to add this to production build
                new webpack.optimize.UglifyJsPlugin({
                    filename: 'application-bundle.js',
                    names: 'app',
                    compress: {
                        warnings: false
                    },
                    minimize: true,
                    mangle: false,
                    minChunks: Infinity
                }),
        */
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),

        // pull out the css/less content and write as a separate file
        new ExtractTextPlugin("[name].css")
    ]
};
