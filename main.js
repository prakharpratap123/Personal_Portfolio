//Header Scroll
let nav= document.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}


//nav hide

let navBar=document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show")
    })
})


// Hamburger logic
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click",()=>{
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })


// document.querySelectorAll(".nav-link").forEach(n=>
//     n.addEventListener("click", ()=>{
//         hamburger.classList.remove("active");
//         navMenu.classList.remove("active")
//     }))