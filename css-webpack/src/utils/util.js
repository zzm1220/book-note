const path = require("path")
const globby = require("globby")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// 处理入口文件
const getEntry = exports.getEntry = () => {
    // 处理后的入口对象
    const rs = {}
    // 处理入口文件
    const pages = globby.sync("./pages/*.js", {
        cwd: path.join(__dirname, '../')
    })
    // 获取键值
    pages.forEach(page => {
        // 键值
        const name = path.basename(page, '.js')
        let p = path.join('./src', page)
        if (!p.startsWith('.')) {
            p = './' + p
        }
        rs[name] = p
    })
    return rs
}

// 处理html-webpack-plugin
exports.getHtmlWebpackPlugins = () => {
    const entries = getEntry() // 获取入口文件对象
    return Object.keys(entries).reduce((plugins, filename)=>{
        plugins.push(
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname,'../template/index.html'),
                filename: `${filename}.html`,
                chunks: [filename]
            })
        )
        return plugins
    }, [])
}