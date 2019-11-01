function Header() {
    const root = document.getElementById("root")
    const headerDiv = document.createElement("div")
    headerDiv.innerText = "header"
    root.append(headerDiv)
}

export default Header