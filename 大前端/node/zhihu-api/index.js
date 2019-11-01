const Koa = require("koa")
const bodyParser = require("koa-bodyparser")
const parameter = require("koa-parameter")
const error = require("koa-json-error")
const app = new Koa()
const initRouter = require("./routers")
const formatOptions = require("./utils/formatError")
const mongoose = require("mongoose")
const { connection } = require("./config")

mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("mongodb连接成功")
})

app.use(error(formatOptions))
app.use(bodyParser())
app.use(parameter(app))
initRouter(app)

app.listen(8001, ()=>{
    console.log("server run on 8001")
})