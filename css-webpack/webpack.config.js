const path = require("path")
const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { getEntry, getHtmlWebpackPlugins } = require('./src/utils/util');

module.exports = {
    mode: "development",
    resolve: {
        alias: {
            "@assets": path.resolve(__dirname, './src/assets')
        },
        extensions: [".js", ".json", ".css"]
    },
    devServer: {
        port: 9000,
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        before(app, server) {
            app.get('/api/user', (req, res) => {
                res.json({
                    custom: 'response'
                })
            })
        }
    },
    entry: getEntry(),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name]-[hash:6].js",
    },
    plugins: [
        new MiniCssExtractPlugin({filename: '[name].css', chunkFilename: '[id].css'}),
        new webpack.HotModuleReplacementPlugin(),
       ...getHtmlWebpackPlugins()
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10 * 1024
                    }
                }
            }
        ]
    }
}