const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const fadeElems = document.querySelectorAll(".has-fade");


const overlay = document.querySelector(".overlay");
btnHamburger.addEventListener("click",function() {
    console.log("Item Clicked ");
    if (header.classList.contains("open"))
    {
        body.classList.remove("noscroll");
        header.classList.remove("open");
        fadeElems.forEach(function(element){
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        });
        

    }
    else{
        header.classList.add("open");
        body.classList.add("noscroll");
        fadeElems.forEach(function(element){
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
        });
    }
});