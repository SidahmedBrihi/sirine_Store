let searchBar1 = document.querySelector("header .search #search") ;
let NavSearch = document.querySelector(".nav") ;
let closeNavSearch = document.querySelector(".nav #close")
let menuButton = document.querySelector("header .search .bar") ;
let menu = document.querySelector(".menu") ;
let closeButtnMenu = document.querySelector(".menu .close") ;
let landingImgs = document.querySelectorAll(".landing img") ;
let nextImgLanding = document.querySelector(".landing #right") ;
let prevImgLanding = document.querySelector(".landing #left") ;
let bulletsLanding = document.querySelectorAll(".landing .bullets li") ;
let header = document.querySelector("header") ;
let boxImage = document.querySelector(".new-collection .container .right") ;
let boxImageType = document.querySelector(".new-collection .container .right .type") ;
let boxImagePrix = document.querySelector(".new-collection .container .right .prix") ;
let nextBoxImage = document.querySelector(".new-collection .container .right #right") ;
let prevBoxImage = document.querySelector(".new-collection .container .right #left") ;
let creators = document.querySelectorAll(".creators .boxx .box") ;
/// header fixed on scroll
window.onscroll = ()=> {
    if (window.scrollY > header.offsetHeight + 200 ) {
        header.style.position = "fixed" ;
        header.style.width = "100%" ;
    } else if (window.scrollY < header.offsetHeight + 50 ) {
        header.style.position = "relative" ;
    } 
}
/// header events button
searchBar1.onclick = ()=> {
    searchBar1.classList.toggle("hidden") ;
    NavSearch.classList.toggle("active") ;
    closeNavSearch.onclick = ()=> {
        NavSearch.classList.toggle("active") ;
        searchBar1.classList.toggle("hidden") ;
    }
}
menuButton.onclick = () => {
    menu.classList.toggle("active") ;
    
} ;
closeButtnMenu.onclick = () => {
    menu.classList.toggle("active")
}

/// landing change Images 
let ind = 0 ;
nextImgLanding.onclick = () => {
    ind++ ;
    if (ind >= 4) {
        ind = 0 ;
    }
    landingImgs.forEach( imgs => {
        imgs.classList.remove("active") ;
    }) ;
    landingImgs[ind].classList.add("active") ;
    /// bullets change bg
    bulletsLanding.forEach(bullet => {
        bullet.classList.remove("active")
    });
    bulletsLanding[ind].classList.add("active") ;
    
}
prevImgLanding.onclick = () => {
    ind-- ;
    if (ind < 0) {
        ind = landingImgs.length - 1 ;
    }
    landingImgs.forEach( imgs => {
        imgs.classList.remove("active") ;
    }) ;
    landingImgs[ind].classList.add("active") ;
    /// bullets change bg
    bulletsLanding.forEach(bullet => {
        bullet.classList.remove("active")
    });
    bulletsLanding[ind].classList.add("active") ;
    
}
/// boxImage change 
let i = 0 ;
nextBoxImage.onclick = () => {
    fetch("store.json")
    .then((resolve) => {
        return resolve.json() ;
    })
    .then(res => {
        i++;
        if (i > 3) {
            i=0 ;
        }
        boxImage.style.backgroundImage = `url("../imgs/${res[i].name}.jpg")` ;
        boxImageType.innerHTML = res[i].type ;
        boxImagePrix.innerHTML = res[i].prix ;
    })
}
prevBoxImage.onclick = () => {
    fetch("store.json")
    .then((resolve) => {
        return resolve.json() ;
    })
    .then(res => {
        i--;
        if (i < 0) {
            i = res.length - 1 ;
        }
        boxImage.style.backgroundImage = `url("../imgs/${res[i].name}.jpg")` ;
        
    })
}
// create creators bullets
let lists = document.createElement("ul") ;
document.querySelector(".creators .container").appendChild(lists) ;
let aa = 0;
creators.forEach( creator => {
    let bullet = document.createElement("li") ;
    bullet.setAttribute("data-num", aa)
    lists.appendChild(bullet) ;
    aa++ ;
}) ;
document.querySelectorAll(".creators ul li")[0].classList.add("active") ;
document.querySelectorAll(".creators ul li").forEach (li => {
    li.onclick = ()=> {
        document.querySelectorAll(".creators ul li").forEach(li => {
            li.classList.remove("active") ;
        }) ;
        li.classList.add("active") ;
        creators.forEach(creator => {
            creator.classList.remove("active") ;
        }) ;
        document.querySelector(`[data-class = "${document.querySelector(".creators ul li.active").dataset.num}"]`).classList.add("active") ;
        
    }
})