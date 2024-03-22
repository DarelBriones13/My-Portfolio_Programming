const rightDiv = ( image ) => {
    let div = document.createElement("div")
    div.className = "home-image"
    div.innerHTML = `
        <img class = "man" src="images/${image}" alt="man">
    `
    return div
}


export { rightDiv }