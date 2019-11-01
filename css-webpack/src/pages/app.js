import css from "../styles/index"
import img from "../assets/images/live.png"
console.log("app.js updated")
console.log(css, img)
if (module.hot) {
    module.hot.accept(err => {
        console.error('Cannot apply HMR update', err)
    })
}