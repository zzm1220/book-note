class HomeCtl {
     async index(ctx, next) {
        ctx.body = "<h1>this is home page</h1>"
    }
}

module.exports = new HomeCtl()