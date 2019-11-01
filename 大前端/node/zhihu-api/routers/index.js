const fs = require("fs")

const readFiles = (app) => {
    const files = fs.readdirSync(__dirname)
    files.forEach(file => {
        if (file === "index.js") return
        const  route = require(`./${file}`)
        app.use(route.routes())
        app.use(route.allowedMethods())
    })
}

module.exports = (app) => {
    readFiles(app)
}