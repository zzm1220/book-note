module.exports = {
    postFormat: (e, { stack, ...rest }) => {
        return process.env.NODE_ENV === "production" ?
               rest: {stack, ...rest}
    }
}