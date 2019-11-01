const Router = require("koa-router")
const homeRoute = new Router()
const { index } = require("../controller/homeCtl")

homeRoute.get("/", index)

module.exports = homeRoute
