const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css']
    },
    entry: {
        index: './src/index.jsx'
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
    })],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            require.resolve('@babel/preset-react'),
                            [require.resolve('@babel/preset-env'), {modules: false}]
                        ],
                        cacheDirectory: true
                    }
                }
            }
        ]
    }
}