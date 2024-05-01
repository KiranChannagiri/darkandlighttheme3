let button = document.querySelector(".button");
let text = document.querySelector(".text");
let container = document.querySelector(".container");
button.addEventListener("click",()=>
{
    text.classList.toggle("bcolor")
    container.classList.toggle("bgwhite");
    button.classList.toggle("bgblack");
    button.classList.toggle("wcolor");
});
