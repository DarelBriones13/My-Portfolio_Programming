const homeDiv = ( para1 ) => {
    let div = document.createElement("div")
    div.className = "home-content"
    div.innerHTML = `
        <h1>Hi, It's <span>Briones</span></h1>
        <div class="sub">
            <h2>Web</h2>
            <h3 data-text="Developer">Developer</h3>
        </div>
        
        <div class="social-icon">
            <a href="https://www.facebook.com/darelsabaria123"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/brns_drl13/"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.tiktok.com/@dstyyleee"><i class="fa-brands fa-tiktok"></i></a>
            <a href="https://github.com/DarelBriones13"><i class="fa-brands fa-github"></i></a>
        </div>
        
        <a onclick="location.href='resume/My Resume.pdf'" class="btn">Download Resume</a>
    `
    
    return div
}

export { homeDiv }