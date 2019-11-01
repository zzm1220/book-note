const jwt = require("koa-jwt")
const Router = require("koa-router")
const UserRouter = new Router({
    prefix: "/users"
})
const { 
    find, 
    findById, 
    create, 
    update, 
    del,
    login
} = require("../controller/userCtl")
const { secret } = require("../config")
const { checkOwner } = require("../middleware/auth")
// 鉴权方法
const auth = jwt({ secret })
// 查找用户列表
UserRouter.get('/', find)

// 查找特定用户
UserRouter.get('/:id', findById)

// 增加用户
UserRouter.post('/', create)
// 修改用户
UserRouter.patch('/:id', auth, checkOwner, update)
// 删除用户
UserRouter.delete('/:id', auth, checkOwner,del)
// 用户登录
UserRouter.post('/login', login)
module.exports = UserRouter
