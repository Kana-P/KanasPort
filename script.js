// Hamburger
let sidebar = document.getElementById("side");
let ham = document.getElementById("ham");
function HamOpen() {
    const hamburger = document.querySelector("#ham");
    if (hamburger.classList.contains("stage0")){
        sidebar.style.right = "0px";
        ham.classList.add("stage1");
        ham.classList.remove("stage0");
        ham.classList.add("fa-times");
        ham.classList.remove("fa-bars");
    } else if (hamburger.classList.contains("stage1")){
        sidebar.style.right = "-300px";
        ham.classList.add("stage0");
        ham.classList.remove("stage1");
        ham.classList.add("fa-bars");
        ham.classList.remove("fa-times");
    }
;}