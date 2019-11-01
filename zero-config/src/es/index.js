import hello from './hello'
import world from './world'
import sum from "src/pages/demo/index"
import { Promise } from 'core-js';
import(
    /*
    webpackChunkName: 'lazy-name'
    */
    "./lazy.js"
).then(lazy => {
    console.log(lazy)
})

console.log(`${hello} - ${world}`)
console.log(sum([1,2,33]))
const p = new Promise()
[1,3].includes(1)