function SideBar() {
    const root = document.getElementById("root")
    const sidebarDiv = document.createElement("div")
    sidebarDiv.innerText = "content"
    root.append(sidebarDiv)
}

export default SideBar