let paths = document.querySelectorAll("#welcome path");

for(let path of paths) {
    path.addEventListener("animationend", ()=> {
        path.classList.add("del-dash");
    })
}
