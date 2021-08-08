//menuBtn => Javascript para abrir o menu
//cancelBtn => Javascript para fechar o menu
//navBar => Javascript para ativar e desativar a navbar mobile

// Sidebar
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let navBar = document.querySelector(".navbar");

menuBtn.onclick = function(){
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    navBar.classList.add("active")
}

cancelBtn.onclick = function(){
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navBar.classList.remove("active")
}

//Sticky Nav Menu
let nav = document.querySelector("nav")
let val
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky")
    }else{
        nav.classList.remove("sticky")
    }
}
