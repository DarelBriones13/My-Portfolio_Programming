const rightDiv = (image) => {
    let div = document.createElement('div')
    div.className  = 'rightDiv'
    div.innerHTML = `
                    <img src="images/${image}" alt="images">
    `
    return div
}

export{rightDiv}