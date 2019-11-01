const jsonwebtoken = require("jsonwebtoken")
const { secret } = require("../config")
const auth = async (ctx, next) => {
    const { authorization = ""} = ctx.request.header
    const token = authorization.replace("Bearer ", "");
    try {
        const user = jsonwebtoken.verify(token, secret);
        ctx.state.user = user
    } catch(err) {
        ctx.throw(401, err.message)
    }
    await next()
}
const checkOwner = async (ctx, next) => {
    if (ctx.state.user._id !== ctx.params.id) ctx.throw(403, '没有权限')
    await next()
}
module.exports =  { auth, checkOwner }