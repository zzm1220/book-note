import version3 from './assets/images/version3.png'
import './assets/styles/index.scss'

const img = new Image()
img.classList.add('avatar')
img.src = version3
const root = document.getElementById("root")
root.appendChild(img)