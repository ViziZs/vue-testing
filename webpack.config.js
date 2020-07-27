const nodeExternals = require('webpack-node-externals');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}