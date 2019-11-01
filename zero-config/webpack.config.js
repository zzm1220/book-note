const path = require("path")

module.exports = {
    resolve: {
        extensions: ['.js', '.json', '.css'],
        alias: {
            src: path.resolve(__dirname, 'src'),
            '@lib': path.resolve(__dirname, 'src/lib')
        }
    },
    // 入口文件
    entry: {
        main: "./src/es/index.js", 
    },
    // 打包文件路径
    output: { 
        library: "myLib",
        path: path.resolve(__dirname, './dist/es/'),
        filename: "[name].js",
        publicPath: 'F:/study/book-note/zero-config/dist/es/'
    },
    mode: 'development', // 开发模式
    // 模块处理
    module: {
        rules: [
            // 处理js模块
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [

    ]
}