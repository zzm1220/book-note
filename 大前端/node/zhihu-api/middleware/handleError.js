const handleError = async (ctx, next) => {
    try {
        await next()
    } catch(error) {
        ctx.status = error.status || error.statusCode || 500
        ctx.body = {
            message: error.message
        }
    }
}

module.exports = handleError