function Content () {
    const root = document.getElementById("root")
    const contentDiv = document.createElement("div")
    contentDiv.innerText = "content"
    root.append(contentDiv)
}

export default Content