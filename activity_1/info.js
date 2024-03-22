const leftDiv = (title, para, button) => {
    let div = document.createElement('div')
    div.className = "leftDiv"
    div.innerHTML = `
                    <h1>${title}</h1>
                    <p>${para}</p>
                    <button>${button}</button>
    `
    return div
}
export {leftDiv}