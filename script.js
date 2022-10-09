


const icons = document.getElementById("icons");
const submenu = document.querySelector(".burger-menu-submenu");

icons.addEventListener("click", openMenu);

function openMenu () {
     if (icons.src.match("images/icon-hamburger.svg")) {
          icons.src = "images/icon-close.svg"
          submenu.style.display = "flex"
          icons.classList.toggle("animations")

     }

     else {
          icons.src = "images/icon-hamburger.svg"
          submenu.style.display = "none"
          icons.classList.toggle("animations")


     }
}





