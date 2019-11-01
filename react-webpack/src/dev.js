if (module.hot) {
    module.hot.accept(err => {
        if (err) {
            console.error('cannot update', err)
        }
    })
}