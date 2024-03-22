const project = ( title2, image1, image2, image3, para2, para3, para4, learnBtn) => {
    let div = document.createElement("div")
    div.className = "proj"
    div.innerHTML = `
    
    <div class="proj-1">
        <img class="proj-image" src="images/${image1}" alt="project">
        <div class="intro">
            <h2>Hotel Reservation System</h2>
            <p class="para2">${para2}</p>
            <button class="learnBtn">${learnBtn}</button>
        </div>     
    </div>
    <div class="proj-1">
        <img class="proj-image" src="images/${image2}" alt="project"> 
        <div class="intro">
            <h2>Library Management System</h2>
            <p class="para2">${para3}</p>
            <button class="learnBtn">${learnBtn}</button>
        </div> 
    </div>
    <div class="proj-1">
        <img class="proj-image" src="images/${image3}" alt="project">
        <div class="intro">
            <h2>Website Porfolio</h2>
            <p class="para2">${para4}</p>
            <button class="learnBtn">${learnBtn}</button>
        </div> 
    </div>
    `
    return div
}

export { project }