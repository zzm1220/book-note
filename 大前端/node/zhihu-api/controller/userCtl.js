const jsonwebtoken = require("jsonwebtoken")
const User = require("../models/usersModel")
const { secret } = require("../config")
class UserCtl {
    // 查找所有用户
    async find(ctx, next) {
        const userDB = await User.find()
        ctx.body = userDB
    }   
    // 查找单个用户
    async findById(ctx, next) {
        const user = await User.findById(ctx.params.id)
        if (!user) ctx.throw(404, '用户不存在')
        ctx.body = user
    }
    // 新建用户
    async create(ctx, next) {
        ctx.verifyParams({
            name: {
                type: 'string',
                required: true
            },
            age: {
                type: 'number',
                required: false,
                default: 20
            },
            password: {
                type: 'string',
                required: true
            }
        })
        const addUser = ctx.request.body
        const repeatedUser = await User.findOne({name: addUser.name})
        if (repeatedUser) ctx.throw(409, '用户已经存在')
        const newUser = await new User(addUser)
        newUser.save()
        ctx.body = newUser
    }
    // 更新用户
    async update(ctx, next) {
        ctx.verifyParams({
            name: {
                type: 'string',
                required: false
            },
            password: {
                type: 'string',
                required: false
            },
            age: {
                type: 'number',
                required: false
            }
        })
        const modifyUser = ctx.request.body
        const user = await User.findByIdAndUpdate(ctx.params.id, modifyUser)
        if (!user) ctx.throw(404, '用户不存在')
        ctx.body = user
    }
    // 删除用户
    async del(ctx, next) {
        const user = await User.findByIdAndRemove(ctx.paramd.id)
        if (!user) ctx.throw(404, '用户不存在')
        ctx.status = 204
    }
    // 用户登录
    async login(ctx, next) {
        ctx.verifyParams({
            name: {
                type: 'string',
                required: true
            },
            password: {
                type: 'string',
                required: true
            }
        })
        const user = await User.findOne(ctx.request.body)
        if(!user) ctx.throw(401, '用户名或密码不正确')
        const { _id, name } = user
        const token = jsonwebtoken.sign({_id, name }, secret, { expiresIn: '1d'})
        ctx.body ={ token }

    }
}

module.exports = new UserCtl()