var menu = document.querySelector(".menu");
var links = document.querySelector(".links")

menu.addEventListener('click' , () =>{
    links.classList.toggle("active");
})