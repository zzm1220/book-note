const path = require("path")
module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, './bundle-dist'),
        filename: '[name].js'
    },
    plugins: [],
    module: {
        
    }
}