console.log("this is a b c list page update")
const app = document.getElementById("app")
app.innerText = 'hello hot module webpack'
if (module.hot) {
    module.hot.accept(err => {
        console.error('Cannot apply HMR update', err)
    })
}